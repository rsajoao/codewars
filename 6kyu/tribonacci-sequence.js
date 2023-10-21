function tribonacci(signature, n) {
  if (n === 0) return [];
  if (signature.length >= n) return signature.slice(0, n)

  const result = [...signature]

  while (result.length < n) {
    const threeLast = result.slice(result.length - 3);
    result.push(threeLast.reduce((total, value) => total + value, 0))
  }

  return result;
}

console.log(tribonacci([1, 1, 1], 10));
