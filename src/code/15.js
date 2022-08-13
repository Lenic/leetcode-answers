/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const res = {};
  const max = nums.length - 2;
  for (let i = 0; i < max; i++) {
    const restValue = 0 - nums[i];
    const cache = {};
    for (let j = i + 1; j < nums.length; j++) {
      const item = nums[j];
      if (cache[item] !== void 0) {
        const list = [nums[i], cache[item], item].sort((x, y) => x - y);
        res[list.join(',')] = list;
        continue;
      }
      cache[restValue - item] = item;
    }
  }
  return Object.keys(res).map((v) => res[v]);
};

// [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
