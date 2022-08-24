import Heap from './heap';

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  /**
   * @type {{s:string,count:number}[]}
   */
  const list = [];
  map.forEach((value, key) => list.push({ s: key, count: value }));
  const { down } = new Heap(list, (x, y) => y.count - x.count);

  const res = [];
  while (list.length) {
    const { s, count } = list[0];
    for (let i = 0; i < count; i++) {
      res.push(s);
    }

    const last = list.pop();
    if (list.length) {
      list[0] = last;
      down(0);
    }
  }
  return res.join('');
};

// eert
console.log(frequencySort('tree'));
