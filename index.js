const fs = require('fs').promises;

const readFile = fs.readFile('./package.json', { encoding: 'utf8' });

readFile
  .then(content => {
    return console.log(content);
  });

fs.writeFile('./writeFile.txt', 'hello there!')
  .then(() => console.log('DONE'));

const copyFxn = (src, destination) => {
  const readFilePromise = fs.readFile(src, { encoding: 'utf8' });
  
  return readFilePromise
    .then(content => fs.writeFile(destination, content))
    .finally(() => console.log('copied file!'));
};

const transformFxn = (src) => {
  const readFilePromise = fs.readFile(src, { encoding: 'utf8' });
  
  return readFilePromise
    .then(content => content.replace(/[A-Z]/g, '')
    )
    .then(content => content.toUpperCase()
    )
    .then(content => content.split('').reverse().join('')
    )
    .finally(() => {
      console.log('almost there!');
    });
}; 

module.exports = {
  copyFxn,
  transformFxn
};
