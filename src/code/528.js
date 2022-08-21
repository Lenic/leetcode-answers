/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.nums = w;

  this.sums = new Array(w.length + 1);
  this.sums[0] = 0;
  for (let i = 0; i < w.length; i++) {
    this.sums[i + 1] = this.sums[i] + w[i];
  }
};

/**
 * @param {number} k
 * @return {number}
 */
Solution.prototype.binarySearch = function (k) {
  let left = 0;
  let right = this.sums.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (this.sums[mid] > k) {
      right = mid;
    } else if (this.sums[mid] < k) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return left;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const value = Math.floor(Math.random() * this.sums[this.sums.length - 1]);
  return this.binarySearch(value + 1) - 1;
};

/**
 * @param {number[]} nums
 * @param {number} n
 */
const polyfill = (nums, n) => {
  var obj = new Solution(nums);

  let res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = obj.pickIndex();
  }

  console.log(res);
};

polyfill([1], 2);
polyfill([1, 3], 5);
