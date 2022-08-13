/**
 * @param {string} s1
 * @param {string} s1
 * @return {string}
 */
const prefixInTwice = (s1, s2) => {
  const length = Math.min(s1.length, s2.length);

  let i = 0;
  for (; i < length; i++) {
    if (s1[i] !== s2[i]) {
      break;
    }
  }

  return s1.slice(0, i);
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = prefixInTwice(prefix, strs[i]);
    if (!prefix) {
      break;
    }
  }
  return prefix;
};

// "fl"
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// ""
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
