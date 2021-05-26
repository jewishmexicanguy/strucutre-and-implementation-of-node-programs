class Cell {
  constructor(value) {
    this.value = value;
    return;
  }
  /**
   * This method retrieves the value in this cell
   * @returns The value stored in this cell
   */
  getValue() {
    return this.value;
  }
  /**
   * This method sets the value of a cell. 
   * It will overwrite the value if already has one.
   * @param value the value to set to cell too
   */
  setValue(value) {
    this.value = value;
    return;
  }
}

export default Cell;