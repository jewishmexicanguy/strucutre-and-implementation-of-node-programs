// (1) - write a module with a function that appends to a file called calculations.txt
import fs from "fs";

// anyonymous function initializer
const appendMe = (stringToWrite) => {
  fs.appendFile(
    "/Users/matthew/Desktop/projects/strucutre-and-implementation-of-node-programs/Assignments/Second/calculations.txt",
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
