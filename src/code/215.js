import Heap from './heap';
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const { down, setSize } = new Heap(nums, nums.length, (x, y) => y - x);

  const max = k - 1;
  for (let i = 0; i < max; i++) {
    nums[0] = nums.pop();
    setSize(nums.length);
    down(0);
  }

  return nums[0];
};

// 5
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

// 4
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
