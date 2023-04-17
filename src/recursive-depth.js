const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    constructor (arr, count) {
        this.arr = arr;
        this.count = count = 1;
    }

    calculateDepth(arr) {
        // throw new NotImplementedError('Not implemented');
        if (typeof(arr) == 'object') {
            recurs(arr, this.count)
        } else {
            return 0;
        }
    }
    recurs(arr, num) {
        this.count = num;
        arr.forEach((item, i) => {
            if (typeof(item) == 'object') {
                recurs(item, num+1)
            } else {
                return this.count
            }
        });
    }
}

module.exports = {
  DepthCalculator
};
