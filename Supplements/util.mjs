

/**
 * Return a random integer that is inclusive of either the maximum or the minimum.
 * @param {number} min, the smallest the random number can be
 * @param {number} max, the largeest the random number can be
 * @returns a random integer between max and min or that could be max or min.
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min );
}

export default {
  getRandomInt,
}