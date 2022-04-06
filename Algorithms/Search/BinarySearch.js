/* Binary Search: https://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 */

function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

/* ---------------------------------- Test ---------------------------------- */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const stringArr = [
//   'Alpha',
//   'Bravo',
//   'Charlie',
//   'Delta',
//   'Echo',
//   'Foxtrot',
//   'Golf',
//   'Hotel',
//   'India',
//   'Juliet',
//   'Kilo',
//   'Lima',
//   'Mike',
//   'November',
// ]
