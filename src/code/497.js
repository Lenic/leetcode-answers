/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.rects = rects;

  this.list = new Array(rects.length + 1);
  this.list[0] = 0;

  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i];
    this.list[i + 1] = this.list[i] + (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
Solution.prototype.binarySearch = function (k) {
  let left = 0;
  let right = this.list.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (this.list[mid] >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  const value = Math.floor(Math.random() * this.list[this.list.length - 1]);
  /**
   * 这里是因为边界问题必须 `+1`
   *
   * 参考下面的数据：
   *
   * ```json
   * [
   *   [0, 0, 1, 1],
   *   [2, 2, 3, 3],
   * ]
   * ```
   *
   * 可以知道第一个矩形区域有四个点，第二个矩形区域有四个点，所以构造函数时的数组为 `[0, 4, 8]`。需要注意的是这里存储的是数量，不是索引。
   * 如果自动生成的数值是 `4`，即根据 `random` 函数不能生成数字 1 来算，这里生成的实际是**索引**，因为生成的最大值比数量小 `1`。
   * 由此推算，索引和数量的关系是 `索引 + 1 = 数量`，所以此处要查询数量就需要 `+1`。
   *
   * 继续对数字 `4` 说明：索引是 `4`，所以就是第 5 个元素，按照 `[0, 4, 8]` 来看是在第二个矩形中。
   * 如果按照数字查找，就必然会落在第一个矩形中，根据规则计算出来的点，就必然落在了矩形区域的外面。
   */
  const index = this.binarySearch(value + 1) - 1;

  const rect = this.rects[index];
  const current = value - this.list[index];

  const width = rect[2] - rect[0] + 1;
  const rows = Math.floor(current / width);
  const cols = current % width;

  return [rect[0] + cols, rect[1] + rows];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

/**
 * @param {number[][]} rects
 * @param {number} n
 */
const polyfill = (rects, n) => {
  const obj = new Solution(rects);

  let res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = obj.pick();
  }

  console.log(res);
};

// polyfill(
//   [
//     [-2, -2, 1, 1],
//     [2, 2, 4, 6],
//   ],
//   4
// );

polyfill(
  [
    [0, 0, 1, 1],
    [2, 2, 3, 3],
  ],
  1
);
