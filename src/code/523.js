/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, -1);

  let remainder = 0;
  for (let i = 0; i < nums.length; i++) {
    remainder = (remainder + nums[i]) % k;

    if (map.has(remainder)) {
      if (i - map.get(remainder) >= 2) {
        return true;
      }
    } else {
      map.set(remainder, i);
    }
  }

  return false;
};

// true
console.log(checkSubarraySum([23, 2, 4, 6, 6], 7));

// true
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));

// false
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
