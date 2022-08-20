/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (nums.length === 2) return [nums[1], nums[0]];

  let leftToRight = new Array(nums.length);
  leftToRight[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftToRight[i] = nums[i - 1] * leftToRight[i - 1];
  }

  let rightToLeft = new Array(nums.length);
  rightToLeft[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightToLeft[i] = rightToLeft[i + 1] * nums[i + 1];
  }

  let res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    res[i] = leftToRight[i] * rightToLeft[i];
  }
  return res;
};

// [2,1]
console.log(productExceptSelf([1, 2]));

// [24,12,8,6]
console.log(productExceptSelf([1, 2, 3, 4]));
