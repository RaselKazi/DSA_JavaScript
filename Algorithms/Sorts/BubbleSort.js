/* Bubble Sort is an algorithm to sort an array. It
 *  compares adjacent element and swaps their position
 *  The big O on bubble sort in worst and best case is O(N^2).
 *  Not efficient.
 *  Somehow if the array is sorted or nearly sorted then we can optimize bubble sort by adding a flag.
 *  Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
 *  Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort
 */

function BubbleSort(arr) {
  let swap = true;

  while (swap) {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
  }

  return arr;
}
