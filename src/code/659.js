import PriorityQueue from './priority-queue';

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  /**
   * @type {Map<number, PriorityQueue<number>>}
   */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (!map.has(item)) {
      map.set(item, new PriorityQueue((x, y) => x - y));
    }

    const previous = item - 1;
    if (map.has(previous)) {
      const previousQueue = map.get(previous);

      // it get the top element from previous heap, add to current heap
      const top = previousQueue.poll();

      const currentQueue = map.get(item);
      currentQueue.offer(top + 1);

      // remove minimum item from previous heap, and remove previous heap if it is empty.
      if (previousQueue.isEmpty()) {
        map.delete(previous);
      }
    } else {
      map.get(item).offer(1);
    }
  }

  for (let queue of map.values()) {
    if (queue.peek() < 3) {
      return false;
    }
  }
  return true;
};

// true
console.log(isPossible([1, 2, 3, 3, 4, 5]));

// true
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]));

// false
console.log(isPossible([1, 2, 3, 4, 4, 5]));
