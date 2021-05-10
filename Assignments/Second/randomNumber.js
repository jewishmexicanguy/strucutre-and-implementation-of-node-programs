// (5) - Write a script that calcultes 1000 random numbers, from 1 - 1,000,000 and *appends* them to numbers.txt with one number on each line.

var fs = require("fs");

const getRandomNumber = (min, max, totalTimesRan) => {
  const numberList = [];

  for (var i = 0; i <= totalTimesRan; i++) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    numberList.push(number + "\n");
  }

  return numberList.join("");
};

const data = `${getRandomNumber(1, 1000000, 1000)}`;

fs.appendFile(
  //"/Users/matthew/Desktop/projects/strucutre-and-implementation-of-node-programs/Assignments/Second/numbers.txt",
  /**
   * Please use relative paths
   * It is very unlikley that other's machines will have the same path's that you do on your machine. 
   * */
  "./numberst.txt",
  data,
  "utf8",
  // callback function
  function (err) {
    if (err) throw err;
    // if no error
    console.log("Data is appended to file successfully.");
  }
);
