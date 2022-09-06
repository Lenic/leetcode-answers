function grayCode(n: number): number[] {
  const max = (1 << n) - 1;
  const ans: number[][] = [new Array(n).fill(0)];

  const set = new Set<string>();
  set.add(ans[0].join(''));

  const traversal = (bytes: number[], previous: number, level: number): boolean => {
    if (level === max) {
      let count = 0;
      for (let item of bytes) {
        if (item === 1) {
          count += 1;
          if (count > 1) return false;
        }
      }
      return count === 1;
    }

    const swap = (i: number) => (bytes[i] = bytes[i] === 1 ? 0 : 1);

    for (let i = 0; i < n; i++) {
      if (i === previous) continue;

      swap(i);
      ans.push(bytes.slice());

      const str = bytes.join('');
      if (set.has(str)) {
        swap(i);
        ans.pop();

        continue;
      }
      set.add(str);

      if (traversal(bytes, i, level + 1)) return true;

      ans.pop();
      set.delete(str);
      bytes[i] = bytes[i] === 1 ? 0 : 1;
    }

    return false;
  };

  traversal(ans[0].slice(), -1, 0);

  const res: number[] = [];
  for (let item of ans) {
    res.push(parseInt(item.join(''), 2));
  }
  return res;
}

// [0,1,3,2,6,7,5,4]
console.log(grayCode(3));

// [0,1]
console.log(grayCode(1));

// [0,1, 3, 2]
console.log(grayCode(2));
