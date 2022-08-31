/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  /**
   * @type {number[]}
   */
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;

  let unchanged = true;
  while (unchanged) {
    for (let [from, to, time] of times) {
      if (dist[from] === Infinity) continue;

      const nextTime = dist[from] + time;
      if (nextTime < dist[to]) {
        unchanged = false;
        dist[to] = nextTime;
      }
    }
    if (unchanged) break;
    unchanged = true;
  }

  let res = 0;
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] === Infinity) return -1;

    res = Math.max(res, dist[i]);
  }
  return res;
};

// 3
console.log(
  networkDelayTime(
    [
      [1, 2, 1],
      [2, 1, 3],
    ],
    2,
    2
  )
);

// 1
console.log(networkDelayTime([[1, 2, 1]], 2, 1));

// -1
console.log(networkDelayTime([[1, 2, 1]], 2, 2));

// 2
console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
