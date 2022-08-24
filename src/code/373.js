import Heap from './heap';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  /**
   * @type {number[][]}
   */
  const pairs = [];
  const min = Math.min(nums1.length, k);
  for (let i = 0; i < min; i++) {
    pairs.push([i, 0]);
  }

  /**
   * @type {number[][]}
   */
  const res = [];
  const { down } = new Heap(pairs, (x, y) => {
    const value = nums1[x[0]] + nums2[x[1]] - nums1[y[0]] - nums2[y[1]];
    return value >= 0 ? 1 : -1;
  });
  for (let i = 0; i < k; i++) {
    const [i1, i2] = pairs[0];
    res.push([nums1[i1], nums2[i2]]);

    if (i2 < nums2.length - 1) {
      pairs[0] = [i1, i2 + 1];
    } else {
      const last = pairs.pop();
      if (pairs.length) {
        pairs[0] = last;
      } else {
        break;
      }
    }
    down(0);
  }
  return res;
};

// [[101,2],[101,2],[102,2],[102,2],[101,3]]
console.log(kSmallestPairs([101, 101, 102, 102, 103, 1003], [2, 3], 5));

// [[1,1],[1,1],[2,1],[1,2],[1,2],[2,2],[1,3],[1,3],[2,3]]
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 10));

// [1, 3], [2, 3]
console.log(kSmallestPairs([1, 2], [3], 3));

// [1, 2], [1, 4], [1, 6];
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));

// [1, 2], [2, 2], [1, 4];
console.log(kSmallestPairs([1, 2, 7, 11], [2, 4, 6], 3));
