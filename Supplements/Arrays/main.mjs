import util from "../util.mjs";

function generateNumbers(length, min, max) {
  var cardinality = [];
  var numbers = [];
  var result = {};

  for (length; length > 0; length--) {
    cardinality.push(length);
    numbers.push(util.getRandomInt(min, max));
  }

  // Sorting the Cardinality Array in Ascending Order
  for (var i = 0; i < cardinality.length; i++) {
    cardinality.sort(function (a, b) {
      return a - b;
    });
  }

  // Sorting the Numbers Array in Ascending Order
  for (var i = 0; i < numbers.length; i++) {
    numbers.sort(function (a, b) {
      return a - b;
    });
  }

  // Combining the Two Arrays by their Index Values into their own Objects inside of an Array
  var result = numbers.map(function (obj, index) {
    var myObj = {};
    myObj[cardinality[index]] = obj;
    return myObj;
  });

  /**
   *   Attemping with forEach method
   */
  // cardinality.forEach((key, i) => {
  //   result[key] = numbers[i];
  // });


  /**
   * Object.fromEntries ES2018 method
   */
  // result = Object.fromEntries(cardinality.map((_, i) => ["cardinal: " + cardinality[i], "number: " + numbers[i]]))


  /**
   * Attemping with map method
   */
  // cardinality.map((key, i) => {
  //   result[key] = numbers[i];
  // });


  /**
   * Attempting with reduce method
   */
  // let combineArrays = (first, second) => {
  //   return first.reduce((acc, val, index) => {
  //     {
  //       acc[val] = second[index];
  //     }
  //     return acc;
  //   }, {});
  // };

  return result;

  // return {
  //   cardinality,
  //   numbers,
  // };
}

const length = 1000;

// var cardinality,
//   numbers = generateNumbers(length, 1, 1000000);
var result = generateNumbers(length, 1, 1000000);

console.log(result);
// console.log(cardinality);
// console.log(numbers);

/**
 * Attempting to seperate the Object with
 * .keys() and .values() methods
 */

// const seperateObject = (result) => {
//   const res = [];
//   const keys = Object.keys(result);
//   const values = Object.values(result);

//   keys.forEach((key) => {
//     res.push({
//       cardinal: result[key],
//     });
//   });

//   // values.forEach((value) => {
//   //   res.push({
//   //     number: result[value],
//   //   });
//   // });

//   return res;
// };

// console.log(seperateObject(result));

// function generateMatrixNumbers(mattrixLength, length, min, max) {
//   var subspaces = [];
//   for (mattrixLength; mattrixLength > 0; mattrixLength--) {
//     var sequence = [];
//     for (var i = length; i > 0; i--) {
//       sequence.push(util.getRandomInt(min, max));
//     }
//     subspaces.push(sequence);
//   }
//   return subspaces;
// }

// function generateJaggedMattrix(mattrixLength, lengthMax, min, max) {
//   var subspaces = [];
//   for (mattrixLength; mattrixLength > 0; mattrixLength--) {
//     var sequence = [];
//     for (var i = util.getRandomInt(1, lengthMax); i > 0; i--) {
//       sequence.push(util.getRandomInt(min, max));
//     }
//     subspaces.push(sequence);
//   }
//   return subspaces;
// }

// var evenMattrix = generateMatrixNumbers(10, 10, 1, 1000);
// var jaggedMattrix = generateJaggedMattrix(10, 20, 1, 1000000);

// console.log(evenMattrix);
// console.log(jaggedMattrix);

/**
 * Goal
 * - Learn to work with arrays
 * - Learn to work with for loops
 * - Construct Declaritive expressions and use in conjunction within for loops
 */

/**
 * Objetive 1
 * The variables "cardinality" and "numbers" are arrays. However they are ordered in the wrong direction, counting down as opposed to counting up.
 * You may assume that the "cardinality" is a continous count.
 *
 * Using a for loop, iterate through variables "cardinality" and "numbers".
 * Producing an array that contains objects that includes the cardinality/index of each item in the number array and the number itself.
 * EX [
 *      {"cardinal":1, "number":51},
 *      ...
 *    ]
 * Caveat order the objects in array counting up as opposed to the current order of "cardinality" and "numbers".
 */

/**
 * Objective 2
 * Create a function that descends into the spaces of evenMattrix and creates and array of strings, each entry in the array being a check of whether the item is even or odd. Then place that into an array itself. Place those arrays into another array
 * EX [
 *  ["item 1 of subspace 1 is odd", "item 2 of subspace 1 is even", "item 3 of subspace 1 is even"],
 *  ...
 * ]
 */

/**
 * Objective 3
 * Creta a function that is able to describe jagged arrays.
 * EX "The jagged array has 10 subspaces
 * subspace 1 is 11 items long and all items summed together equal to 101456
 * subspace 2 is 3 items long and all items summed together equal to 103
 * ..."
 */
