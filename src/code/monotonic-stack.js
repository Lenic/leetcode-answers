const sources = [5, 3, 1, 2, 4];

/**
 * @param {number[]} list
 * @return {number[]}
 *
 */
const findFirstGreater = (list) => {
  const ans = new Array(list.length).fill(-1);

  const stack = [];

  for (let i = 0; i < list.length; i++) {
    const num = list[i];

    while (stack.length && list[stack[stack.length - 1]] < num) {
      const x = stack.pop();
      ans[x] = i - x;
    }

    stack.push(i);
  }

  return ans;
};

// output [-1, 3, 1, 1, -1]
console.log(findFirstGreater(sources));
