/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  debugger;
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let res = '';
  let index = 0;
  let length = Math.min(...strs.map((v) => v.length));
  for (let i = 0; i < length; i++) {
    const first = strs[0][i];
    if (strs.every((v) => v[index] === first)) {
      res += first;
      index += 1;
    } else {
      break;
    }
  }

  return res;
};

// "fl"
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// ""
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
