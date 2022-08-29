/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  /**
   * @type {Map<number, number>}
   */
  const map = new Map();
  for (let item of barcodes) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  const list = Array.from(map).sort((x, y) => y[1] - x[1]);

  const max = list.shift();
  /**
   * @type {number[][]}
   */
  const codes = new Array(max[1]);
  for (let i = 0; i < codes.length; i++) {
    codes[i] = [max[0]];
  }

  let i = 0;
  while (list.length) {
    const [code, count] = list.shift();
    for (let j = 0; j < count; j++) {
      codes[i].push(code);
      i = (i + 1) % codes.length;
    }
  }

  return codes.shift().concat(...codes);
};

// [2,1,2,1,2,1]
console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]));

// [1,3,1,3,2,1,2,1]
console.log(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]));

// [5,7,5,7,5,7,5,8,7,8]
console.log(rearrangeBarcodes([7, 7, 7, 8, 5, 7, 5, 5, 5, 8]));
