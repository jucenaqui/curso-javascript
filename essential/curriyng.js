// Function currying

function sum(a, b) {
  return a + b;
}

var sumCopy = sum.bind(this, 2);

sumCopy(3); //5

function sumCopy(a, b) {
  a = 2;
  return a + b;
}