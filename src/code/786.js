import PriorityQueue from './priority-queue';

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  /**
   * @type {PriorityQueue<{val:number,arr: number[]}>}
   */
  const pq = new PriorityQueue((x, y) => y.val - x.val);

  const max = arr.length - 1;
  for (let i = 0; i < max; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const val = arr[i] / arr[j];
      const item = { val, arr: [arr[i], arr[j]] };
      if (pq.size() < k) {
        pq.offer(item);
      } else if (pq.peek().val > val) {
        pq.poll();
        pq.offer(item);
      }
    }
  }

  return pq.peek().arr;
};

// [2,5]
console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));

// [1,7]
console.log(kthSmallestPrimeFraction([1, 7], 1));
