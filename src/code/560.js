/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);

  let res = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    const diff = sum - k;
    if (map.has(diff)) {
      res += map.get(diff);
    }

    const count = (map.get(sum) || 0) + 1;
    map.set(sum, count);
  }

  return res;
};

// 2
console.log(subarraySum([1, 1, 1], 2));

// 3
console.log(subarraySum([1, 2, 3], 3));

// 3
console.log(subarraySum([1, -1, 0, 3, -3], 3));
