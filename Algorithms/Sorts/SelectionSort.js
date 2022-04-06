/* The selection sort algorithm sorts an array by repeatedly finding the minimum element

 */

const selectionSort = (list) => {
  if (!Array.isArray(list)) {
    throw new TypeError("Given input is not an array");
  }
  const items = [...list]; // We don't want to modify the original array
  const length = items.length;
  for (let i = 0; i < length - 1; i++) {
    if (typeof items[i] !== "number") {
      throw new TypeError("One of the items in your array is not a number");
    }

    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [items[i], items[min]] = [items[min], items[i]];
    }
  }
  return items;
};
