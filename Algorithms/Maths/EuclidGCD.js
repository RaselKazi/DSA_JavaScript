/*
    Problem statement and Explanation : https://en.wikipedia.org/wiki/Euclidean_algorithm
    In this method, we have followed the iterative approach to first
    find a minimum of both numbers and go to the next step.
*/

function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}
