const request = require('superagent');


const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body }) => ({
      name: body.name,
      species: body.species,
      gender: body.gender
    }));
};

const getManyChar = arr => {
  const promises = [];
  arr.forEach(id => {
    promises.push(getCharacter(id));
  });
  return Promise.all(promises);
};
module.exports = {
  getCharacter,
  getManyChar
};
