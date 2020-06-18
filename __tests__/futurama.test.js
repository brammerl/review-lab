const { getCharacter, getManyChar } = require('../getCharacter');

describe('rock and morty api tests', () => {
  it('can get character by id', () => {
    return getCharacter('1')
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          gender: 'Male'
        });
      });
  });

  it(`gets many characters by id`, () => {
    const arr = [1, 2, 3];
    return getManyChar(arr)
      .then(results => {
        expect(results).toEqual([{ gender: 'Male', name: 'Rick Sanchez', species: 'Human' }, { gender: 'Male', name: 'Morty Smith', species: 'Human' }, { gender: 'Female', name: 'Summer Smith', species: 'Human' }]);
      });
  });
});

