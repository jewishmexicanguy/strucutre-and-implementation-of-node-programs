const fs = require("fs");
const csv = require("csv-parser");
const fetch = require("node-fetch");
const { parse } = require("path");

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

console.log(results);

async function writeToCSVFile(results) {
  const filename = await fetch("output.csv");
  fs.writeFile(filename, extractAsCSV(results), (err) => {
    if (err) {
      console.log("Error writing to CSV file", err);
    } else {
      console.log(`saved as ${filename}`);
    }
  });
}

async function extractAsCSV(results) {
  let header = [
    "Date/Time",
    "Symbol",
    "Open",
    "High",
    "Low",
    "Close",
    "Volume",
  ];

  const data = await results.text();

  const rows = data.split("\n").slice(1);
  rows.forEach((elt) => {
    const row = elt.split(",");
    console.log(row);
  });

  return header.concat(rows).join("\n");
  console.log(rows);
}
