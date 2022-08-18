/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  if (height.length === 1) return res;

  let left = 0;
  let right = height.length - 1;
  let leftHeight = height[left];
  let rightHeight = height[right];

  while (left < right) {
    if (leftHeight < rightHeight) {
      left += 1;
      if (leftHeight > height[left]) {
        res += leftHeight - height[left];
      } else {
        leftHeight = height[left];
      }
    } else {
      right -= 1;
      if (height[right] < rightHeight) {
        res += rightHeight - height[right];
      } else {
        rightHeight = height[right];
      }
    }
  }

  return res;
};

// 23
console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]));

// 6
//                0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// 9
//                0, 1, 2, 3, 4, 5
console.log(trap([4, 2, 0, 3, 2, 5]));
