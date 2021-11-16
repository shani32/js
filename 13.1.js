const numbers = [1, -5, 666, 2, 400, 11];

const arr= numbers.sort(function(a) {
  return a ;
});

console.log(arr);
const arr2= numbers.sort(function(a, b) {
    return a-b ;
  });
  
  console.log(arr2);
  const arr3= numbers.sort(function(a, b) {
    return b-a ;
  });
  
  console.log(arr3);