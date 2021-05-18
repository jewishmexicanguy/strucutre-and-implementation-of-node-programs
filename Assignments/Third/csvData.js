getData();

async function getData() {
  const response = await fetch("StockQuotes.csv");
  const data = await response.text();

  const rows = data.split("\n").slice(1);
  rows.forEach((elt) => {
    const row = elt.split(",");
    console.log(row);
  });

  console.log(rows);
}
