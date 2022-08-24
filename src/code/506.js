import Heap from './heap';

const scores = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  /**
   * @type {number[]}
   */
  const indexes = new Array(score.length);
  for (let i = 0; i < score.length; i++) {
    indexes[i] = i;
  }

  const { down } = new Heap(indexes, (x, y) => score[y] - score[x]);

  /**
   * @type {string[]}
   */
  const res = new Array(score.length);
  for (let i = 0; indexes.length; i++) {
    const index = indexes[0];
    res[index] = scores[i] || `${i + 1}`;

    const last = indexes.pop();
    if (indexes.length) {
      indexes[0] = last;
      down(0);
    }
  }
  return res;
};

// ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'];
console.log(findRelativeRanks([10, 3, 8, 9, 4]));

// ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'];
console.log(findRelativeRanks([5, 4, 3, 2, 1]));
