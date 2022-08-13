/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return '';

  let res = 0;

  let leftIndex = 0;
  let rightIndex = 0;

  const list = new Set();

  for (; rightIndex < s.length; rightIndex++) {
    const item = s[rightIndex];

    if (list.has(item)) {
      res = Math.max(res, list.size);

      while (s[leftIndex] !== item) {
        list.delete(s[leftIndex]);
        leftIndex += 1;
      }

      leftIndex += 1;
    } else {
      list.add(item);
    }
  }
  res = Math.max(res, list.size);

  return res;
};

// 1
// console.log(lengthOfLongestSubstring('bbbb'));

// 3
console.log(lengthOfLongestSubstring('pwwkew'));
