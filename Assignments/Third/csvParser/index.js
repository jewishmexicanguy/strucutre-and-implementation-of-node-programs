const fs = require("fs");
const csv = require("csv-parser");

const results = [];

// - Write a csv file that has the following headers/column names, "date time", "symbol", "open", "high", "low", "close", "volume".

// - You must demonstrate appending new rows to the CSV file

// - You must demonstrate inserting rows anywhere in the csv file

// - You must demonstrate removing a row anywhere in the csv file

// - You must demonstrate changing any cell in the csv file

fs.createReadStream("input.csv")
  .pipe(csv())

  .on("data", (data) => {
    results.push(data);
  })

  .on("end", function () {
    writeToCSVFile(results);
    console.table(results);
  });

function writeToCSVFile(results) {
  const filename = "output.csv";
  fs.writeFile(filename, extractAsCSV(results), (err) => {
    if (err) {
      console.log("Error writing to CSV file", err);
    } else {
      console.log(`saved as ${filename}`);
    }
  });
}

function extractAsCSV(results) {
  const header = ["dateTime, symbol, open, high, low, close, volume"];
  const rows = results.map(
    (datum) =>
      `${datum.dateTime} ${datum.symbol} ${datum.open} ${datum.high} ${datum.low} ${datum.close} ${datum.volume}`
  );
  return header.concat(rows).join("\n");
}
