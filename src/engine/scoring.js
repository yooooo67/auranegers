function cloneWeights(weights) {
  return { ...weights }
}

export function mergeWeights(base, extra) {
  const next = cloneWeights(base)
  for (const [key, value] of Object.entries(extra || {})) {
    next[key] = (next[key] || 0) + value
  }
  return next
}

export function weightsFromAnswers(questions, answers) {
  let weights = {}
  for (const question of questions) {
    const choiceId = answers[question.id]
    if (!choiceId) continue
    const choice = question.choices.find((item) => item.id === choiceId)
    if (!choice) continue
    weights = mergeWeights(weights, choice.weights)
  }
  return weights
}

export function scoreOptions(options, weights) {
  return options.map((option) => {
    let score = 0
    for (const [tag, optionWeight] of Object.entries(option.tags)) {
      const preference = weights[tag] || 0
      score += preference * optionWeight
    }
    return { id: option.id, label: option.label, score }
  })
}

function shiftScores(scored) {
  const min = Math.min(...scored.map((item) => item.score), 0)
  return scored.map((item) => ({
    ...item,
    shifted: item.score - min + 1,
  }))
}

export function toPercents(scored) {
  const shifted = shiftScores(scored)
  const max = Math.max(...shifted.map((item) => item.shifted), 1)
  return shifted.map((item) => {
    const ratio = item.shifted / max
    const percent = Math.round(46 + ratio * 52)
    return {
      id: item.id,
      label: item.label,
      score: item.score,
      percent: Math.min(99, Math.max(18, percent)),
    }
  })
}

function mulberry32(seed) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

export function createRng(seed = Date.now()) {
  return mulberry32(seed)
}

export function rankResults(options, weights, { shuffleSeed } = {}) {
  const rng = createRng(shuffleSeed ?? Date.now())
  let scored = scoreOptions(options, weights)

  const values = scored.map((item) => item.score)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = Math.max(max - min, 1)

  scored = scored.map((item) => ({
    ...item,
    jitter: rng() * range * 0.00001,
  }))

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return b.jitter - a.jitter
  })

  return toPercents(scored)
}

export function rerankWithSamePreferences(options, weights) {
  const rng = createRng(Date.now() + Math.floor(Math.random() * 100000))
  const scored = scoreOptions(options, weights)
  const values = scored.map((item) => item.score)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = Math.max(max - min, 8)

  const withNoise = scored.map((item) => ({
    ...item,
    score: item.score + (rng() - 0.5) * range * 0.14,
  }))

  withNoise.sort((a, b) => b.score - a.score)
  return toPercents(withNoise)
}

export function topThree(ranked) {
  return ranked.slice(0, 3)
}
