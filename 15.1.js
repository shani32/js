// the first mistake was that sum was with const and not let. also misigging return in the end and a ,

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
    }
    console.log(getSum([1,2,3],[5,66,23]));
