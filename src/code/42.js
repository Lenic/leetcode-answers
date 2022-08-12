/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  let res = 0;

  const stack = [];
  height.forEach((x, i) => {
    while (stack.length && height[stack[stack.length - 1]] < x) {
      const topIndex = stack.pop();

      if (!stack.length) break;

      const leftIndex = stack[stack.length - 1];
      const currentHeight = Math.min(height[leftIndex], height[i]) - height[topIndex];

      res += (i - leftIndex - 1) * currentHeight;
    }

    stack.push(i);
  });

  return res;
};

// 6
//                0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// 9
//                0, 1, 2, 3, 4, 5
console.log(trap([4, 2, 0, 3, 2, 5]));
