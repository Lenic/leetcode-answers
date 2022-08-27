import PriorityQueue from './priority-queue';

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  /**
   * @type {Map<string, number>}
   */
  const map = new Map();
  for (let item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  /**
   * @type {PriorityQueue<{s: string, count: number}>}
   *
   * maximum heap:
   *
   * - sort by count property in a descending order
   * - if the count property is equal, then sort by time in ascending order
   */
  const pq = new PriorityQueue((x, y) => {
    if (x.count === y.count) {
      return x.s < y.s ? -1 : x.s > y.s ? 1 : 0;
    }

    return y.count - x.count;
  });
  for (let [s, count] of map) {
    pq.offer({ s, count });
  }

  const res = [];
  while (pq.size() > 1) {
    const item1 = pq.poll();
    const item2 = pq.poll();

    item1.count -= 1;
    item2.count -= 1;

    res.push(item1.s);
    res.push(item2.s);

    if (item1.count) pq.offer(item1);
    if (item2.count) pq.offer(item2);
  }
  if (!pq.isEmpty()) {
    const item = pq.poll();
    if (res[res.length - 1] === item.s || item.count > 1) {
      return '';
    } else {
      res.push(item.s);
    }
  }
  return res.join('');
};

// ""
console.log(reorganizeString('aaab'));

// "vlvov"
console.log(reorganizeString('vvvlo'));

// "aba"
console.log(reorganizeString('aab'));
