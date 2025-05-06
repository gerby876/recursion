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
  if (sequence === undefined && z == 1) {
    return (sequence = [0]);
  }
  if (sequence === undefined && z == 2) {
    return (sequence = [0, 1]);
  }
  if (z <= 0 && sequence === undefined) {
    return [];
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
  return fibsRec(z - 1, sequenece);
};

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(8));
