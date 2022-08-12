const beginCodeValue = 'a'.charCodeAt(0);
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const visitedLetters = new Array(26);
  const letterCounts = new Array(26);

  for (let i = 0; i < 26; i++) {
    visitedLetters[i] = false;
    letterCounts[i] = 0;
  }

  for (let i = 0; i < s.length; i++) {
    letterCounts[s.charCodeAt(i) - beginCodeValue] += 1;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const letterIndex = s.charCodeAt(i) - beginCodeValue;
    if (!visitedLetters[letterIndex]) {
      const item = s[i];

      while (stack.length && stack[stack.length - 1] > item) {
        const topLetterIndex = stack[stack.length - 1].charCodeAt(0) - beginCodeValue;
        if (letterCounts[topLetterIndex] > 0) {
          stack.pop();

          visitedLetters[topLetterIndex] = false;
        } else {
          break;
        }
      }

      stack.push(item);
      visitedLetters[letterIndex] = true;
    }
    letterCounts[letterIndex] -= 1;
  }

  return stack.join('');
};

// abc
//                                  01234
console.log(removeDuplicateLetters('bcabc'));

// acdb
//                                  01234567
console.log(removeDuplicateLetters('cbacdcbc'));
