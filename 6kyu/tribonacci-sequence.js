function tribonacci(signature, n) {
  while (signature.length < n) {
    const threeLast = signature.slice(signature.length - 3);
    signature.push(threeLast.reduce((total, value) => total + value, 0))
  }
  return signature.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 2));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 0));