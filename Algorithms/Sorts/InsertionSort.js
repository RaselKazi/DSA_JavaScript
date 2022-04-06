/* In insertion sort, we divide the initial unsorted array into two parts;
 * sorted part and unsorted part. Initially the sorted part just has one
 * element (Array of only 1 element is a sorted array). We then pick up
 * element one by one from unsorted part; insert into the sorted part at
 * the correct position and expand sorted part one element at a time.
 */
function insertionSort(array) {
  const length = array.length;
  if (length < 2) return array;

  for (let i = 1; i < length; i++) {
    const currentItem = array[i];
    let j = i - 1;

    // While j >= 0 and previous element is greater than current element
    while (j >= 0 && array[j] > currentItem) {
      array[j + 1] = array[j];
      j--;
    }
    // Insert currentItem number at the correct position in sorted part.
    array[j + 1] = currentItem;
  }
  return array;
}
