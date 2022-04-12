const sieveOfEratosthenes = (n) => {
  /*
   * Calculates prime numbers till a number n
   * :param n: Number up to which to calculate primes
   * :return: A boolean list containing only primes
   */
  const primes = new Array(n + 1);
  primes.fill(true); // set all as true initially
  primes[0] = primes[1] = false; // Handling case for 0 and 1
  const sqrtn = Math.ceil(Math.sqrt(n));
  for (let i = 2; i <= sqrtn; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes;
};
