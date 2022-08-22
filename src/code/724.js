/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length < 1) return -1;

  let sums = new Array(nums.length + 1);
  sums[nums.length] = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    sums[i] = sums[i + 1] + nums[i];
  }

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sums[i + 1]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

// 0
console.log(pivotIndex([1, 0]));

// 0
console.log(pivotIndex([1]));

// 2
console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));

// 3
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// 0
console.log(pivotIndex([2, 1, -1]));
