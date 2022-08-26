import PriorityQueue from './priority-queue';

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  /**
   * @type {Map<number, number>}
   */
  const nodeTimes = new Map();
  for (let i = 0; i < n; i++) {
    nodeTimes.set(i + 1, Infinity);
  }

  /**
   * @type {Map<number, Map<number, number>>}
   */
  const map = new Map();
  for (let i = 0; i < times.length; i++) {
    const [source, target, time] = times[i];

    if (!map.has(source)) {
      map.set(source, new Map());
    }

    map.get(source).set(target, time);
  }

  /**
   * @type PriorityQueue<{node:number,time:number}>
   *
   * The small time is before; if the time is equal, then the small node is before.
   */
  const pq = new PriorityQueue((x, y) => (x.time === y.time ? x.node - y.node : x.time - y.time));

  nodeTimes.set(k, 0);
  pq.offer({ node: k, time: 0 });

  while (!pq.isEmpty()) {
    const item = pq.poll();

    if (nodeTimes.get(item.node) < item.time) continue;

    const targets = map.get(item.node);
    if (targets && targets.size) {
      const inner = targets.entries();
      for (let [key, value] of inner) {
        const nextTime = value + item.time;
        if (nextTime < nodeTimes.get(key)) {
          nodeTimes.set(key, nextTime);
          pq.offer({ node: key, time: nextTime });
        }
      }
    }
  }

  let res = -1;
  nodeTimes.forEach((value) => (res = Math.max(res, value)));

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
