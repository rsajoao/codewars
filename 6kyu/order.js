// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
  const sortFunc = (w1, w2) => {
    const numberInW1 = [...w1].find(char => '123456789'.split('').includes(char));
    const numberInW2 = [...w2].find(char => '123456789'.split('').includes(char));
    return Number(numberInW1) - Number(numberInW2);
  }
  
  return words.split(' ').sort(sortFunc).join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
