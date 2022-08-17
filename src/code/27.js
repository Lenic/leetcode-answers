/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (count !== i && nums[count] !== nums[i]) {
        nums[count] = nums[i];
      }
      count += 1;
    }
  }
  return count;
};

/**
 * @param {number[]} nums
 * @param {number} val
 */
const polyfill = (nums, val) => {
  console.log(removeElement(nums, val), nums);
};

// 2, [2,2]
polyfill([3, 2, 2, 3], 3);

// 5, [0,1,3,0,4]
polyfill([0, 1, 2, 2, 3, 0, 4, 2], 2);
