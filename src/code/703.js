import Heap from './heap';

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;

  /**
   * @type {number[]}
   */
  this.list = [];

  const min = Math.min(k, nums.length);
  for (let i = 0; i < min; i++) {
    this.list.push(nums[i]);
  }

  /**
   * @type {Heap<number>}
   */
  this.heap = new Heap(this.list, (x, y) => x - y);
  for (let i = k; i < nums.length; i++) {
    const num = nums[i];
    if (num > this.list[0]) {
      this.list[0] = num;
      this.heap.down(0);
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.list.length < this.k) {
    this.list.push(val);
    this.heap.up(this.list.length - 1);
  } else if (val > this.list[0]) {
    this.list[0] = val;
    this.heap.down(0);
  }

  return this.list[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * @param {string[]} names
 * @param {any[]} values
 */
const polyfill = (names, values) => {
  let obj;

  const res = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const value = values[i];

    switch (name) {
      case 'KthLargest':
        obj = new KthLargest(value[0], value[1]);
        res.push(null);
        break;
      case 'add':
        res.push(obj.add(value[0]));
        break;
      default:
        break;
    }
  }
  console.log(res);
};

// [null, 4, 5, 5, 8, 8]
polyfill(['KthLargest', 'add', 'add', 'add', 'add', 'add'], [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]);

// [null,-3,-2,-2,0,4]
polyfill(['KthLargest', 'add', 'add', 'add', 'add', 'add'], [[1, []], [-3], [-2], [-4], [0], [4]]);

// [null,-1,0,0,0,1]
polyfill(['KthLargest', 'add', 'add', 'add', 'add', 'add'], [[2, [0]], [-1], [1], [-2], [-4], [3]]);
