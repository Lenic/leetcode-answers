/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const list = new Array(1001).fill(0);

  for (let [count, from, to] of trips) {
    list[from] += count;

    if (to < list.length) {
      list[to] -= count;
    }
  }

  let previous = list[0];
  for (let i = 1; i < list.length; i++) {
    if (previous > capacity) {
      return false;
    }
    previous = previous + list[i];
  }
  return true;
};

// false
console.log(
  carPooling(
    [
      [9, 0, 1],
      [3, 3, 7],
    ],
    4
  )
);

// false
console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    4
  )
);

// true
console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    5
  )
);

// true
console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 5, 7],
    ],
    3
  )
);
