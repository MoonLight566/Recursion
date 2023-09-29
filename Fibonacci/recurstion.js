function recursion(num, array = [0, 1]) {
  if (array.length >= num) return array;
  return recursion(num, [
    ...array,
    array[array.length - 2] + array[array.length - 1],
  ]);
}
