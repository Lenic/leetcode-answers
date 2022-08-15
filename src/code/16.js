/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = Infinity;
  let previousDiff = Infinity;

  nums.sort((x, y) => x - y);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = sum - target;
      if (diff > 0) {
        if (previousDiff > diff) {
          res = sum;
          previousDiff = diff;

          while (left < right && nums[right - 1] === nums[right]) right -= 1;
        }
        right -= 1;
      } else if (diff < 0) {
        if (previousDiff > -diff) {
          res = sum;
          previousDiff = -diff;

          while (left < right && nums[left + 1] === nums[left]) left += 1;
        }
        left += 1;
      } else {
        return sum;
      }
    }
  }

  return res;
};

// 2
console.log(threeSumClosest([-1, 2, 1, -4], 1));

// 0
console.log(threeSumClosest([0, 0, 0], 1));
