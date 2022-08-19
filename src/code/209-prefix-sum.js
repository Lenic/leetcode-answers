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
    const targetValue = sums[i] + target;

    for (let j = i; j < nums.length; j++) {
      if (sums[j + 1] >= targetValue) {
        res = Math.min(res, j - i + 1);

        if (res === 1) return res;
        break;
      }
    }
  }

  return res === Infinity ? 0 : res;
};

// 2
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// 1
console.log(minSubArrayLen(4, [1, 4, 4]));
