/**
 * @param {number[]} list
 * @param {number} val
 * @return {number}
 */
const binarySearch = (list, val) => {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (list[mid] >= val) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let right = binarySearch(arr, x);
  let left = right - 1;
  while (k > 0) {
    k -= 1;

    if (left < 0) {
      right += 1;
    } else if (right >= arr.length) {
      left -= 1;
    } else if (x - arr[left] > arr[right] - x) {
      right += 1;
    } else {
      left -= 1;
    }
  }

  const res = [];
  for (let i = left + 1; i < right; i++) {
    res.push(arr[i]);
  }
  return res;
};

// [1, 2, 3, 4];
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));

// [2, 3, 4, 5];
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 4));

// [2, 3, 4, 5];
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 5));

// [1, 2, 3, 4];
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 1));
