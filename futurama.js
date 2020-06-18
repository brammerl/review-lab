const request = require('superagent');

const getQuote = numberofQuotes => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${numberofQuotes}`)
    .then(({ body }) => ({
      character: body.character,
      quote: body.quote,
    }));
};

module.exports = {
  getQuote
};
