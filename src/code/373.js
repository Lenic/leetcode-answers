import Heap from './heap';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const h1 = new Heap(nums1, nums1.length, (x, y) => x - y);
  const h2 = new Heap(nums2, nums2.length, (x, y) => x - y);

  let i1 = 0;
  let i2 = 0;

  const res = new Array(k);

  let n1 = nums1[i1];
  let n2 = nums2[i2];
  res.push([n1, n2]);

  for (let i = 1; i < k; i++) {
    h1[0] = nums1.pop();
    h1.setSize(nums1.length);
    h1.down(0);

    const n1next = h1[]
  }
};

// [1, 2], [1, 4], [1, 6];
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
