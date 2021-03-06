import util from "../util.mjs";

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

function generateNumbers(length, min, max) {
  var cardinality = [];
  var numbers = [];
  var newArray = [];

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

// Combining the Two Arrays by their Index Values into their own Objects inside of an Array #1
var result = numbers.map(function (obj, index) {
  var myObj = {};
  myObj[cardinality[index]] = obj;
  return myObj;
});

// Combining the Two Arrays by their Index Values into their own Objects inside of an Array #2 (preferred)
var result = cardinality.forEach(function (v, i) {
  var myObj = {};
  myObj.cardinal = v;
  myObj.number = numbers[i];
  newArray.push(myObj);
});

console.log(newArray);

return result;
}

const length = 1000;

var result = generateNumbers(length, 1, 1000000);

console.log(result);

/**
 * Objective 2
 * Create a function that descends into the spaces of evenMattrix and creates and array of strings, each entry in the array being a check of whether the item is even or odd. Then place that into an array itself. Place those arrays into another array
 * EX [
 *  ["item 1 of subspace 1 is odd", "item 2 of subspace 1 is even", "item 3 of subspace 1 is even"],
 *  ...
 * ]
 */

function generateMatrixNumbers(mattrixLength, length, min, max) {
  var subspaces = [];

  for (mattrixLength; mattrixLength > 0; mattrixLength--) {
    var sequence = [];
    for (var i = length; i > 0; i--) {
      sequence.push(util.getRandomInt(min, max));
    }
    subspaces.push(sequence);
  }
  return subspaces;
}

let evenMattrix = generateMatrixNumbers(10, 10, 1, 1000);

function enterTheMatrix(evenMattrix) {
  //  creates newArray to store our output from the modulus conditional.
  let newArray = [];

  // loop the outer array
  for (let i = 0; i < evenMattrix.length; i++) {
    // get the size of the inner array(s)
    var innerArrayLength = evenMattrix[i].length;

    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
      // checks the modulus of the innerArray elements creates a string for each Even or Odd element, and pushes them all into a newArray
      if (evenMattrix[i][j] % 2 == 0) {
        // creates a string for each Even or Odd element, and pushes them all into a newArray
        newArray.push(`item ${[j]} of subspace ${[i]} is even`);
      } else {
        newArray.push(`item ${[j]} of subspace ${[i]} is odd`);
      }
    }
  }
  return newArray;
}
console.log(enterTheMatrix(evenMattrix));

/**
 * Objective 3
 * Creta a function that is able to describe jagged arrays.
 * EX "The jagged array has 10 subspaces
 * subspace 1 is 11 items long and all items summed together equal to 101456
 * subspace 2 is 3 items long and all items summed together equal to 103
 * ..."
 */

function generateJaggedMattrix(mattrixLength, lengthMax, min, max) {
  var subspaces = [];
  for (mattrixLength; mattrixLength > 0; mattrixLength--) {
    var sequence = [];
    for (var i = util.getRandomInt(1, lengthMax); i > 0; i--) {
      sequence.push(util.getRandomInt(min, max));
    }
    subspaces.push(sequence);
  }
  return subspaces;
}

var jaggedMattrix = generateJaggedMattrix(10, 20, 1, 1000000);
// console.log(jaggedMattrix);

function describesArrayQualities() {
  // describe length of the Jagged Matrix array
  console.log(`the Jagged Matrix has ${jaggedMattrix.length} subspaces`);

  // iterate through the outer array
  for (let i = 0; i < jaggedMattrix.length; i++) {
    // reduce the nested arrays contents individually and return a console.log for each unique value and iteration.
    var sums = jaggedMattrix[i].reduce((sum, item) => sum + item);
    console.log(
      `subspace ${[i]} is ${
        jaggedMattrix[i].length
      } items long and all the items summed together equal to ${sums}`
    );
  }
}

describesArrayQualities();
