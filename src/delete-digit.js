const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
     let nStr = String(n);
     let num = Number(nStr.slice(0, -1));
     for (let i = 1; i < nStr.length; i++) {
         if (i < 2) {
             if (Number(nStr.slice(i, nStr.length+1)) > num) {
                 num = Number(nStr.slice(i, nStr.length+1))
             }
         } else {
             let mun = Number(nStr.slice(0, i-1) + nStr.slice(i, nStr.length+1));
             if (mun > num) {
                 num = mun;
             }
         }
     }
     return num;
 }

module.exports = {
  deleteDigit
};
