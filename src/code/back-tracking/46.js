/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  /**
   * @type {number[][]}
   */
  const res = [];

  /**
   * @param {number} left
   */
  const traversal = (left) => {
    if (left === nums.length) {
      res.push([...nums]);
      return;
    }

    for (let i = left; i < nums.length; i++) {
      if (i !== left) {
        [nums[i], nums[left]] = [nums[left], nums[i]];
      }

      traversal(left + 1);

      if (i !== left) {
        [nums[i], nums[left]] = [nums[left], nums[i]];
      }
    }
  };

  traversal(0);
  return res;
};

// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([1, 2, 3]));
