/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let remainder = 0;

  const map = new Map();
  map.set(0, 1);

  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    remainder = (remainder + nums[i]) % k;
    if (remainder < 0) {
      remainder += k;
    }

    if (map.has(remainder)) {
      const count = map.get(remainder);
      map.set(remainder, count + 1);

      res += count;
    } else {
      map.set(remainder, 1);
    }
  }
  return res;
};

// 7
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));

// 0
console.log(subarraysDivByK([5], 9));
