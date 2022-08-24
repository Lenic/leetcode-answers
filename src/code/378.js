import Heap from './heap';

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  /**
   * @type {{col:number,row:number}[]}
   */
  const list = new Array(n);
  for (let i = 0; i < n; i++) {
    list[i] = { row: i, col: 0 };
  }

  const { down } = new Heap(list, (x, y) => matrix[x.row][x.col] - matrix[y.row][y.col]);
  const max = k - 1;
  for (let i = 0; i < max; i++) {
    const { col, row } = list[0];
    if (col < n - 1) {
      list[0] = { row, col: col + 1 };
    } else {
      list[0] = list.pop();
    }
    down(0);
  }
  return matrix[list[0].row][list[0].col];
};

// 3
console.log(
  kthSmallest(
    [
      [1, 2],
      [1, 3],
    ],
    4
  )
);

// 13
console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);

// -5
console.log(kthSmallest([[-5]], 1));
