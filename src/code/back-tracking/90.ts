function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((x, y) => x - y);

  const res: number[][] = [];
  const visited: boolean[] = new Array(nums.length).fill(false);

  const traversal = (ans: number[], index: number, level: number) => {
    if (level === nums.length) {
      res.push(ans.slice());
      return;
    }

    if (visited[index] || (index > 0 && nums[index - 1] === nums[index] && !visited[index - 1])) {
      traversal(ans, index + 1, level + 1);
      return;
    }

    ans.push(nums[index]);
    visited[index] = true;

    traversal(ans, index + 1, level + 1);

    ans.pop();
    visited[index] = false;

    traversal(ans, index + 1, level + 1);
  };

  traversal([], 0, 0);
  return res;
}

// [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
console.log(subsetsWithDup([4, 4, 4, 1, 4]));

// [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([1, 2, 2]));
