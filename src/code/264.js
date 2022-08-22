import Heap from './heap';

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const list = [1];
  const { down, setSize, up } = new Heap(list, 1, (x, y) => x - y);

  const max = n - 1;
  const set = new Set();
  const multiples = [2, 3, 5];

  for (let i = 0; i < max; i++) {
    const base = list[0];
    let replaced = false;
    for (let j = 0; j < multiples.length; j++) {
      const item = multiples[j] * base;
      if (!set.has(item)) {
        set.add(item);
        if (replaced) {
          list.push(item);
          setSize(list.length);
          up(list.length - 1);
        } else {
          list[0] = item;
          down(0);
          replaced = true;
        }
      }
    }
    if (!replaced) {
      list[0] = list.pop();
      setSize(list.length);
      down(0);
    }
  }

  return list[0];
};

// 12
console.log(nthUglyNumber(10));

// 1
console.log(nthUglyNumber(1));
