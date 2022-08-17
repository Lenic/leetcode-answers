/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length === 2) {
    [nums[1], nums[0]] = [nums[0], nums[1]];
  }
  if (nums.length < 3) return nums;

  let left = nums.length - 2;
  while (left >= 0) {
    if (nums[left] < nums[left + 1]) {
      break;
    }
    left -= 1;
  }

  let right = nums.length - 1;
  if (left !== -1) {
    while (right >= 0) {
      if (nums[left] < nums[right]) {
        break;
      }
      right -= 1;
    }

    [nums[left], nums[right]] = [nums[right], nums[left]];
  }

  left += 1;
  right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];

    left += 1;
    right -= 1;
  }

  return nums;
};

// [2, 1]
console.log(nextPermutation([1, 2]));

// [1,3,2]
console.log(nextPermutation([1, 2, 3]));

// [1,2,3]
console.log(nextPermutation([3, 2, 1]));

// [1,5,1]
console.log(nextPermutation([1, 1, 5]));

// [1,5,8,5,1,3,4,6,7]
console.log(nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1]));
