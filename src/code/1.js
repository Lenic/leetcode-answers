/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  if (!nums || !nums.length) return res;

  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const otherIndex = cache[nums[i]];

    if (nums[otherIndex] !== undefined) {
      return [otherIndex, i];
    }
    cache[target - nums[i]] = i;
  }

  return res;
};

// [0, 1]
console.log(twoSum([2, 7, 11, 15], 9));

// [1, 2]
console.log(twoSum([3, 2, 4], 6));

// [0, 1]
console.log(twoSum([3, 3], 6));
