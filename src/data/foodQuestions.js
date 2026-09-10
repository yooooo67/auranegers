const hungerPoco = (a) => a.hunger === 'poco'
const hungerTanta = (a) => a.hunger === 'tanta'
const wantsLight = (a) => a.experience === 'leggero' || hungerPoco(a)
const wantsDifferent = (a) => a.craving === 'diverso' || a.experience === 'particolare'
const wantsClassic = (a) => a.craving === 'classico'
const wantsSfizioso = (a) => a.craving === 'sfizioso'
const flavorSweet = (a) => a.flavor === 'dolce'
const alreadyHands = (a) => a.hands === 'mani'
const alreadyUtensils = (a) => a.hands === 'posate'

export const FOOD_QUESTIONS = [
  {
    id: 'hunger',
    text: 'Quanta fame hai?',
    stage: 'anchor',
    priority: 1,
    relevant: () => true,
    choices: [
      { id: 'poco', label: 'Poco', weights: { hunger_low: 5, light: 4, portion_small: 4, heavy: -3, filling: -2, meal: -1, dessert: 2, snack: 2 } },
      { id: 'abbastanza', label: 'Abbastanza', weights: { hunger_mid: 5, portion_normal: 3, meal: 2 } },
      { id: 'tanta', label: 'Tanta', weights: { hunger_high: 5, filling: 3, heavy: 3, portion_large: 4, light: -4, dessert: -3, snack: -2, meal: 3 } },
    ],
  },
  {
    id: 'craving',
    text: 'Che tipo di voglia hai?',
    stage: 'anchor',
    priority: 2,
    relevant: () => true,
    choices: [
      { id: 'classico', label: 'Qualcosa di classico', weights: { classic: 5, different: -3, particular: -2, chain: 1, italian: 1, comfort: 2 } },
      { id: 'diverso', label: 'Qualcosa di diverso', weights: { different: 5, particular: 3, classic: -3, chain: -2, flavor_particular: 2 } },
      { id: 'sfizioso', label: 'Qualcosa di sfizioso', weights: { sfizioso: 5, street: 2, gourmet: 2, comfort: 1, spicy: 1 } },
    ],
  },
  {
    id: 'experience',
    text: 'Cosa cerchi?',
    stage: 'core',
    priority: 3,
    relevant: (a) => !flavorSweet(a),
    choices: [
      { id: 'comfort', label: 'Comfort food', weights: { comfort: 5, heavy: 1, classic: 1, pizza_style: 1, pasta_style: 1, burger_style: 1 } },
      { id: 'particolare', label: 'Qualcosa di particolare', weights: { particular: 5, different: 2, flavor_particular: 3, gourmet: 2, chain: -3 } },
      { id: 'leggero', label: 'Qualcosa di leggero', weights: { light: 5, healthy: 3, heavy: -4, portion_small: 2, dessert: 1 } },
    ],
  },
  {
    id: 'portion',
    text: 'Quanto vuoi mangiare?',
    stage: 'core',
    priority: 4,
    relevant: (a) => !flavorSweet(a) && !(hungerPoco(a) && wantsLight(a)),
    choices: [
      { id: 'poco', label: 'Poco', weights: { portion_small: 5, snack: 3, dessert: 1, meal: -2, portion_large: -3 } },
      { id: 'normale', label: 'Normale', weights: { portion_normal: 5, meal: 2 } },
      { id: 'tanto', label: 'Tanto', weights: { portion_large: 5, meal: 3, filling: 2, snack: -3, dessert: -3 } },
    ],
  },
  {
    id: 'hands',
    text: 'Come vuoi mangiare?',
    stage: 'core',
    priority: 5,
    relevant: (a) => !flavorSweet(a) && a.experience !== 'leggero',
    choices: [
      { id: 'mani', label: 'Con le mani', weights: { hands: 5, utensils: -3, street: 2, bread: 2, pizza_style: 1, burger_style: 1 } },
      { id: 'posate', label: 'Con le posate', weights: { utensils: 5, hands: -3, pasta_style: 2, meat: 1, asian: 1 } },
      { id: 'indifferente', label: 'Non mi importa', weights: {} },
    ],
  },
  {
    id: 'flavor',
    text: 'Che tipo di sapore ti ispira?',
    stage: 'core',
    priority: 6,
    relevant: () => true,
    choices: [
      { id: 'saporito', label: 'Saporito', weights: { savory: 5, sweet: -4, spicy: 2, kebab: 1, meat: 1, flavor_particular: 1 } },
      { id: 'delicato', label: 'Delicato', weights: { delicate: 5, healthy: 2, savory: 1, sweet: -2, spicy: -3, heavy: -1 } },
      { id: 'dolce', label: 'Dolce', weights: { sweet: 6, dessert: 5, savory: -5, meal: -3, spicy: -3, meat: -3, chicken: -2 } },
      { id: 'particolare', label: 'Particolare', weights: { flavor_particular: 5, particular: 2, different: 2, spicy: 2, asian: 1, middle_east: 2 } },
    ],
  },
  {
    id: 'cuisine',
    text: 'Che cucina ti ispira?',
    stage: 'followup',
    priority: 7,
    relevant: (a) =>
      !flavorSweet(a) &&
      (wantsDifferent(a) || wantsSfizioso(a) || a.flavor === 'particolare'),
    choices: [
      { id: 'italiana', label: 'Italiana', weights: { italian: 5, pasta_style: 2, pizza_style: 2, asian: -3, middle_east: -2, american: -2 } },
      { id: 'asiatica', label: 'Asiatica', weights: { asian: 5, cinese: 1, utensils: 1, italian: -3, american: -2 } },
      { id: 'mediorientale', label: 'Mediorientale', weights: { middle_east: 5, flavor_particular: 2, italian: -2, american: -2, asian: -1 } },
      { id: 'americana', label: 'Americana / street', weights: { american: 4, street: 3, burger_style: 2, chain: 1, italian: -2, asian: -2 } },
    ],
  },
  {
    id: 'sweet_or_savory_light',
    text: 'Dolce o salato?',
    stage: 'followup',
    priority: 7,
    relevant: (a) => wantsLight(a) && !a.flavor,
    choices: [
      { id: 'salato', label: 'Salato', weights: { savory: 5, sweet: -4, dessert: -4, healthy: 2 } },
      { id: 'dolce', label: 'Dolce', weights: { sweet: 6, dessert: 5, savory: -4 } },
      { id: 'entrambi', label: 'Mi va entrambi', weights: { light: 2 } },
    ],
  },
  {
    id: 'pasta_or_other',
    text: 'Hai voglia di pasta?',
    stage: 'followup',
    priority: 8,
    relevant: (a) =>
      !flavorSweet(a) &&
      alreadyUtensils(a) &&
      (wantsClassic(a) || a.experience === 'comfort' || a.cuisine === 'italiana'),
    choices: [
      { id: 'si', label: 'Sì, pasta', weights: { pasta_style: 6, italian: 3, pizza_style: -2, burger_style: -3, meat: -1 } },
      { id: 'no', label: 'No', weights: { pasta_style: -4 } },
      { id: 'forse', label: 'Non per forza', weights: {} },
    ],
  },
  {
    id: 'street_or_sit',
    text: 'Più da street food o da tavola?',
    stage: 'followup',
    priority: 8,
    relevant: (a) =>
      !flavorSweet(a) &&
      alreadyHands(a) &&
      !wantsLight(a),
    choices: [
      { id: 'street', label: 'Street food', weights: { street: 5, kebab: 1, chain: 1, gourmet: -2 } },
      { id: 'tavola', label: 'Da tavola', weights: { street: -2, gourmet: 2, pizza_style: 1, burger_style: 1, chain: -1 } },
      { id: 'veloce', label: 'Qualcosa di veloce', weights: { chain: 3, street: 2, snack: 2, gourmet: -2 } },
    ],
  },
  {
    id: 'healthy_detail',
    text: 'Quanto vuoi stare leggera?',
    stage: 'followup',
    priority: 8,
    relevant: (a) => wantsLight(a) && !flavorSweet(a),
    choices: [
      { id: 'molto', label: 'Molto leggera', weights: { healthy: 5, light: 3, poke: 1, insalatona: 1, heavy: -3, bread: -1 } },
      { id: 'media', label: 'Leggera ma sostanziosa', weights: { light: 2, healthy: 2, portion_normal: 2, poke: 1, sandwich: 1 } },
      { id: 'comfort_light', label: 'Leggera ma comfort', weights: { comfort: 3, light: 1, bread: 2, uova: 1, healthy: -1 } },
    ],
  },
  {
    id: 'heavy_protein',
    text: 'Che tipo di piatto sostanzioso?',
    stage: 'followup',
    priority: 8,
    relevant: (a) =>
      hungerTanta(a) &&
      !flavorSweet(a) &&
      a.experience !== 'leggero' &&
      alreadyUtensils(a),
    choices: [
      { id: 'carne', label: 'Carne', weights: { meat: 5, chicken: 1, pasta_style: -2 } },
      { id: 'pollo', label: 'Pollo', weights: { chicken: 5, meat: -2 } },
      { id: 'primo', label: 'Un primo', weights: { pasta_style: 4, italian: 2, meat: -2 } },
    ],
  },
  {
    id: 'chain_or_not',
    text: 'Ti va anche qualcosa di più semplice e noto?',
    stage: 'followup',
    priority: 9,
    relevant: (a) =>
      wantsClassic(a) &&
      alreadyHands(a) &&
      !flavorSweet(a) &&
      !wantsLight(a),
    choices: [
      { id: 'si', label: 'Sì', weights: { chain: 4, classic: 2, mcdonalds: 1, kfc: 1 } },
      { id: 'no', label: 'No, altro', weights: { chain: -5, gourmet: 2, particular: 1 } },
    ],
  },
]
