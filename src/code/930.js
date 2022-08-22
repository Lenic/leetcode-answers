/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const map = new Map();
  map.set(0, 1);

  let res = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    const diff = sum - goal;
    if (map.has(diff)) {
      res += map.get(diff);
    }

    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return res;
};

// 4
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

// 15
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
