function sumDigPow(a, b) {
  const result = [];

  while (a <= b) {
    const digits = [...a.toString()];
    const sum = digits.reduce((total, digit, index) => total + Number(digit) ** (index + 1), 0);

    if (sum === a) result.push(a)
    a += 1;
  }
  return result
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(90, 150));
console.log(sumDigPow(50, 150));
console.log(sumDigPow(10, 150));
