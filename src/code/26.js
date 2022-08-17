/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  for (let i = 0, j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[count] = nums[j];
      count += 1;
      i = j;
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
