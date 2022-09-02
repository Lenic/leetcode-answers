/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
   * @type {string[]}
   */
  const res = [];
  /**
   * @param {string[]} ans
   * @param {number} left
   * @param {number} right
   * @returns {undefined}
   */
  const traversal = (ans, left, right) => {
    if (left === 0 && right === 0) {
      res.push(ans.join(''));
      return;
    }

    if (left === right) {
      ans.push('(');
      traversal(ans, left - 1, right);
      ans.pop();
    } else if (left < right) {
      if (left > 0) {
        ans.push('(');
        traversal(ans, left - 1, right);
        ans.pop();
      }
      ans.push(')');
      traversal(ans, left, right - 1);
      ans.pop();
    }
  };

  traversal([], n, n);
  return res;
};

// ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(3));
