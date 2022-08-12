/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const map = {};
  const stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    const item = nums2[i];

    while (stack.length && stack[stack.length - 1] < item) {
      stack.pop();
    }

    map[item] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(item);
  }

  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(map[nums1[i]]);
  }

  return res;
};

// [-1, 3, -1]
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
