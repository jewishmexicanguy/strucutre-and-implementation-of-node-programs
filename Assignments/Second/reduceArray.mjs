// (7) - Write a module function that accepts an array of numbers and returns the sum of all items in the array

const array = [1, 2, 3, 4, 5, 6, 7];

const reducingArray = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducingArray));
