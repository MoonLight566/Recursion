function mergeLeftRight(array) {
  if (array.length === 0) return "please insert array with value";
  if (array.length === 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);
  return merge(mergeLeftRight(left), mergeLeftRight(right));
}

function merge(leftArray, rightArray) {
  const last = [];
  let iLeft = 0;
  let iRight = 0;
  while (iLeft < leftArray.length && iRight < rightArray.length) {
    if (leftArray[iLeft] < rightArray[iRight]) {
      last.push(leftArray[iLeft]);
      iLeft++;
    } else {
      last.push(rightArray[iRight]);
      iRight++;
    }
  }
  while (iLeft < leftArray.length) {
    last.push(leftArray[iLeft]);
    iLeft++;
  }
  while (iRight < rightArray.length) {
    last.push(rightArray[iRight]);
    iRight++;
  }
  return last;
}
