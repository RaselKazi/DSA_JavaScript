/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/prime_factors.py
*/

const PrimeFactors = (n) => {
  const prime = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      prime.push(i);
      n = Math.floor(n / i);
    }
  }
  if (n > 1) {
    prime.push(n);
  }
  return prime;
};
