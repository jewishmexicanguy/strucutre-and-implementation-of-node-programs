import fs from 'fs';
import CSV from './CSV.mjs';

// represent header row and columns

// represent rows that are not header and identify column cells belong to by counting commas.

var myCsv = new CSV("input.csv");
console.log(myCsv);


// non extendible way but easy way to modify cell values

myCsv.rows[2]
.getCell(0)
.setValue('I have altered this file pray i do not alter it further!');

myCsv.columns.getCell(0).setValue('Bad Column name');

myCsv.writeCSVFile("output.csv");