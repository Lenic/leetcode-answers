/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let max = 0;
  const map = new Map();
  for (let i = 0; i < tasks.length; i++) {
    const count = (map.get(tasks[i]) || 0) + 1;
    map.set(tasks[i], count);

    max = Math.max(max, count);
  }

  let maxCount = 0;
  map.forEach((count) => {
    if (count === max) {
      maxCount += 1;
    }
  });

  return Math.max((n + 1) * (max - 1) + maxCount, tasks.length);
};

// 8
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2));

// 6
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0));

// 12
console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2));
