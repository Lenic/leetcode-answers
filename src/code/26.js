/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      if (i !== count) {
        nums[count] = nums[i];
      }
      count += 1;
    }
  }
  return count;
};

const polyfill = (nums) => {
  console.log(removeDuplicates(nums), nums);
};

// 2, [1,2]
polyfill([1, 1, 2]);

// 5, [0,1,2,3,4]
polyfill([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
