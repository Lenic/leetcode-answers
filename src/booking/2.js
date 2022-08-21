/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minSum = (nums, k) => {
  nums.sort((x, y) => x - y);

  for (let i = 0; i < k; i++) {
    const val = Math.ceil(nums.pop() / 2);

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (nums[mid] > val) {
        right = mid;
      } else if (nums[mid] < val) {
        left = mid + 1;
      } else {
        left = mid;
        break;
      }
    }

    nums.splice(left, 0, val);
  }

  return nums.reduce((x, y) => x + y);
};

// 14
console.log(minSum([10, 20, 7], 4));
