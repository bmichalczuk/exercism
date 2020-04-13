//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(raw) {
    this.raw = raw;
  }
  getColumn(col) {
    return this.rows.map(row => row[col]);
  }
  get rows() {
    return this.raw
      .split("\n")
      .map(row => row.split(" "))
      .map(arr => arr.map(str => Number(str)));
  }
  get columns() {
    return this.rows[0].map((el, i) => this.getColumn(i));
  }
}
