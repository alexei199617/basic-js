const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
   let newArr = [];
   let errTrue = 0;
   for (let i = 0; i < arr.length; i++) {
       let a = -1;
       if (typeof(arr) != 'object') {
           errTrue++;
       }
       if (typeof(arr[i])=='number') {
           if (typeof(arr[i]) != undefined || typeof(arr[i]) != NaN) {null
               newArr.push(arr[i])
           } else {
               errTrue++;
               return console.error('\'arr\' parameter must be an instance of the Array!');
           }
       } else {
           if (arr[i] == '--discard-next') {
               i++;
           } else if (arr[i] == '--discard-prev') {
               if (arr[i-2] == '--discard-next') {
               } else if(arr[i-2] == '--double-next') {
                   newArr.pop();
               } else if (newArr.length > 0){
                   newArr.pop()
               }
           } else if (arr[i] == '--double-next') {
               if (arr.length > i+1) {
                   newArr.push(arr[i+1])
               }
           } else if (arr[i] == '--double-prev') {
               if (arr[i-2] == '--discard-next') {
               }  else {
                   if (newArr.length > 0) {
                       newArr.push(arr[i-1])
                   }
               }
           } else {
               errTrue++;
               return console.error('\'arr\' parameter must be an instance of the Array!');
           }
       }
   };
   // console.log(newArr)
   if (errTrue < 1) {
       return newArr;
   } else {
       return console.error('\'arr\' parameter must be an instance of the Array!');
   }
 }

module.exports = {
  transform
};
