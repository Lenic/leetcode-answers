/**
 * @param {number[]} stocksProfit
 * @param {number} target
 */
function stockPairs(stocksProfit, target) {
  debugger;
  let res = 0;
  if (stocksProfit.length < 2) return res;

  stocksProfit.sort((x, y) => x - y);

  let left = 0;
  let right = stocksProfit.length - 1;
  while (left < right) {
    const sum = stocksProfit[left] + stocksProfit[right];
    if (sum > target) {
      while (left < right && stocksProfit[right - 1] === stocksProfit[right]) right -= 1;
      right -= 1;
    } else if (sum < target) {
      while (left < right && stocksProfit[left + 1] === stocksProfit[left]) left += 1;
      left += 1;
    } else {
      res += 1;

      while (left < right && stocksProfit[right - 1] === stocksProfit[right]) right -= 1;
      right -= 1;

      while (left < right && stocksProfit[left + 1] === stocksProfit[left]) left += 1;
      left += 1;
    }
  }

  return res;
}

// 3
console.log(stockPairs([5, 7, 9, 13, 11, 6, 6, 3, 3], 12));
