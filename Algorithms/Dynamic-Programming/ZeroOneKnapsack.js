/**
 * A Dynamic Programming based solution for calculating Zero One Knapsack
 * https://en.wikipedia.org/wiki/Knapsack_problem
 */

const zeroOneKnapsack = (arr, n, cap, cache) => {
  if (cap === 0 || n === 0) {
    cache[n][cap] = 0;
    return cache[n][cap];
  }
  if (cache[n][cap] !== -1) {
    return cache[n][cap];
  }
  if (arr[n - 1][0] <= cap) {
    cache[n][cap] = Math.max(
      arr[n - 1][1] + zeroOneKnapsack(arr, n - 1, cap - arr[n - 1][0], cache),
      zeroOneKnapsack(arr, n - 1, cap, cache)
    );
    return cache[n][cap];
  } else {
    cache[n][cap] = zeroOneKnapsack(arr, n - 1, cap, cache);
    return cache[n][cap];
  }
};
