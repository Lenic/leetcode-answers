/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  if (nums.length < 4) return res;

  nums.sort((x, y) => x - y);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1] < target) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[nums.length - 2] + nums[nums.length - 1] < target) continue;

      let left = j + 1;
      let right = nums.length - 1;
      const restValue = target - nums[i] - nums[j];

      while (left < right) {
        const diff = restValue - nums[left] - nums[right];

        if (diff > 0) {
          while (left < right && nums[left + 1] === nums[left]) left += 1;
          left += 1;
        } else if (diff < 0) {
          while (left < right && nums[right - 1] === nums[right]) right -= 1;
          right -= 1;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left + 1] === nums[left]) left += 1;
          left += 1;

          while (left < right && nums[right - 1] === nums[right]) right -= 1;
          right -= 1;
        }
      }
    }
  }

  return res;
};

// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// [[2,2,2,2]]
console.log(fourSum([2, 2, 2, 2, 2], 8));

// [[-3,-1,0,4]]
console.log(fourSum([-3, -1, 0, 2, 4, 5], 0));

// [[-3,-1,2,4]]
console.log(fourSum([-3, -1, 0, 2, 4, 5], 2));

// [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
