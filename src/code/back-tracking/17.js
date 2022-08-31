/**
 * @type {Record<string, string>}
 */
const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];
  if (!digits.length) return res;

  /**
   * @param {number} index
   * @param {string[]} previousSymbols
   */
  const backTracking = (index, previousSymbols) => {
    if (index >= digits.length) {
      res.push(previousSymbols.join(''));
      return;
    }

    const symbols = map[digits[index]];
    for (let i = 0; i < symbols.length; i++) {
      previousSymbols.push(symbols[i]);
      backTracking(index + 1, previousSymbols);
      previousSymbols.pop();
    }
  };
  backTracking(0, []);

  return res;
};

// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('23'));
