const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
     if (typeof(members) != 'object' || members == null || members[0] == undefined) {
         return false;
     }
     let teamName = '';
   smallArr = [];
   members.forEach((item) => {
       if (typeof(item) == 'string') {
           smallArr.push(item.trim()[0].toUpperCase());
       }
   });
   smallArr.sort();
   smallArr.forEach((item) => {
       teamName += item;
   });
   return teamName;
 }

module.exports = {
  createDreamTeam
};
