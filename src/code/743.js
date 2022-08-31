import PriorityQueue from './priority-queue';

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
  const dist = new Array(n).fill(Infinity);
  dist[k - 1] = 0;

  /**
   * @type {Map<number, number[][]>}
   */
  const map = new Map();
  for (let i = 0; i < times.length; i++) {
    const [source, target, time] = times[i];

    if (!map.has(source)) {
      map.set(source, []);
    }

    map.get(source).push([target, time]);
  }

  /**
   * @type PriorityQueue<{node:number,time:number}>
   *
   * The small time is before; if the time is equal, then the small node is before.
   */
  const pq = new PriorityQueue((x, y) => (x.time === y.time ? x.node - y.node : x.time - y.time));
  pq.offer({ node: k, time: 0 });

  while (!pq.isEmpty()) {
    const item = pq.poll();

    if (dist[item.node - 1] < item.time) continue;

    const targets = map.get(item.node);
    if (targets && targets.length) {
      for (let [node, time] of targets) {
        const nextTime = time + item.time;
        if (nextTime < dist[node - 1]) {
          dist[node - 1] = nextTime;
          pq.offer({ node, time: nextTime });
        }
      }
    }
  }

  let res = dist.reduce((x, y) => Math.max(x, y));
  return res === Infinity ? -1 : res;
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
