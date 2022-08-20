/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftToRight = new Array(nums.length);
  leftToRight[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftToRight[i] = nums[i - 1] * leftToRight[i - 1];
  }

  for (let i = nums.length - 2, rightSum = 1; i >= 0; i--) {
    rightSum *= nums[i + 1];
    leftToRight[i] = leftToRight[i] * rightSum;
  }

  return leftToRight;
};

// [2,1]
console.log(productExceptSelf([1, 2]));

// [24,12,8,6]
console.log(productExceptSelf([1, 2, 3, 4]));
