const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(dn, ts) {
  let countStep = 2**dn-1;
  let sec = Math.floor(countStep/(ts/3600));
  return { turns: countStep, seconds: sec };
}

module.exports = {
  calculateHanoi
};
