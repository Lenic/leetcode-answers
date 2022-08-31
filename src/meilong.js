/**
 * @param {number[]} nums
 */
const swapTree = (nums) => {
  if (nums.length < 2) return nums;

  let count = 1;

  /**
   * @param {number} index
   */
  const swap = (levelIndex) => {
    const levelCount = 2 * levelIndex;

    let beginIndex = count;
    let endIndex = beginIndex + levelCount - 1;
    while (beginIndex < endIndex) {
      [nums[beginIndex], nums[endIndex]] = [nums[endIndex], nums[beginIndex]];
      beginIndex += 1;
      endIndex -= 1;
    }

    count += levelCount;
    if (count < nums.length) {
      swap(levelIndex + 1);
    }
  };

  swap(1);

  return nums;
};

// 34 33 25 55 14 23 12
console.log(swapTree([34, 25, 33, 12, 23, 14, 55]));
