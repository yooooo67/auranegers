import { CATEGORIES } from '../src/data/catalog.js'
import { getNextQuestion, shouldFinish } from '../src/engine/decisionTree.js'
import { rankResults, topThree, weightsFromAnswers } from '../src/engine/scoring.js'

function walk(category, pick) {
  let answers = {}
  let askedIds = []
  const ids = []
  while (true) {
    const question = getNextQuestion({
      questions: category.questions,
      options: category.options,
      answers,
      askedIds,
    })
    if (shouldFinish(askedIds.length, question) || !question) break
    const choice = pick(question, askedIds.length)
    answers[question.id] = choice.id
    askedIds = [...askedIds, question.id]
    ids.push(question.id)
  }
  const ranked = topThree(rankResults(category.options, weightsFromAnswers(category.questions, answers), { shuffleSeed: 1 }))
  return { count: ids.length, ids, ranked, answers }
}

function randomPick(question, i, seed) {
  const n = question.choices.length
  const idx = Math.abs(Math.sin(seed * 17 + i * 13)) % 1
  return question.choices[Math.floor(idx * n)]
}

for (const key of ['food', 'watch']) {
  const counts = []
  const questionSets = new Set()
  for (let i = 0; i < 40; i++) {
    const result = walk(CATEGORIES[key], (q, idx) => randomPick(q, idx, i + 1))
    counts.push(result.count)
    questionSets.add(result.ids.join('>'))
  }
  const avg = counts.reduce((a, b) => a + b, 0) / counts.length
  console.log(key, {
    min: Math.min(...counts),
    max: Math.max(...counts),
    avg: Number(avg.toFixed(2)),
    uniquePaths: questionSets.size,
    sample: walk(CATEGORIES[key], (q, idx) => randomPick(q, idx, 3)),
  })
}
