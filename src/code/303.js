/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;

  this.list = new Array(nums.length + 1);
  this.list[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    this.list[i + 1] = this.list[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.list[right + 1] - this.list[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/**
 * @param {number[]} nums
 * @param {number[][]} segments
 * @return {number[]}
 */
const polyfill = (nums, segments) => {
  const obj = new NumArray(nums);
  return segments.map(([left, right]) => obj.sumRange(left, right));
};

// [1, -1, -3]
console.log(
  polyfill(
    [-2, 0, 3, -5, 2, -1],
    [
      [0, 2],
      [2, 5],
      [0, 5],
    ]
  )
);
