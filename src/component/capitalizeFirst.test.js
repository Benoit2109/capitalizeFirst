import capitalizeFirst from './capitalizeFirst';

test('capitalizeFirst of word automobile should be Automobile', () => {
  expect(capitalizeFirst('automobile')).toBe('Automobile');
});

test('capitalizeFirst of word AUTOMOBILE should be Automobile', () => {
  expect(capitalizeFirst('AUTOMOBILE')).toBe('Automobile');
});

test('capitalizeFirst of a number should throw an error', () => {
  expect(() => {
    capitalizeFirst(0);
  }).toThrowError('you must enter a string of characters');
});

test('capitalizeFirst without parameter should throw an error', () => {
  expect(() => {
    capitalizeFirst();
  }).toThrowError('you must enter a string of characters');
});

test('capitalizeFirst \'0\' should throw an error', () => {
  expect(() => {
    capitalizeFirst('0');
  }).toThrowError('you must enter a string of characters');
});