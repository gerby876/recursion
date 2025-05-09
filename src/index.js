fibs = function (x) {
  let sequence = [];
  if (x == 0) {
    return sequence;
  }
  sequence = [0];
  let number = 1;
  for (a = 0; a < x - 1; a++) {
    sequence.push(number);
    number = sequence[a] + sequence[a + 1];
  }
  return sequence;
};
console.log(fibs(8));

fibsRec = function (z, sequence) {
  if (z <= 0 && sequence === undefined) {
    return [];
  }
  if (sequence === undefined && z == 1) {
    return (sequence = [0]);
  }
  if (sequence === undefined && z == 2) {
    return (sequence = [0, 1]);
  }
  if (z >= 3 && sequence === undefined) {
    sequence = [0, 1];
  }
  if (z == 0) {
    return sequence;
  }
  if (z >= 3) {
    let y = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequenece = sequence.concat(y);
  }
  console.log("this was printed with recursion");
  return fibsRec(z - 1, sequenece);
};

console.log(fibsRec(8));

merge = function (array, left, mid, right) {
  const leftarray = [];
  const rightarray = [];

  for (let i = 0; i < mid - left + 1; i++) {
    leftarray[i] = array[left + i];
  }

  for (let j = 0; j < right - mid; j++) {
    rightarray[j] = array[mid + j + 1];
  }
  let i = 0;
  let j = 0;
  let k = left;

  while (i < mid - left + 1 && j < right - mid) {
    if (leftarray[i] < rightarray[j]) {
      array[k] = leftarray[i];
      i++;
    } else {
      array[k] = rightarray[j];
      j++;
    }
    k++;
  }
  while (i < mid - left + 1) {
    array[k] = leftarray[i];
    i++;
    k++;
  }
  while (j < right - mid) {
    array[k] = rightarray[j];
    j++;
    k++;
  }
};

mergeSort = function (array, left, right) {
  if (left === undefined) {
    left = 0;
  }
  if (right === undefined) {
    right = array.length - 1;
  }
  if (left >= right) return;

  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(array, left, mid);
  mergeSort(array, mid + 1, right);
  merge(array, left, mid, right);
  return array;
};

console.log(mergeSort([12, 11, 13, 5, 6, 7]));

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
