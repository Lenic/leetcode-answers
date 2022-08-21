/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let res = 0;

  let sum = 0;
  let map = new Map();
  map.set(sum, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;
    if (map.has(sum)) {
      res = Math.max(res, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return res;
};

// 2
console.log(findMaxLength([0, 1]));

// 2
console.log(findMaxLength([0, 1, 0]));
