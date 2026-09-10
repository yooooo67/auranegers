export const ACTIVITY_OPTIONS = [
  {
    id: 'film',
    label: 'Guardare un film',
    tags: {
      home: 5, energy_low: 4, energy_mid: 2, romantic: 2, calm: 4,
      short: 1, medium: 4, cheap: 3, indoor: 5, screen: 5, couple: 2,
    },
  },
  {
    id: 'serie',
    label: 'Guardare una serie',
    tags: {
      home: 5, energy_low: 4, energy_mid: 2, calm: 4, short: 3, medium: 3,
      cheap: 3, indoor: 5, screen: 5, couple: 2,
    },
  },
  {
    id: 'videogiochi',
    label: 'Giocare ai videogiochi',
    tags: {
      home: 5, energy_mid: 3, energy_low: 2, creative: 1, social: 2,
      medium: 3, cheap: 3, indoor: 5, screen: 4, couple: 2,
    },
  },
  {
    id: 'gioco_tavolo',
    label: 'Giocare a un gioco da tavolo',
    tags: {
      home: 4, energy_mid: 3, social: 4, creative: 1, calm: 1,
      medium: 3, cheap: 3, indoor: 5, couple: 3,
    },
  },
  {
    id: 'cucinare',
    label: 'Cucinare insieme',
    tags: {
      home: 5, energy_mid: 3, romantic: 3, creative: 4, social: 2,
      medium: 4, cheap: 2, indoor: 5, foodish: 5, couple: 4,
    },
  },
  {
    id: 'dolce',
    label: 'Fare un dolce',
    tags: {
      home: 5, energy_mid: 2, energy_low: 2, romantic: 2, creative: 5,
      calm: 2, medium: 3, cheap: 2, indoor: 5, foodish: 4, couple: 3,
    },
  },
  {
    id: 'puzzle',
    label: 'Fare un puzzle',
    tags: {
      home: 5, energy_low: 4, calm: 5, creative: 2, medium: 3, long: 2,
      cheap: 3, indoor: 5, couple: 2,
    },
  },
  {
    id: 'foto_ricordi',
    label: 'Sistemare/stampare foto e ricordi',
    tags: {
      home: 5, energy_low: 3, energy_mid: 2, romantic: 3, calm: 4,
      creative: 4, medium: 3, cheap: 3, indoor: 5, couple: 4,
    },
  },
  {
    id: 'passeggiata',
    label: 'Fare una passeggiata',
    tags: {
      out: 5, energy_mid: 3, energy_low: 2, calm: 3, active: 3, romantic: 2,
      short: 3, medium: 2, cheap: 5, outdoor: 5, couple: 3,
    },
  },
  {
    id: 'caffe',
    label: 'Andare a prendere un caffè',
    tags: {
      out: 5, energy_low: 3, energy_mid: 2, social: 3, calm: 3, romantic: 2,
      short: 5, cheap: 4, indoor: 3, foodish: 2, couple: 3,
    },
  },
  {
    id: 'gelato',
    label: 'Andare a prendere un gelato',
    tags: {
      out: 5, energy_low: 3, energy_mid: 2, romantic: 2, social: 2, calm: 2,
      short: 5, cheap: 4, outdoor: 2, foodish: 4, couple: 3, spontaneous: 2,
    },
  },
  {
    id: 'bere',
    label: 'Andare a bere qualcosa',
    tags: {
      out: 5, energy_mid: 3, social: 4, romantic: 2, medium: 3, short: 2,
      spend: 2, cheap: 1, indoor: 3, night: 3, couple: 3, spontaneous: 2,
    },
  },
  {
    id: 'cinema',
    label: 'Andare al cinema',
    tags: {
      out: 4, energy_low: 2, energy_mid: 3, calm: 2, romantic: 2,
      medium: 4, spend: 3, indoor: 4, screen: 4, couple: 3,
    },
  },
  {
    id: 'shopping',
    label: 'Fare shopping',
    tags: {
      out: 5, energy_mid: 3, energy_high: 2, active: 3, social: 2,
      medium: 4, spend: 4, indoor: 3, couple: 2,
    },
  },
  {
    id: 'museo',
    label: 'Visitare un museo',
    tags: {
      out: 5, energy_mid: 2, calm: 3, culture: 5, medium: 3,
      spend: 2, indoor: 4, novel: 2, couple: 2,
    },
  },
  {
    id: 'mostra',
    label: 'Andare a una mostra',
    tags: {
      out: 5, energy_mid: 2, calm: 3, culture: 5, creative: 2, medium: 3,
      spend: 2, indoor: 4, novel: 3, couple: 2,
    },
  },
  {
    id: 'libreria',
    label: 'Andare in libreria',
    tags: {
      out: 5, energy_low: 3, energy_mid: 2, calm: 4, culture: 3, creative: 1,
      short: 3, medium: 2, cheap: 4, indoor: 4, couple: 2,
    },
  },
  {
    id: 'parco',
    label: 'Andare al parco',
    tags: {
      out: 5, energy_mid: 3, energy_low: 2, calm: 3, active: 2, romantic: 2,
      short: 3, medium: 2, cheap: 5, outdoor: 5, couple: 3,
    },
  },
  {
    id: 'tramonto',
    label: 'Vedere il tramonto',
    tags: {
      out: 5, energy_low: 3, energy_mid: 2, romantic: 5, calm: 4,
      short: 4, cheap: 5, outdoor: 5, couple: 5, night: 1,
    },
  },
  {
    id: 'foto_giro',
    label: 'Fare un giro per fare foto',
    tags: {
      out: 5, energy_mid: 3, energy_high: 2, creative: 5, active: 3, romantic: 2,
      medium: 3, cheap: 4, outdoor: 4, novel: 2, couple: 3, spontaneous: 2,
    },
  },
  {
    id: 'gita',
    label: 'Fare una piccola gita',
    tags: {
      out: 5, energy_high: 4, energy_mid: 2, active: 4, novel: 4,
      long: 5, spend: 3, outdoor: 4, couple: 3, spontaneous: 1,
    },
  },
  {
    id: 'bowling',
    label: 'Bowling',
    tags: {
      out: 5, energy_mid: 3, energy_high: 2, active: 3, social: 4,
      medium: 3, spend: 3, indoor: 4, couple: 3, spontaneous: 2,
    },
  },
  {
    id: 'vecchia_foto',
    label: 'Ricreare una vecchia foto insieme',
    tags: {
      out: 2, home: 2, energy_mid: 2, romantic: 5, creative: 5, social: 1,
      short: 3, medium: 2, cheap: 4, couple: 5, novel: 2,
    },
  },
  {
    id: 'picnic',
    label: 'Fare un picnic',
    tags: {
      out: 5, energy_mid: 3, romantic: 4, calm: 3, creative: 1,
      medium: 4, cheap: 3, outdoor: 5, foodish: 4, couple: 4,
    },
  },
  {
    id: 'stelle',
    label: 'Guardare le stelle',
    tags: {
      out: 5, energy_low: 4, romantic: 5, calm: 5, short: 3, medium: 2,
      cheap: 5, outdoor: 5, night: 5, couple: 5,
    },
  },
  {
    id: 'cena_romantica',
    label: 'Cena romantica',
    tags: {
      out: 4, home: 1, energy_mid: 2, romantic: 5, calm: 2, social: 2,
      medium: 4, spend: 4, indoor: 3, foodish: 5, couple: 5, night: 2,
    },
  },
  {
    id: 'sorpresa',
    label: 'Prepararsi una sorpresa a vicenda',
    tags: {
      home: 3, out: 1, energy_mid: 3, romantic: 5, creative: 5, novel: 4,
      medium: 3, cheap: 2, couple: 5, spontaneous: 3, indoor: 2,
    },
  },
  {
    id: 'esplorare',
    label: 'Esplorare un posto mai visto',
    tags: {
      out: 5, energy_high: 3, energy_mid: 3, active: 4, novel: 5,
      spontaneous: 4, medium: 3, long: 2, cheap: 2, outdoor: 3, couple: 3,
    },
  },
]
