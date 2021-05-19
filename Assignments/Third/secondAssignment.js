// - Write a csv file that has the following headers/column names, "date time", "symbol", "open", "high", "low", "close", "volume".

// - You must demonstrate appending new rows to the CSV file

// - You must demonstrate inserting rows anywhere in the csv file

// - You must demonstrate removing a row anywhere in the csv file

// - You must demonstrate changing any cell in the csv file

const fs = require("fs");

function writeToCSVFile(data) {
  const filename = "stockData.csv";
  fs.writeFile(filename, extractAsCSV(data), (err) => {
    if (err) {
      console.log("Error writing to CSV file", err);
    } else {
      console.log(`saved as ${filename}`);
    }
  });
}

function extractAsCSV() {
  const header = ["dateTime, symbol, open, high, low, close, volume"];
  const dataTable = [
    ["Sigit", "Indonesia", "sigit@gmail.com"],
    ["Song", "South Korea", "songsong@gmail.com"],
    ["Andy", "Hong Kong", "andyLau@gmail.com"],
    ["Enji", "United States", "shaun2@gmail.com"],
    ["Azumi", "Japan", "azumiK@gmail.com"],
  ];
  const rows = dataTable.map(
    (datum) =>
      `${datum.dateTime} ${datum.symbol} ${datum.open} ${datum.high} ${datum.low} ${datum.close} ${datum.volume}`
  );
  return header.concat(rows).join("\n");
}

writeToCSVFile();
extractAsCSV();

// APPROACH 1

/**
let headerColumns = [
  "Date/Time",
  "Symbol",
  "Open",
  "High",
  "Low",
  "Close",
  "Volume",
];

let rowData = [
  `"${new Date().toDateString()}", "Symbol", "$120.00", "$484.33", "$38.74", "$282.36", "$20 million"`,
];

var parseRow = [];

rowData.forEach((row) => {
  var datum = {};

  for (var i = 0; i < headerColumns.length; i++) {
    datum[rowData[i]] = row.split(",")[i];
  }

  parseRow.push(datum);
});

console.log(parseRow);

*/

// APPROACH 2

/**
function generateData(dateTime, symbol, open, high, low, close, volume) {
  return dateTime, symbol, open, high, low, close, volume;
}

const data = [];
const dataRows = [];

var readStream = fs.createReadStream("stockData.csv");

fs.createReadStream("stockData.csv")
  .on("data", function (row) {
    const stockData = generateData(row.Firstname, row.Surname);

    const datum = {
      stockData,
      dateTime: row.Firstname,
      symbol: row.Surname,
      open: row.Roles,
      high: row.High,
      low: row.Low,
      close: row.Close,
      volume: row.Volume,
    };
    data.push(datum);
  })
  .on("end", function () {
    console.table(data);
    // TODO: SAVE users data to another file
  });

 */
