/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let leftIndex = 0;
  let rightIndex = 0;

  const list = new Set();

  let res = 0;
  while (rightIndex < s.length) {
    for (; rightIndex < s.length && !list.has(s[rightIndex]); rightIndex++) {
      list.add(s[rightIndex]);
    }
    res = Math.max(res, list.size);

    if (rightIndex !== s.length) {
      for (; s[leftIndex] !== s[rightIndex]; leftIndex++) {
        list.delete(s[leftIndex]);
      }
      leftIndex += 1;
    }
    rightIndex += 1;
  }
  return res;
};

// 1
console.log(lengthOfLongestSubstring('bbbb'));

// 3
console.log(lengthOfLongestSubstring('pwwkew'));
