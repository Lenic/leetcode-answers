/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  /**
   * @type {number[]}
   */
  const flights = new Array(n + 1).fill(0);

  for (let [from, to, seats] of bookings) {
    flights[from] += seats;

    const end = to + 1;
    if (end < flights.length) {
      flights[end] -= seats;
    }
  }

  const res = [];
  let previous = 0;
  for (let i = 1; i < flights.length; i++) {
    const current = previous + flights[i];
    res.push(current);
    previous = current;
  }
  return res;
};

// [10,55,45,25,25]
console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5
  )
);
