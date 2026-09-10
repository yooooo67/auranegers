import { QUESTION_MAX, QUESTION_MIN, QUESTION_TARGET } from '../config.js'
import { scoreOptions, weightsFromAnswers } from './scoring.js'

function rankDistance(before, after) {
  const indexOf = new Map(before.map((item, index) => [item.id, index]))
  let distance = 0
  after.forEach((item, index) => {
    const previous = indexOf.get(item.id)
    if (previous === undefined) return
    distance += Math.abs(previous - index)
  })
  return distance
}

function questionUsefulness(question, options, answers, questions) {
  const currentWeights = weightsFromAnswers(questions, answers)
  const current = scoreOptions(options, currentWeights).sort((a, b) => b.score - a.score)
  const focus = current.slice(0, 12)

  let total = 0
  for (const choice of question.choices) {
    const nextAnswers = { ...answers, [question.id]: choice.id }
    const nextWeights = weightsFromAnswers(questions, nextAnswers)
    const next = scoreOptions(options, nextWeights).sort((a, b) => b.score - a.score)
    total += rankDistance(focus, next.slice(0, 12))
  }

  const avg = total / Math.max(question.choices.length, 1)
  const uniqueChoices = new Set(question.choices.map((choice) => JSON.stringify(choice.weights)))
  return avg + uniqueChoices.size * 0.4
}

export function getNextQuestion({ questions, options, answers, askedIds }) {
  const count = askedIds.length
  if (count >= QUESTION_MAX) return null

  const remaining = questions.filter((question) => !askedIds.includes(question.id))
  const relevant = remaining.filter((question) => question.relevant(answers))
  const pool = relevant.length ? relevant : remaining

  if (!pool.length) return null

  const anchors = pool
    .filter((question) => question.stage === 'anchor')
    .sort((a, b) => a.priority - b.priority)

  if (anchors.length && count < 2) {
    return anchors[0]
  }

  const scored = pool.map((question) => ({
    question,
    usefulness: questionUsefulness(question, options, answers, questions),
    priority: question.priority,
  }))

  scored.sort((a, b) => {
    if (b.usefulness !== a.usefulness) return b.usefulness - a.usefulness
    return a.priority - b.priority
  })

  const best = scored[0]
  if (!best) return null

  if (count >= QUESTION_TARGET) {
    if (best.usefulness < 18) return null
    return best.question
  }

  if (count >= QUESTION_MIN && count < QUESTION_TARGET) {
    return best.question
  }

  return best.question
}

export function shouldFinish(askedCount, nextQuestion) {
  if (askedCount >= QUESTION_MAX) return true
  if (!nextQuestion && askedCount >= QUESTION_MIN) return true
  return false
}
