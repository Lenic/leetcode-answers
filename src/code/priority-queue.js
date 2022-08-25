import Heap from './heap';

/**
 * @template T
 */
class PriorityQueue {
  /**
   * @param {(x: T, y: T) => number} comparer
   */
  constructor(comparer) {
    /**
     * @type {T[]}
     */
    this.list = [];
    this.heap = new Heap(this.list, comparer);

    this.size = this.size.bind(this);
    this.peek = this.peek.bind(this);
    this.poll = this.poll.bind(this);
    this.offer = this.offer.bind(this);
  }

  /**
   * @returns {T | undefined}
   */
  isEmpty() {
    return !this.list.length;
  }

  /**
   * @returns {number}
   */
  size() {
    return this.list.length;
  }

  /**
   * @returns {T | undefined}
   */
  peek() {
    if (this.list.length) {
      return this.list[0];
    } else {
      return undefined;
    }
  }

  /**
   * @param {T} val
   * @returns {undefined}
   */
  offer(val) {
    this.list.push(val);
    this.heap.up(this.list.length - 1);
  }

  /**
   * @returns {T | undefined}
   */
  poll() {
    if (this.list.length) {
      const res = this.list[0];

      const last = this.list.pop();
      if (this.list.length) {
        this.list[0] = last;
        this.heap.down(0);
      }

      return res;
    } else {
      return undefined;
    }
  }
}

export default PriorityQueue;
