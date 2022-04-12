/* Kadane's algorithm is one of the most efficient ways to
 * calculate the maximum contiguous subarray sum for a given array.
 * Reference article :- https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 */

export function kadaneAlgo(array) {
  let cumulativeSum = 0;
  let maxSum = 0; // maxSum has the least possible value
  for (let i = 0; i < array.length; i++) {
    cumulativeSum = cumulativeSum + array[i];
    if (maxSum < cumulativeSum) {
      maxSum = cumulativeSum;
    } else if (cumulativeSum < 0) {
      cumulativeSum = 0;
    }
  }
  return maxSum;
}
