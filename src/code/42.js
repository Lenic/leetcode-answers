/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  if (height.length < 2) return 0;

  const lr = height.reduceRight((stack, x, i) => {
    if (x === 0) return stack;

    while (stack.length && height[stack[stack.length - 1]] < x) {
      stack.pop();
    }
    stack.push(i);

    return stack;
  }, []);

  const rl = [];
  for (let i = lr.length ? lr[0] : 0; i < height.length; i++) {
    const item = height[i];
    if (item === 0) continue;

    while (rl.length && height[rl[rl.length - 1]] <= item) {
      rl.pop();
    }
    rl.push(i);
  }

  let res = 0;
  lr.reduceRight((from, to) => {
    const currentHeight = Math.min(height[from], height[to]);
    for (let i = from + 1; i < to; i++) {
      res += currentHeight - height[i];
    }
    return to;
  });

  rl.reduce((from, to) => {
    const currentHeight = Math.min(height[from], height[to]);
    for (let i = from + 1; i < to; i++) {
      res += currentHeight - height[i];
    }
    return to;
  });

  return res;
};

// 6
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
