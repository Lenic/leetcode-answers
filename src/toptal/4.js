/**
 * @param {number[]} list
 * @param {number} target
 */
const solution = (list, target) => {
  const resList = [];

  for (let i = 0; i < list.length; i++) {
    let sum = 0;
    if (i > 0 && list[i - 1] === list[i]) continue;

    for (let j = i; j < list.length; j++) {
      sum += list[j];
      if (sum === target * (j - i + 1)) {
        resList.push([i, j]);
      }
    }
  }

  return resList.length;
};

// 3
console.log(solution([2, 1, 3], 2));

// 2
console.log(solution([0, 4, 3, -1], 2));

// 0
console.log(solution([2, 1, 4], 3));
