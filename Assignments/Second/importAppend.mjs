// (2) - write a module script that imports the above function and uses it to append the string 'BEGGINING CALCULATIONS ON : <this date and time>'
import { appendMe } from "./appendMe.mjs";

var beginningTime = `BEGINNING CALCULATIONS ON : ${Date.now()}`;

// what matters is that the input variable matches the output variable
function beginningCalc(x) {
  /**
   * This will work, but it is bad form to try to return something that does not return anything.
   * appendMe() returns nothing
   */
  //return appendMe(x);
  /**
   * Instead write the two lines below.
   */
  appendMe(x);
  return;
}

beginningCalc(beginningTime + "\n");

// (3) - write a module function that appends to calculations.txt and writes 'ENDING CALCULATIONS ON : <this date and time>' and use it in the module script

var endingTime = `ENDING CALCULATIONS ON : ${Date.now()}`;

function endingCalc(y) {
  /**
   * Same comment here.
   */
  //return appendMe(y);
  appendMe(y);
  return;
}
/**
 * Why are you adding a new line at the beggining instead of at the end?
 */
//endingCalc("\n" + endingTime);
endingCalc(endingTime + "\n");
