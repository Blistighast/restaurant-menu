export function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function getRestaurantName() {
  const adjectives = [
    'Delicious',
    'Hungry',
    'Appetizing',
    'Aromatic',
    'Crisp',
    'Cool',
    'Boiled',
    'Classic',
    'Cheesy',
    'Chunked',
    'Hot',
    'Fresh',
    'Grilled',
    'Fried',
    'Juicy',
    'Large',
    'Luscious',
    'Lavish',
    'Steamy',
    'Fruity',
    'Flaky',
    'Flavored',
    'Flavorful',
    'Fluffy',
    'Delectable',
    'Doughy',
    'Candied',
    'Plain',
  ];

  const nouns = [
    'Burgers',
    'Fish',
    'Shrimp',
    'Pizza',
    'Soup',
    'Salsa',
    'Burritos',
    'Tacos',
    'Sandwiches',
    'Waffles',
    'Pancakes',
    'Pastries',
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
