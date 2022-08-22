/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let right = 0;

  let res = 0;
  let sum1 = 0;
  let left1 = 0;
  let sum2 = 0;
  let left2 = 0;
  while (right < nums.length) {
    sum1 += nums[right];
    while (left1 <= right && sum1 > goal) {
      sum1 -= nums[left1];
      left1 += 1;
    }

    sum2 += nums[right];
    while (left2 <= right && sum2 >= goal) {
      sum2 -= nums[left2];
      left2 += 1;
    }

    right += 1;
    res += left2 - left1;
  }
  return res;
};

// 4
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

// 15
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
