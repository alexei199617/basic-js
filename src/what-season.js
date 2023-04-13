const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
 function getSeason(date) {
     if (Object.prototype.toString.call(date) === "[object Date]") {
         if (isNaN(date)) {
             return false
         } else {
             let s = date.getMonth()
             if (s > 1 && s < 5) {
                 return ('spring')
             } else if (s > 4 && s < 8) {
                 return ('summer')
             } else if (s > 7 && s < 11) {
                 return ('autumn')
             } else {
                 return ('winter')
             }
         }
     } else {
         return false
     }
 }

module.exports = {
  getSeason
};
