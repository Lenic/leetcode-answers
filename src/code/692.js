import PriorityQueue from './priority-queue';

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  /**
   * @type {Map<string, number>}
   */
  const map = new Map();
  for (let item of words) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  /**
   * @type {PriorityQueue<string>}
   */
  const list = new PriorityQueue((x, y) => {
    const count = map.get(y) - map.get(x);
    if (!count) {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return count;
  });
  map.forEach((_, key) => list.offer(key));

  const res = new Array(k);
  for (let i = 0; i < k; i++) {
    res[i] = list.poll();
  }
  return res;
};

// ["i", "love"]
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));

// ["the", "is", "sunny", "day"]
console.log(topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4));
