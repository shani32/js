function calcAverage (arr){
    var sum=0 ;
    let avg=0;
    for ( var i = 0 ; i < arr.length; i++ ){
    sum += arr [i];
    avg= sum/3;
    }
    return avg ;
    }
    console.log(calcAverage ([ 85,90,92 ]));
    //the problem was the spaces and and the fact the it was sum and not avg