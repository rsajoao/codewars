function moveZeros(arr) {
  const result = arr.filter(element => element !== 0);
  while (result.length < arr.length) {
    result.push(0);
  }
  return result;
}

/*
forma mais simplificada que eu achei mais interessante depois
function moveZeros(arr) {
  return arr.filter(n => n !== 0).concat(arr.filter(n => n === 0))
}
*/

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
