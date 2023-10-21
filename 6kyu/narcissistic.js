// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const digits = [...String(value)].map((digit) => Number(digit));
  return digits.reduce((total, digit) => total + digit ** (digits.length), 0) === value;
}

console.log(narcissistic(7));
console.log(narcissistic(153));
console.log(narcissistic(351));
console.log(narcissistic(40028394225));
