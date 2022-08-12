/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [];

  const left = new Array(heights.length);
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  stack = [];
  const right = new Array(heights.length);
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    right[i] = stack.length ? stack[stack.length - 1] : heights.length;
    stack.push(i);
  }

  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    res = Math.max(res, (right[i] - left[i] - 1) * heights[i]);
  }

  return res;
};

// 10
//                                0, 1, 2, 3, 4, 5,
// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

// 2
//                                0, 1
console.log(largestRectangleArea([1, 1]));
