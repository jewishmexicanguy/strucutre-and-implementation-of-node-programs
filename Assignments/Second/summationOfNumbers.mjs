// (8) - Write uses the function above that to write the summation of all the numbers to one line in calculations.txt sandwiched between the BEGGINING CALCULATIONS and ENDING CALCULATIOINS lines

import fs from "fs";

// const data = "../Second/numbers.txt";

function summingArray() {
  const newArray = [];
  const reducingArray = (accumulator, currentValue) =>
    accumulator + currentValue;
  var text = fs.readFileSync("../Second/numbers.txt");
  newArray.push(text);
  const result = newArray.reduce(reducingArray, 0).toString();

  fs.appendFile("../Second/calculations.txt", result, (err) => {
    if (err) {
      console.log(err);
    }
    return result;
  });
}

console.log(summingArray());
