import capitalizeFirstSentance from './capitalizeFirstSentence'

test('capitalizeFirstSentance capitalize first letter of each word from a full sentance', () => {
  expect(capitalizeFirstSentance('je me reveille tous les matins')).toBe('Je Me Reveille Tous Les Matins');
});

/*test('capitalizeFirstSentance capitalize only the first letter of each word from a full capitalized sentance', () => {
  expect(capitalizeFirstSentance('JE ME REVEILLES TOUS LES MATINS')).toBe('Je Me Reveille Tous Les Matins');
});*/