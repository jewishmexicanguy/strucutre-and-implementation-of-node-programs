const fs = require("fs");

const headerColumn = ["Name", "Country", "Email"];

const data = [
  ["Sigit", "Indonesia", "sigit@gmail.com"],
  ["Song", "South Korea", "songsong@gmail.com"],
  ["Andy", "Hong Kong", "andyLau@gmail.com"],
  ["Enji", "United States", "shaun2@gmail.com"],
  ["Azumi", "Japan", "azumiK@gmail.com"],
];

const delimiter = ",";

const fileRead =
  "/Users/matthew/Desktop/projects/strucutre-and-implementation-of-node-programs/Assignments/Third/StockQuotes.csv";
const fileWrite =
  "/Users/matthew/Desktop/projects/strucutre-and-implementation-of-node-programs/Assignments/Third/SampleData.csv";

/**
 *  This function joins seperates two arrays by a delimiter value and joins both of them together with new line breaks.
 * @param {array} headerColumn
 * @param {array} data
 * @param {string} delimiter
 */

const export_csv = (headerColumn, data, delimiter) => {
  let header = headerColumn.join(delimiter) + "\n";

  data.forEach((array) => {
    header += array.join(delimiter) + "\n";
  });

  return header;
};

export_csv(headerColumn, data, delimiter);

/**
 * First read the file for it's contents.
 * Second, get the header columns by isolating the first \n character
 */

fs.readFile(fileRead, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var lines = data.split("\n");
  var headerLine = lines[0];
  var headers = headerLine.split(",");

  var parseData = [];
  var contentLines = lines.slice(1);

  contentLines.forEach((item) => {
    var datum = {};

    for (var i = 0; i < headers.length; i++) {
      datum[headers[i]] = item.split(",")[i];
    }

    parseData.push(datum);
  });

  console.log(parseData);

  // fs.writeFile(fileWrite, lines, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log("file written successfully");
  // });
});

// Finding specific rows, cells, and columns so that they can be manipulated