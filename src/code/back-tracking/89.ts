function grayCode(n: number): number[] {
  const max = 1 << n;

  const res: number[] = [];
  for (let i = 0; i < max; i++) {
    res.push((i >> 1) ^ i);
  }

  return res;
}

// [0,1,3,2,6,7,5,4]
console.log(grayCode(3));

// [0,1]
console.log(grayCode(1));

// [0,1, 3, 2]
console.log(grayCode(2));
