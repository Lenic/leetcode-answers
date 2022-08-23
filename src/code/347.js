import Heap from './heap';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    map.set(item, (map.get(item) || 0) + 1);
  }

  const list = [];
  map.forEach((val, key) => {
    list.push({ key, val });
  });

  const res = new Array(k);
  const { down, setSize } = new Heap(list, list.length, (x, y) => y.val - x.val);
  for (let i = 0; i < k; i++) {
    res[i] = list[0].key;

    list[0] = list.pop();
    setSize(list.length);
    down(0);
  }
  return res;
};

// [1,2]
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
