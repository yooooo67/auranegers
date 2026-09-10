import { HISTORY_KEY } from '../config.js'

export function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveDecision(entry) {
  const history = loadHistory()
  const next = [entry, ...history].slice(0, 80)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
  return next
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY)
  return []
}
