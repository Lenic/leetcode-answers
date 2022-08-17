/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let res = -1;

  const len = haystack.length - needle.length;
  for (let i = 0; i <= len; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1;
      while (haystack[i + j] === needle[j] && j < needle.length) j += 1;

      if (j === needle.length) {
        res = i;
        break;
      }
    }
  }

  return res;
};

// 2
console.log(strStr('hello', 'll'));

// -1
console.log(strStr('aaaaa', 'bba'));

// 0
console.log(strStr('a', 'a'));

// 2
console.log(strStr('abc', 'c'));
