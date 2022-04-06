function Search(theArray, key) {
  for (let i = 0; i < theArray.length; i++) {
    if (theArray[i] === key) {
      return i;
    }
  }
  return -1;
}

// const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Search(ar, 3));
// console.log(Search(ar, 12));
// console.log(Search(ar, 5));
