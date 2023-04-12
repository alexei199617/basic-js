const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  let countNumber = 0;
  matrix.forEach((item) => {
      item.forEach((itm) => {
          // let smallStr = String(itm).split(" ").join("");
          if (String(itm) == '^^') {
              countNumber++;
          }
      });
  });
  return countNumber;
}

module.exports = {
  countCats
};