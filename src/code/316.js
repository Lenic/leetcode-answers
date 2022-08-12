/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const visitedLetters = {};
  const letterCounts = {};

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    letterCounts[item] = (letterCounts[item] || 0) + 1;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (!visitedLetters[item]) {
      while (stack.length && stack[stack.length - 1] > item) {
        const topLetter = stack[stack.length - 1];
        if (letterCounts[topLetter] > 0) {
          stack.pop();
          visitedLetters[topLetter] = false;
        } else {
          break;
        }
      }

      stack.push(item);
      visitedLetters[item] = true;
    }
    letterCounts[item] -= 1;
  }

  return stack.join('');
};

// abc
//                                  01234
console.log(removeDuplicateLetters('bcabc'));

// acdb
//                                  01234567
console.log(removeDuplicateLetters('cbacdcbc'));
