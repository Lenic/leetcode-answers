import PriorityQueue from './priority-queue';

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  trips.sort((x, y) => x[1] - y[1]);

  /**
   * @type {PriorityQueue<number[]>}
   */
  const pq = new PriorityQueue((x, y) => x[2] - y[2]);

  let rest = capacity;
  for (let trip of trips) {
    while (!pq.isEmpty() && pq.peek()[2] <= trip[1]) {
      const item = pq.poll();
      rest += item[0];
    }

    pq.offer(trip);
    rest -= trip[0];

    if (rest < 0) return false;
  }

  return true;
};

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
