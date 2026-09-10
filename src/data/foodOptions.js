export const FOOD_OPTIONS = [
  {
    id: 'pizza',
    label: 'Pizza',
    tags: {
      hunger_mid: 2, hunger_high: 3, portion_normal: 2, portion_large: 2,
      classic: 4, sfizioso: 2, comfort: 4, heavy: 2, hands: 4, savory: 4,
      italian: 4, meal: 3, pizza_style: 5,
    },
  },
  {
    id: 'pasta',
    label: 'Pasta',
    tags: {
      hunger_mid: 2, hunger_high: 3, portion_normal: 3, portion_large: 2,
      classic: 4, comfort: 4, heavy: 2, utensils: 4, savory: 3, delicate: 1,
      italian: 4, meal: 4, pasta_style: 5,
    },
  },
  {
    id: 'hamburger',
    label: 'Hamburger',
    tags: {
      hunger_mid: 2, hunger_high: 3, portion_normal: 2, portion_large: 2,
      classic: 3, sfizioso: 2, comfort: 3, heavy: 2, hands: 4, savory: 4,
      american: 3, street: 2, meal: 3, burger_style: 4,
    },
  },
  {
    id: 'panino',
    label: 'Panino',
    tags: {
      hunger_low: 2, hunger_mid: 3, portion_small: 2, portion_normal: 3,
      classic: 3, comfort: 2, light: 1, hands: 4, savory: 3,
      italian: 2, street: 2, snack: 2, meal: 2, bread: 4,
    },
  },
  {
    id: 'pollo',
    label: 'Pollo',
    tags: {
      hunger_mid: 3, hunger_high: 2, portion_normal: 3, classic: 3,
      comfort: 2, light: 1, utensils: 3, hands: 1, savory: 3, delicate: 2,
      meal: 3, chicken: 5,
    },
  },
  {
    id: 'carne',
    label: 'Carne / steak',
    tags: {
      hunger_high: 4, hunger_mid: 1, portion_large: 3, portion_normal: 2,
      classic: 2, sfizioso: 2, comfort: 2, heavy: 4, particular: 1,
      utensils: 4, savory: 4, meal: 4, meat: 5, gourmet: 2,
    },
  },
  {
    id: 'tigelle',
    label: 'Tigelle / crescentine',
    tags: {
      hunger_mid: 3, hunger_high: 3, portion_normal: 2, portion_large: 3,
      different: 2, sfizioso: 3, particular: 3, comfort: 3, heavy: 2,
      hands: 4, savory: 4, italian: 3, meal: 3, bread: 3,
    },
  },
  {
    id: 'piadina',
    label: 'Piadina',
    tags: {
      hunger_low: 1, hunger_mid: 3, hunger_high: 2, portion_normal: 3,
      classic: 3, sfizioso: 1, comfort: 3, hands: 4, savory: 3,
      italian: 3, street: 2, meal: 2, snack: 1, bread: 3,
    },
  },
  {
    id: 'uova',
    label: 'Uova',
    tags: {
      hunger_low: 3, hunger_mid: 2, portion_small: 3, portion_normal: 2,
      classic: 2, light: 3, comfort: 1, utensils: 3, savory: 2, delicate: 3,
      meal: 2, snack: 2, eggs: 5,
    },
  },
  {
    id: 'cinese',
    label: 'Cinese',
    tags: {
      hunger_mid: 3, hunger_high: 2, portion_normal: 3, different: 4,
      particular: 3, sfizioso: 2, comfort: 2, heavy: 1, utensils: 4,
      savory: 3, flavor_particular: 3, asian: 5, meal: 3,
    },
  },
  {
    id: 'kebab',
    label: 'Kebab',
    tags: {
      hunger_mid: 2, hunger_high: 4, portion_normal: 2, portion_large: 3,
      sfizioso: 3, classic: 1, different: 1, comfort: 3, heavy: 3,
      hands: 4, savory: 4, flavor_particular: 2, middle_east: 3,
      street: 4, meal: 3, spicy: 2,
    },
  },
  {
    id: 'mediorientale',
    label: 'Mediorientale',
    tags: {
      hunger_mid: 3, portion_normal: 3, different: 4, particular: 4,
      sfizioso: 2, light: 1, utensils: 3, hands: 1, savory: 3,
      flavor_particular: 4, delicate: 1, middle_east: 5, meal: 3,
    },
  },
  {
    id: 'mcdonalds',
    label: "McDonald's",
    tags: {
      hunger_mid: 3, hunger_high: 2, portion_normal: 3, classic: 4,
      sfizioso: 1, comfort: 3, heavy: 2, hands: 4, savory: 3,
      american: 3, chain: 5, street: 2, meal: 3, burger_style: 2,
    },
  },
  {
    id: 'kfc',
    label: 'KFC',
    tags: {
      hunger_mid: 3, hunger_high: 3, portion_normal: 3, portion_large: 2,
      classic: 3, sfizioso: 2, comfort: 3, heavy: 3, hands: 4, savory: 4,
      american: 2, chain: 5, meal: 3, chicken: 4,
    },
  },
  {
    id: 'burger_gourmet',
    label: 'Burger gourmet',
    tags: {
      hunger_mid: 2, hunger_high: 3, portion_normal: 2, portion_large: 2,
      sfizioso: 4, particular: 3, different: 2, heavy: 2, comfort: 2,
      hands: 4, savory: 4, american: 3, gourmet: 5, meal: 3, burger_style: 5,
    },
  },
  {
    id: 'hotdog',
    label: 'Hot dog',
    tags: {
      hunger_low: 2, hunger_mid: 3, portion_small: 3, portion_normal: 2,
      classic: 2, sfizioso: 2, comfort: 2, light: 1, hands: 4, savory: 3,
      american: 3, street: 4, snack: 3, meal: 1,
    },
  },
  {
    id: 'pizza_taglio',
    label: 'Pizza al taglio',
    tags: {
      hunger_low: 2, hunger_mid: 3, portion_small: 3, portion_normal: 2,
      classic: 3, sfizioso: 1, comfort: 2, light: 1, hands: 4, savory: 3,
      italian: 4, street: 3, snack: 3, pizza_style: 4, meal: 1,
    },
  },
  {
    id: 'pancake',
    label: 'Pancake / waffle',
    tags: {
      hunger_low: 2, hunger_mid: 2, portion_small: 2, portion_normal: 2,
      different: 1, sfizioso: 3, particular: 1, comfort: 3, light: 1,
      utensils: 4, sweet: 5, delicate: 2, dessert: 3, snack: 2, meal: 1, american: 2,
    },
  },
  {
    id: 'gelato',
    label: 'Gelato',
    tags: {
      hunger_low: 4, portion_small: 4, classic: 2, sfizioso: 2, light: 4,
      hands: 3, utensils: 1, sweet: 5, delicate: 2, dessert: 5, snack: 3, italian: 2,
    },
  },
  {
    id: 'dolci',
    label: 'Dolci / pasticceria',
    tags: {
      hunger_low: 4, portion_small: 4, sfizioso: 3, particular: 1, classic: 1,
      light: 3, comfort: 2, utensils: 3, hands: 1, sweet: 5, delicate: 3,
      dessert: 5, snack: 2, italian: 2,
    },
  },
  {
    id: 'insalatona',
    label: 'Insalatona',
    tags: {
      hunger_low: 3, hunger_mid: 2, portion_small: 2, portion_normal: 2,
      classic: 1, different: 1, light: 5, utensils: 4, savory: 2, delicate: 4,
      healthy: 5, meal: 2, snack: 1,
    },
  },
  {
    id: 'avocado',
    label: 'Avocado toast',
    tags: {
      hunger_low: 3, hunger_mid: 2, portion_small: 3, different: 2,
      particular: 3, sfizioso: 2, light: 4, utensils: 3, hands: 1,
      savory: 2, delicate: 3, healthy: 4, snack: 3, meal: 1,
    },
  },
  {
    id: 'sandwich',
    label: 'Sandwich',
    tags: {
      hunger_low: 2, hunger_mid: 3, portion_small: 2, portion_normal: 3,
      classic: 3, light: 2, comfort: 1, hands: 4, savory: 3, delicate: 1,
      snack: 2, meal: 2, bread: 4, american: 1,
    },
  },
  {
    id: 'poke',
    label: 'Poké leggero',
    tags: {
      hunger_low: 2, hunger_mid: 3, portion_normal: 2, portion_small: 2,
      different: 3, particular: 3, sfizioso: 1, light: 5, utensils: 4,
      savory: 2, delicate: 3, flavor_particular: 2, healthy: 5, asian: 2, meal: 2,
    },
  },
  {
    id: 'gramigna',
    label: 'Gramigna',
    tags: {
      hunger_mid: 3, hunger_high: 2, portion_normal: 3, portion_large: 2,
      particular: 4, different: 2, sfizioso: 2, classic: 1, comfort: 3, heavy: 2,
      utensils: 4, savory: 4, flavor_particular: 2, italian: 4, pasta_style: 5, meal: 4,
    },
  },
  {
    id: 'guero',
    label: 'Guero',
    tags: {
      hunger_mid: 3, hunger_high: 2, portion_normal: 3, different: 4,
      particular: 4, sfizioso: 4, comfort: 1, heavy: 1, utensils: 2, hands: 3,
      savory: 4, flavor_particular: 4, spicy: 3, meal: 3, street: 1, gourmet: 2,
    },
  },
]
