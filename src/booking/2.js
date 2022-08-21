/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minSum = (nums, k) => {
  nums.sort((x, y) => x - y);

  for (let i = 0; i < k; i++) {
    const val = Math.ceil(nums.pop() / 2);

    let insertIndex = nums.length;
    for (let j = 0; j < nums.length; j++) {
      if (val < nums[j]) {
        insertIndex = j;
        break;
      }
    }

    nums.splice(insertIndex, 0, val);
  }

  return nums.reduce((x, y) => x + y);
};

// 14
console.log(minSum([10, 20, 7], 4));
