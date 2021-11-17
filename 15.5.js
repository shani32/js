function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str.length; i++ ){
    if ( str.charAt(i) === char ){
    counter++ ;
    }
    }
    return counter ;
    }
    console.log(countOccurrences("ini mini miny moe","n"));
    //the problem was spaces the prevent from the function to excuted.
    //also the counter written as +1 instead of ++;