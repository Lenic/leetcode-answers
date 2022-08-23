import Heap from './heap';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const list = [];
  const { down, setSize, up } = new Heap(list, list.length, (x, y) => x - y);

  for (let i = 0; i < nums.length; i++) {
    if (list.length < k) {
      const last = list.length;
      list.push(nums[i]);
      setSize(list.length);
      up(last);
    } else if (list[0] < nums[i]) {
      list[0] = nums[i];
      down(0);
    }
  }

  return list[0];
};

// 5
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

// 4
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
