String.prototype.camelCase = function() {
  if (this.trim() === '') return '';
  let words = this.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join('')
}

console.log('meteoro de pégaso'.camelCase());
console.log('golpe fantasma de fênix'.camelCase());
console.log('trovão aurora ataque'.camelCase());
console.log('tempestade nebulosa'.camelCase());
console.log('coléra dos 100 dragões'.camelCase());
console.log(''.camelCase());
