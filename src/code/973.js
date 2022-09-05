/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  /**
   * @param {number[]} point
   * @returns {number}
   */
  const getDistance = (point) => {
    if (point.length > 2) return point[2];

    const distance = Math.pow(point[0], 2) + Math.pow(point[1], 2);
    point.push(distance);

    return distance;
  };
  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  const partition = (left, right) => {
    const mid = left + ((right - left) >> 1);
    if (mid !== left) {
      [points[mid], points[left]] = [points[left], points[mid]];
    }

    let i = left;
    let j = right;
    const pivot = points[left];

    while (i < j) {
      while (i < j && getDistance(points[j]) > getDistance(pivot)) j -= 1;
      if (i < j) {
        points[i] = points[j];
        i += 1;
      }

      while (i < j && getDistance(points[i]) < getDistance(pivot)) i += 1;
      if (i < j) {
        points[j] = points[i];
        j -= 1;
      }
    }
    points[i] = pivot;

    return i;
  };

  let left = 0;
  let right = points.length - 1;
  const targetIndex = k - 1;

  do {
    const index = partition(left, right);
    if (index === targetIndex) {
      left = targetIndex;
      break;
    } else if (index < targetIndex) {
      left = index + 1;
    } else if (index > targetIndex) {
      right = index - 1;
    }
  } while (left < right);

  /**
   * @type {number[]}
   */
  const res = [];
  for (let i = 0; i <= left; i++) {
    res.push([points[i][0], points[i][1]]);
  }
  return res;
};

console.log(
  kClosest(
    [
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
    ],
    5
  )
);

console.log(
  kClosest(
    [
      [-66, 42],
      [-67, 94],
      [46, 10],
      [35, 27],
      [-9, -6],
      [-84, -97],
      [38, -22],
      [3, -39],
      [71, -97],
      [-40, -86],
      [-45, 56],
      [-91, 59],
      [24, -11],
      [91, 100],
      [-68, 43],
      [34, 27],
    ],
    6
  )
);

// [[-4,-2],[-5,-1],[9,0],[9,1],[3,-9]]
console.log(
  kClosest(
    [
      [9, 0],
      [7, 10],
      [-4, -2],
      [3, -9],
      [9, 1],
      [-5, -1],
    ],
    5
  )
);

// [[ 1, 1 ]]
console.log(
  kClosest(
    [
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [1, 1],
    ],
    1
  )
);

// [[0, 1], [1, 0]]
console.log(
  kClosest(
    [
      [0, 1],
      [1, 0],
    ],
    2
  )
);

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
