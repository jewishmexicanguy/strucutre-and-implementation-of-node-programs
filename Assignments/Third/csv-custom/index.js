// * When reading a CSV file, be able to have the entire content of the file as multiple Javascript Objects.

const fs = require("fs");

const fileRead =
  "/Users/matthew/Desktop/projects/strucutre-and-implementation-of-node-programs/Assignments/Third/csv-custom/sample-input.csv";

const fileWrite =
  "/Users/matthew/Desktop/projects/strucutre-and-implementation-of-node-programs/Assignments/Third/csv-custom/sample-output.csv";

const myNewFile = `${process.cwd()}/new-output.csv`;

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

    // performing an operation on both the headers Array and the contentLines Array.
    for (var i = 0; i < headers.length; i++) {
      datum[headers[i]] = item.split(",")[i];
    }

    return parseData.push(datum);
  });

  var formattedString = "";
  headers.forEach((item) => {
    formattedString += item;
    formattedString += ",";
  });

  let editedString = formattedString.slice(0, -1) + "\n";

  contentLines.forEach((line) => {
    editedString += line;
    editedString += "\n";
  });

  console.log(editedString);

  fs.writeFile(myNewFile, editedString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file written successfully");
  });

  fs.readFile(myNewFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("file read successfully");

    var newLines = data.split("\n");
    var newHeaderLine = newLines[0];
    var newHeaders = newHeaderLine.split(",");

    var newParseData = [];
    var newContentLines = newLines.slice(1);

    newContentLines.forEach((item) => {
      var newDatum = {};

      for (var i = 0; i < newHeaders.length; i++) {
        newDatum[newHeaders[i]] = item.split(",")[i];
      }

      newParseData.push(newDatum);
    });

    // Changing the last HeaderColumn titled "volume" and changing it to "chad"

    const removeLastElement = (newHeaders) => {
      newHeaders.pop();
      newHeaders.push("chad");
      return newHeaders;
    };
    console.log(removeLastElement(newHeaders));

    // Change the first cell of the first row ( not the Header Row )
    console.log(newParseData);
    newParseData[0].dateTime = "chadtastic!";

    var newFormattedString = "";
    newHeaders.forEach((item) => {
      newFormattedString += item;
      newFormattedString += ",";
    });

    console.log(newFormattedString);

    // newParseData.forEach((item) => {
    //   newFormattedString += "\n";
    //   newFormattedString += `${
    //     (item.dateTime,
    //     item.symbol,
    //     item.open,
    //     item.high,
    //     item.low,
    //     item.close,
    //     item.volume)
    //   }`;
    // });

    // fs.writeFile(myNewFile, newEdittedString, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }

    //   console.log(
    //     "updating CSV file after demonstrating the manipulation of rows, columns, and cells!"
    //   );
    // });
  });
});
