/**
 * @param {number} n
 */
function isPrime(n) {
  debugger;
  if (n < 4) return 1;

  const half = n / 2;
  for (let i = 2; i <= half; i++) {
    if (n % i === 0) return i;
  }

  return 1;
}

// 2
console.log(isPrime(4));

// 4051
console.log(isPrime(37961921));

// 593
console.log(isPrime(523619));

// 16141
console.log(isPrime(1072843847));
