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
   * @param {number[]} ans
   * @param {Set<number>} list
   */
  const traversal = (ans, list) => {
    if (ans.length === nums.length) {
      res.push([...ans]);
      return;
    }

    for (let item of nums) {
      if (list.has(item)) continue;

      ans.push(item);
      list.add(item);
      traversal(ans, list);
      ans.pop();
      list.delete(item);
    }
  };

  traversal([], new Set());
  return res;
};

// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([1, 2, 3]));
