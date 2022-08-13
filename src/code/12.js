const predefined = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']];

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let index = 0;
  let current = num;

  const stack = [];

  while (current > 0) {
    let remainder = current % 10;
    current = Math.floor(current / 10);

    const symbols = predefined[index];
    index += 1;

    const isHalfMore = Math.floor(remainder / 5) === 1;
    if (isHalfMore) {
      remainder = remainder % 5;
    }

    if (remainder < 4) {
      for (let i = 0; i < remainder; i++) {
        stack.push(symbols[0]);
      }

      if (isHalfMore) {
        stack.push(symbols[1]);
      }
    } else {
      if (isHalfMore) {
        stack.push(symbols[2]);
      } else {
        stack.push(symbols[1]);
      }

      if (remainder === 4) {
        stack.push(symbols[0]);
      }
    }
  }

  let res = '';
  for (let i = stack.length - 1; i >= 0; i--) {
    res += stack[i];
  }
  return res;
};

// 'III'
console.log(intToRoman(3));

// 'IV'
console.log(intToRoman(4));

// 'LVIII'
console.log(intToRoman(58));

// 'MCMXCIV'
console.log(intToRoman(1994));
