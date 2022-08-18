/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let res = Infinity;

  let sum = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      res = Math.min(res, right - left + 1);
      if (res === 1) return res;

      sum -= nums[left];
      left += 1;
    }
    right += 1;
  }

  return res === Infinity ? 0 : res;
};

// 2
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// 1
console.log(minSubArrayLen(4, [1, 4, 4]));
