/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} target
 * @return {number}
 */
const binarySearch = (nums, left, right, target) => {
  let mid = -1;

  let begin = left;
  let end = right;
  while (begin < end) {
    mid = (begin + end) >> 1;
    if (nums[mid] >= target) {
      end = mid;
    } else {
      begin = mid + 1;
    }
  }

  return nums[begin] >= target ? begin : -1;
};

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const sums = new Array(nums.length + 1);
  sums[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = nums[i] + sums[i];
  }

  let res = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const index = binarySearch(sums, i, nums.length, sums[i] + target);
    if (index !== -1) {
      res = Math.min(res, index - i);
      if (res === 1) return res;
    }
  }
  return res === Infinity ? 0 : res;
};

// 2
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// 1
console.log(minSubArrayLen(4, [1, 4, 4]));
