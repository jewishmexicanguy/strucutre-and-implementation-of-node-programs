// (1) - write a module with a function that appends to a file called calculations.txt
import fs from "fs";

// anyonymous function initializer
const appendMe = (stringToWrite) => {
  fs.appendFile(
    "./calculations.txt", /* Passing in the file path using a relative path. 
      This requires that you the CLI you are running the program, 'syncModule.mjs', from is in the same directory it is in.
    */
    stringToWrite,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  return;
};

export { appendMe };
