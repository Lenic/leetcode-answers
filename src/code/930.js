/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let res = 0;

  let sums = new Array(nums.length + 1);
  sums[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = sums[j + 1] - sums[i];
      if (sum === goal) {
        res += 1;
      }
    }
  }

  return res;
};

// 4
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

// 15
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
