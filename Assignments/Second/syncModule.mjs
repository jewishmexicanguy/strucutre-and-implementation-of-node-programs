// (6) - write a module function that synchrnously reads the contents of the file numbers.txt
import { readFromFileSynchronously } from "./libMe.mjs";

console.log(readFromFileSynchronously("../Second/numbers.txt"));

// (7) - write a module function that can seperate each line into it's own string
import fs from "fs";

const data = "../Second/numbers.txt";

const seperateEachLineToString = (data) => {
  var text = fs.readFileSync(data).toString();
  var textByLine = text.split("\n");

  return textByLine;
};

console.log(seperateEachLineToString(data));
