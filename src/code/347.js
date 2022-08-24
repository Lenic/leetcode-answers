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
  const { down, up } = new Heap(list, (x, y) => x.val - y.val);
  map.forEach((val, key) => {
    if (list.length < k) {
      const last = list.length;
      list.push({ key, val });
      up(last);
    } else if (list[0].val < val) {
      list[0] = { key, val };
      down(0);
    }
  });
  return list.map((v) => v.key);
};

// [0]
console.log(topKFrequent([3, 0, 1, 0], 1));

// [1,2]
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
