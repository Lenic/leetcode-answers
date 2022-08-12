/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);

  const stack = [];
  temperatures.forEach((x, i) => {
    while (stack.length && temperatures[stack[stack.length - 1]] < x) {
      const topIndex = stack.pop();

      res[topIndex] = i - topIndex;
    }
    stack.push(i);
  });

  return res;
};

// [1,1,4,2,1,1,0,0]
//                             0,  1,  2,  3,  4,  5,  6,  7
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// [1,1,1,0]
//                             0,  1,  2,  3
// console.log(dailyTemperatures([30, 40, 50, 60]));

// [1,1,0]
//                             0,  1,  2
console.log(dailyTemperatures([30, 60, 90]));
