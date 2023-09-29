function iteration(num) {
  const array = [0, 1];
  if (num <= 0) return "insert number greater than 0";
  if (num === 1) return [0];
  if (num === 2) return array;

  for (let i = 2; i < num; i++) {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array;
}
