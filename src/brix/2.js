/**
 * @param {string} s
 */
function getMin(s) {
  debugger;
  let res = 0;
  const stack = [];

  let i = 0;
  while (i < s.length) {
    while (s[i] === '(') {
      stack.push('(');
      i += 1;
    }

    let count = 0;
    while (stack.length && s[i] === ')') {
      stack.pop();
      i += 1;
    }

    if (stack.length && s[i] === '(') continue;

    while (stack.length && s[i] === undefined) {
      stack.pop();
      count += 1;
    }

    while (s[i] === ')') {
      i += 1;
      count += 1;
    }

    res += count;
  }

  return res;
}

// 1
// console.log(getMin('(()))'));

// 4
// console.log(getMin('))(('));

// 1
// console.log(getMin('(()()'));

// 0
// console.log(getMin('(()())'));

// 1
console.log(getMin('(()()))'));
