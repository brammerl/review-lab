const fs = require('fs').promises;
const { copyFxn, transformFxn } = require('../index.js');


describe('index functions test', () => {
  beforeAll(() => {
    return Promise.all([
      fs.writeFile('./testFile1.txt', 'test file 1'),
      fs.writeFile('./testFile2.txt', 'test file 2'),
      fs.writeFile('./testFile3.txt', 'test file 3'),
    ]);
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('./testFile1.txt', 'test file 1'),
      fs.unlink('./testFile2.txt', 'Test File 2'),
      fs.unlink('./testFile3.txt', 'test file 3'),
    ]);
  });

  it('copies a file', () => {
    return copyFxn('./testFile1.txt', './copyTestFile1.txt')
      .then(() => {
        return fs.readFile('./copyTestFile1.txt', { encoding: 'utf8' });
      })
      .then(contents => {
        expect(contents).toEqual('test file 1');
      });
  });

  it('transform function', () => {
    return transformFxn('./testFile2.txt')
      .then((res) =>{
        fs.writeFile('./transformTestFile.txt', res);
      })
      .then(() => {
        return fs.readFile('./transformTestFile.txt', { encoding: 'utf8' });
      })
      .then(contents => {
        expect(contents).toEqual('2 ELIF TSET');
      });
  });
});
