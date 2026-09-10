import { ACTIVITY_OPTIONS } from './activityOptions.js'
import { ACTIVITY_QUESTIONS } from './activityQuestions.js'
import { FOOD_OPTIONS } from './foodOptions.js'
import { FOOD_QUESTIONS } from './foodQuestions.js'

function withSelfTags(options) {
  return options.map((option) => ({
    ...option,
    tags: { ...option.tags, [option.id]: 5 },
  }))
}

export const CATEGORIES = {
  food: {
    id: 'food',
    label: 'Cosa mangiare',
    emoji: '🍝',
    options: withSelfTags(FOOD_OPTIONS),
    questions: FOOD_QUESTIONS,
  },
  watch: {
    id: 'watch',
    label: 'Cosa guardare',
    emoji: '🎬',
    options: withSelfTags(ACTIVITY_OPTIONS),
    questions: ACTIVITY_QUESTIONS,
  },
}
