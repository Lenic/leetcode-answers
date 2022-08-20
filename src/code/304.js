/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = new Array(matrix.length);

  let len = 0;
  if (matrix.length) {
    len = matrix[0].length + 1;
    for (let i = 0; i < matrix.length; i++) {
      this.matrix[i] = new Array(len);
      this.matrix[i][0] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < len; j++) {
      this.matrix[i][j + 1] = this.matrix[i][j] + matrix[i][j];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let res = 0;

  for (let i = row1; i <= row2; i++) {
    res += this.matrix[i][col2 + 1] - this.matrix[i][col1];
  }

  return res;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/**
 * @param {number[][]} matrix
 * @param {number[][]} segments
 */
const polyfill = (matrix, segments) => {
  const obj = new NumMatrix(matrix);
  return segments.map(([row1, col1, row2, col2]) => obj.sumRegion(row1, col1, row2, col2));
};

// [8, 11, 12]
console.log(
  polyfill(
    [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ],
    [
      [2, 1, 4, 3],
      [1, 1, 2, 2],
      [1, 2, 2, 4],
    ]
  )
);
