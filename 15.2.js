function findSmallest(a, b, c){
    if (a > c || b > c){
    return c;
    } else if (c > b ||a> b) {
    return b;
   } else {
    return a;
    }
   }
  console.log(findSmallest(52,66,2));
  //smallest was written wrong. also there was a problem with the operators and the comparison