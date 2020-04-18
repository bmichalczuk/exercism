//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export class Matrix {
  constructor(raw) {
    this.raw = raw;
    this.cashe = {
      rows: null,
      columns: null
    };
  }
  parseRaw() {
    return this.raw.split("\n");
  }
  getColumn(col) {
    return this.rows.map(row => row[col]);
  }
  getRow(rawRow) {
    return rawRow.split(" ").map(str => Number(str));
  }
  get rows() {
    if(this.cashe.rows) {
      return this.cashe.rows;
    } 
    this.cashe.rows = this.parseRaw().map(this.getRow);
    return this.cashe.rows;
  }
  get columns() {
    if(this.cashe.columns) {
      return this.cashe.columns;
    } 
    this.cashe.columns = this.rows[0].map((el, i) => this.getColumn(i));
    return this.cashe.columns;
  }
}
