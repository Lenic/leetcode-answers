import PriorityQueue from './priority-queue';

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  /**
   * @type {PriorityQueue<number>}
   */
  const pq = new PriorityQueue((x, y) => y - x);
  for (let stone of stones) {
    pq.offer(stone);
  }

  while (pq.size() > 1) {
    const item1 = pq.poll();
    const item2 = pq.poll();

    const rest = item1 >= item2 ? item1 - item2 : item2 - item1;
    if (rest > 0) {
      pq.offer(rest);
    }
  }

  return pq.peek() || 0;
};

// 1
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

// 0
console.log(lastStoneWeight([2, 2]));
