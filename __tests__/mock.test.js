const { getCharacter } = require('../getCharacter');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
      }
    });
  }
}));

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
});
