/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;

  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    res = Math.max(res, (j - i) * Math.min(height[i], height[j]));
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return res;
};

// 49
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// 1
console.log(maxArea([1, 1]));
