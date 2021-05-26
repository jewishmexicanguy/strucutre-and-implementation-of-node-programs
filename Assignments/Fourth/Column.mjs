import Cell from "./Cell.mjs";

class Column {
  constructor(index, values) {
    this.index = index;
    this.cells = [];
    
    for (var i = 0; i < values.length; i++) {
      this.cells.push(new Cell(values[i]));
    }
    return;
  }

  getColumn(index) {
    return this.cells[index];
  }

  setColumn(index, value) {
    this.cells[index].setValue(value);
    return;
  }

  stringify() {
    var s = "";
    for (var i = 0; i < this.cells.length; i++) {
      s += this.getColumn(i).getValue();
      if (i == this.cells.length - 1) {
      } else {
        s += ",";
      }
    }

    return s;
  }
}

export default Column;
