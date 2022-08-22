/**
 * @template T
 * @param {T[]} list
 * @param {number} length
 * @param {(x: T, y: T) => number} comparer
 * @return {Heap}
 */
class Heap {
  constructor(list, length, comparer) {
    this.list = list;
    this.comparer = comparer;
    this.length = length;

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.setSize = this.setSize.bind(this);

    for (let i = (length - 2) >> 1; i >= 0; i--) {
      this.down(i);
    }
  }
  /**
   * @param {number} index
   */
  down(index) {
    const { list, comparer, length } = this;

    const left = index * 2 + 1;
    const right = left + 1;

    let targetIndex = index;
    if (left < length && comparer(list[targetIndex], list[left]) > 0) targetIndex = left;
    if (right < length && comparer(list[targetIndex], list[right]) > 0) targetIndex = right;

    if (targetIndex === index) return;

    [list[targetIndex], list[index]] = [list[index], list[targetIndex]];
    this.down(targetIndex);
  }
  /**
   * @param {number} index
   */
  up(index) {
    if (index === 0) return;

    const { list, comparer } = this;

    const parentIndex = (index - 1) >> 1;
    if (comparer(list[parentIndex], list[index]) > 0) {
      [list[parentIndex], list[index]] = [list[index], list[parentIndex]];
    }

    this.up(parentIndex);
  }
  /**
   * @param {number} n
   */
  setSize(n) {
    this.length = n;
  }
}

export default Heap;
