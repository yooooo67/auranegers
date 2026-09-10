const staysHome = (a) => a.place === 'casa'
const goesOut = (a) => a.place === 'fuori'
const lowEnergy = (a) => a.energy === 'bassa'
const highEnergy = (a) => a.energy === 'alta'
const wantsRomantic = (a) => a.mood === 'romantico'
export const ACTIVITY_QUESTIONS = [
  {
    id: 'place',
    text: 'Vuoi restare a casa o uscire?',
    stage: 'anchor',
    priority: 1,
    relevant: () => true,
    choices: [
      { id: 'casa', label: 'Restare a casa', weights: { home: 6, out: -5, outdoor: -3, indoor: 2 } },
      { id: 'fuori', label: 'Uscire', weights: { out: 6, home: -5, screen: -3 } },
      { id: 'indifferente', label: 'Mi va entrambe', weights: { home: 1, out: 1 } },
    ],
  },
  {
    id: 'energy',
    text: 'Che energia hai?',
    stage: 'anchor',
    priority: 2,
    relevant: () => true,
    choices: [
      { id: 'bassa', label: 'Poca', weights: { energy_low: 5, calm: 3, active: -4, energy_high: -3, long: -3 } },
      { id: 'media', label: 'Nella media', weights: { energy_mid: 5, medium: 1 } },
      { id: 'alta', label: 'Tanta', weights: { energy_high: 5, active: 3, energy_low: -3, screen: -2 } },
    ],
  },
  {
    id: 'mood',
    text: 'Che atmosfera cerchi?',
    stage: 'core',
    priority: 3,
    relevant: () => true,
    choices: [
      { id: 'romantico', label: 'Romantica', weights: { romantic: 6, couple: 3, social: -1 } },
      { id: 'tranquilla', label: 'Tranquilla', weights: { calm: 5, romantic: 1, active: -2, social: -1 } },
      { id: 'vivace', label: 'Vivace', weights: { social: 4, active: 2, calm: -3, bowling: 1 } },
    ],
  },
  {
    id: 'doing',
    text: 'Vuoi fare o guardare qualcosa?',
    stage: 'core',
    priority: 4,
    relevant: (a) => staysHome(a) || a.place === 'indifferente',
    choices: [
      { id: 'guardare', label: 'Guardare qualcosa', weights: { screen: 6, creative: -3, foodish: -2, film: 1, serie: 1 } },
      { id: 'fare', label: 'Fare qualcosa insieme', weights: { screen: -4, creative: 3, couple: 2 } },
      { id: 'entrambi', label: 'Mi va entrambi', weights: {} },
    ],
  },
  {
    id: 'creative',
    text: 'Hai voglia di creare qualcosa?',
    stage: 'core',
    priority: 5,
    relevant: (a) =>
      a.doing !== 'guardare' &&
      !(goesOut(a) && highEnergy(a) && a.mood === 'vivace'),
    choices: [
      { id: 'si', label: 'Sì', weights: { creative: 5, screen: -2 } },
      { id: 'no', label: 'No', weights: { creative: -3 } },
      { id: 'poco', label: 'Un po’', weights: { creative: 2 } },
    ],
  },
  {
    id: 'duration',
    text: 'Quanto tempo vuoi dedicarci?',
    stage: 'core',
    priority: 6,
    relevant: () => true,
    choices: [
      { id: 'poco', label: 'Poco', weights: { short: 5, long: -4, medium: -1, gita: -3 } },
      { id: 'normale', label: 'Un bel po’', weights: { medium: 5, short: -1, long: -1 } },
      { id: 'tanto', label: 'Tanto', weights: { long: 5, medium: 1, short: -3 } },
    ],
  },
  {
    id: 'outdoor',
    text: 'Preferisci aria aperta o un posto al chiuso?',
    stage: 'followup',
    priority: 7,
    relevant: (a) => goesOut(a) || a.place === 'indifferente',
    choices: [
      { id: 'aperto', label: 'Aria aperta', weights: { outdoor: 5, indoor: -3 } },
      { id: 'chiuso', label: 'Al chiuso', weights: { indoor: 5, outdoor: -3 } },
      { id: 'indifferente', label: 'Non mi importa', weights: {} },
    ],
  },
  {
    id: 'newness',
    text: 'Vuoi provare qualcosa di nuovo?',
    stage: 'followup',
    priority: 7,
    relevant: (a) => !lowEnergy(a) && a.doing !== 'guardare',
    choices: [
      { id: 'si', label: 'Sì, qualcosa di nuovo', weights: { novel: 5, spontaneous: 2, classic: -1 } },
      { id: 'no', label: 'No, qualcosa di familiare', weights: { novel: -3, spontaneous: -2 } },
      { id: 'forse', label: 'Se capita', weights: { spontaneous: 3, novel: 1 } },
    ],
  },
  {
    id: 'budget',
    text: 'Vuoi qualcosa di semplice o più da uscita?',
    stage: 'followup',
    priority: 8,
    relevant: (a) => goesOut(a) && !lowEnergy(a),
    choices: [
      { id: 'semplice', label: 'Semplice', weights: { cheap: 5, spend: -3 } },
      { id: 'uscita', label: 'Un po’ più speciale', weights: { spend: 4, cheap: -2, romantic: 1 } },
      { id: 'indifferente', label: 'Non mi importa', weights: {} },
    ],
  },
  {
    id: 'foodish',
    text: 'C’entra anche il cibo?',
    stage: 'followup',
    priority: 8,
    relevant: (a) =>
      a.doing !== 'guardare' &&
      (goesOut(a) || a.doing === 'fare' || a.creative === 'si'),
    choices: [
      { id: 'si', label: 'Sì', weights: { foodish: 5, screen: -2 } },
      { id: 'no', label: 'No', weights: { foodish: -4 } },
      { id: 'forse', label: 'Non per forza', weights: { foodish: 1 } },
    ],
  },
  {
    id: 'screen_type',
    text: 'Film o serie?',
    stage: 'followup',
    priority: 8,
    relevant: (a) => a.doing === 'guardare' || (staysHome(a) && lowEnergy(a) && a.creative === 'no'),
    choices: [
      { id: 'film', label: 'Un film', weights: { film: 4, screen: 3, serie: -2, medium: 2 } },
      { id: 'serie', label: 'Una serie', weights: { serie: 4, screen: 3, film: -2, short: 1 } },
      { id: 'indifferente', label: 'Non ho preferenza', weights: { screen: 2 } },
    ],
  },
  {
    id: 'move',
    text: 'Hai voglia di muoverti?',
    stage: 'followup',
    priority: 7,
    relevant: (a) => goesOut(a) && !lowEnergy(a) && a.mood !== 'tranquilla',
    choices: [
      { id: 'si', label: 'Sì', weights: { active: 5, calm: -2, bowling: 1, gita: 1 } },
      { id: 'poco', label: 'Poco', weights: { active: 1, calm: 2 } },
      { id: 'no', label: 'No', weights: { active: -3, calm: 2 } },
    ],
  },
  {
    id: 'culture',
    text: 'Ti ispira qualcosa di culturale?',
    stage: 'followup',
    priority: 8,
    relevant: (a) =>
      goesOut(a) &&
      a.outdoor !== 'aperto' &&
      a.mood !== 'vivace' &&
      !highEnergy(a),
    choices: [
      { id: 'si', label: 'Sì', weights: { culture: 5, museo: 1, mostra: 1, libreria: 1 } },
      { id: 'no', label: 'No', weights: { culture: -4 } },
    ],
  },
  {
    id: 'night',
    text: 'Più da giorno o da sera?',
    stage: 'followup',
    priority: 9,
    relevant: (a) => (goesOut(a) || wantsRomantic(a)) && a.duration !== 'poco',
    choices: [
      { id: 'giorno', label: 'Giorno', weights: { night: -3, tramonto: 1, picnic: 1, caffe: 1 } },
      { id: 'sera', label: 'Sera', weights: { night: 4, stelle: 2, bere: 1, cena_romantica: 1, tramonto: 1 } },
    ],
  },
]
