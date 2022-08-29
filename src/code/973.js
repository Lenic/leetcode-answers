import Heap from './heap';

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  /**
   * @type {number[][]}
   */
  const list = [];
  /**
   * @param {number[]} x
   * @param {number[]} y
   * @requires {number}
   */
  const comparer = (x, y) => Math.pow(y[0], 2) + Math.pow(y[1], 2) - Math.pow(x[0], 2) - Math.pow(x[1], 2);
  /**
   * @type {Heap<number[]>}
   */
  const { down, up } = new Heap(list, comparer);

  for (let point of points) {
    if (list.length < k) {
      list.push(point);
      up(list.length - 1);
    } else if (comparer(point, list[0]) >= 0) {
      list[0] = point;
      down(0);
    }
  }

  return list;
};

// [[-2,2]]
console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);

// [[3,3],[-2,4]]
console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);

// [[-2,2],[2,-2]]
console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
      [2, -2],
    ],
    2
  )
);
