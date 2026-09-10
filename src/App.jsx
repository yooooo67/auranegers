import { useMemo, useState } from 'react'
import { HistoryScreen } from './components/HistoryScreen.jsx'
import { Home } from './components/Home.jsx'
import { QuestionScreen } from './components/QuestionScreen.jsx'
import { ResultScreen } from './components/ResultScreen.jsx'
import { QUESTION_TARGET } from './config.js'
import { CATEGORIES } from './data/catalog.js'
import { getNextQuestion, shouldFinish } from './engine/decisionTree.js'
import { rankResults, rerankWithSamePreferences, topThree, weightsFromAnswers } from './engine/scoring.js'
import { clearHistory, loadHistory, saveDecision } from './history/storage.js'

export default function App() {
  const [view, setView] = useState('home')
  const [categoryId, setCategoryId] = useState(null)
  const [answers, setAnswers] = useState({})
  const [askedIds, setAskedIds] = useState([])
  const [question, setQuestion] = useState(null)
  const [results, setResults] = useState([])
  const [weights, setWeights] = useState({})
  const [history, setHistory] = useState(() => loadHistory())

  const category = categoryId ? CATEGORIES[categoryId] : null

  const totalHint = useMemo(() => {
    const n = askedIds.length + (question ? 1 : 0)
    return Math.min(7, Math.max(QUESTION_TARGET, n))
  }, [askedIds.length, question])

  function startCategory(id) {
    const selected = CATEGORIES[id]
    const first = getNextQuestion({
      questions: selected.questions,
      options: selected.options,
      answers: {},
      askedIds: [],
    })
    setCategoryId(id)
    setAnswers({})
    setAskedIds([])
    setQuestion(first)
    setResults([])
    setWeights({})
    setView('question')
  }

  function finishWith(nextAnswers, selected) {
    const nextWeights = weightsFromAnswers(selected.questions, nextAnswers)
    const ranked = topThree(rankResults(selected.options, nextWeights))
    persist(selected, ranked)
    setAnswers(nextAnswers)
    setWeights(nextWeights)
    setResults(ranked)
    setQuestion(null)
    setView('result')
  }

  function persist(selected, ranked) {
    const winner = ranked[0]
    const nextHistory = saveDecision({
      id: `${Date.now()}-${winner.id}`,
      timestamp: Date.now(),
      categoryId: selected.id,
      categoryLabel: selected.label,
      winner: winner.label,
      percent: winner.percent,
      top: ranked.map((item) => ({ label: item.label, percent: item.percent })),
    })
    setHistory(nextHistory)
  }

  function onSelect(choiceId) {
    if (!category || !question) return
    const nextAnswers = { ...answers, [question.id]: choiceId }
    const nextAsked = [...askedIds, question.id]
    const nextQuestion = getNextQuestion({
      questions: category.questions,
      options: category.options,
      answers: nextAnswers,
      askedIds: nextAsked,
    })

    setAnswers(nextAnswers)
    setAskedIds(nextAsked)

    if (shouldFinish(nextAsked.length, nextQuestion) || !nextQuestion) {
      finishWith(nextAnswers, category)
      return
    }

    setQuestion(nextQuestion)
  }

  function onAgain() {
    if (!category) return
    const ranked = topThree(rerankWithSamePreferences(category.options, weights))
    persist(category, ranked)
    setResults(ranked)
  }

  function goHome() {
    setView('home')
    setCategoryId(null)
    setQuestion(null)
  }

  function onBack() {
    if (!askedIds.length) {
      goHome()
      return
    }
    const previousId = askedIds[askedIds.length - 1]
    const nextAsked = askedIds.slice(0, -1)
    const nextAnswers = { ...answers }
    delete nextAnswers[previousId]
    const previousQuestion = category.questions.find((item) => item.id === previousId)
    setAskedIds(nextAsked)
    setAnswers(nextAnswers)
    setQuestion(previousQuestion)
    setView('question')
  }

  return (
    <div className="app-shell">
      {view === 'home' && (
        <Home onChoose={startCategory} onOpenHistory={() => setView('history')} />
      )}
      {view === 'question' && category && question && (
        <QuestionScreen
          categoryLabel={category.label}
          question={question}
          index={askedIds.length}
          totalHint={totalHint}
          onSelect={onSelect}
          onBack={onBack}
        />
      )}
      {view === 'result' && results[0] && (
        <ResultScreen results={results} onAgain={onAgain} onHome={goHome} />
      )}
      {view === 'history' && (
        <HistoryScreen
          items={history}
          onClose={() => setView('home')}
          onClear={() => setHistory(clearHistory())}
        />
      )}
    </div>
  )
}
