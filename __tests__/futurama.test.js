const { getQuote } = require('../futurama');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        'character': 'Leela',
        'quote': 'After all this time, someone else who has one eye who isn\'t a clumsy carpenter\nor a kid with a bb gun.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png'
      }
    });
  }
}));


describe('futurama api functions', () => {
  it('can get quotes by amount of quotes', () => {
    return getQuote('1')
      .then(character => {
        expect(character).toEqual({
          character: 'Leela',
          quote: 'After all this time, someone else who has one eye who isn\'t a clumsy carpenter\nor a kid with a bb gun.'
        });
      });
  });
});
