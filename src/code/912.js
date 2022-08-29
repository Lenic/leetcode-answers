/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  /**
   * @param {number} left
   * @param {number} right
   */
  const sort = (left, right) => {
    if (left >= right) return;

    const random = Math.floor(Math.random() * (right - left)) + left;
    const pivot = nums[random];
    [nums[left], nums[random]] = [nums[random], nums[left]];

    let i = left;
    let j = right;
    while (i < j) {
      while (i < j && nums[j] > pivot) j -= 1;
      if (i < j) {
        nums[i] = nums[j];
        i += 1;
      }

      while (i < j && nums[i] <= pivot) i += 1;
      if (i < j) {
        nums[j] = nums[i];
        j -= 1;
      }
    }
    nums[i] = pivot;

    sort(left, i - 1);
    sort(i + 1, right);
  };

  sort(0, nums.length - 1);
  return nums;
};

// [1,2,3,5]
console.log(sortArray([5, 2, 3, 1]));

// [0,0,1,1,2,5]
console.log(sortArray([5, 1, 1, 2, 0, 0]));
