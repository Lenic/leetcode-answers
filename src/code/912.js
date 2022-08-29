import Heap from './heap';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  /**
   * @type {Heap<number>}
   */
  const { down } = new Heap(nums, (x, y) => y - x);

  for (let i = nums.length - 1; i > 0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    down(0, i);
  }

  return nums;
};

// [1,2,3,5]
console.log(sortArray([5, 2, 3, 1]));

// [0,0,1,1,2,5]
console.log(sortArray([5, 1, 1, 2, 0, 0]));
