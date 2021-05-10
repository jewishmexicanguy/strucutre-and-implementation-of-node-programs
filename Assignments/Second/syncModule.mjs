// (6) - write a module function that synchrnously reads the contents of the file numbers.txt
import { readFromFileSynchronously } from "./libMe.mjs";

/**
 * QUESTION?
 * Where is this relative path going?
 *  - It is going to go to the file above it, then into the folder 'Second' then look for the file 'numbers.txt'
 *  - Why is it neccessary to go up one level?
 *  - Why not simplify this and only pass in './numbers.txt' ?
 *    - This is assuming that you are running 'syncModule.mjs' from the same directory where it currently is.
 */
//console.log(readFromFileSynchronously("../Second/numbers.txt"));
console.log(readFromFileSynchronously("./numbers.txt"));

// (7) - write a module function that can seperate each line into it's own string
import fs from "fs";

/**
 * QUESTION?
 * Where is this relative path going?
 *  - It is going to go to the file above it, then into the folder 'Second' then look for the file 'numbers.txt'
 *  - Why is it neccessary to go up one level?
 *  - Why not simplify this and only pass in './numbers.txt' ?
 *    - This is assuming that you are running 'syncModule.mjs' from the same directory where it currently is.
 */
//const data = "../Second/numbers.txt";
const data = "./numbers.txt";

const seperateEachLineToString = (data) => {
  var text = fs.readFileSync(data).toString();
  var textByLine = text.split("\n");

  return textByLine;
};

console.log(seperateEachLineToString(data));
