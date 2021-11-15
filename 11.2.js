const arr=[ 1,2,3,4,5];
let doubleValues= arr.map(function(array){
    return array
})
console.log(doubleValues);
//2
let onlyEvenValues= arr.map(function(num){
    return{
        value:num,
        isEven:num % 2 ===0 
    }
})
console.log(onlyEvenValues)

function evenValues(arr) {

    let newArr = [];
     
        arr.map(num => {
             if(num % 2 == 0) {
                newArr =  [...newArr,num];
             } 
        })

        return newArr;
    
}
console.log(evenValues(arr))
//3
const words= ['one', 'two', 'three', 'four']
const newWords= words.map(function(replace){
    // replace.split(' ');
    return (replace.slice(0,3))
    
   
})
console.log(newWords)
//4
const arr2=['one', 'two', 'two'];
const result2 = arr2.reduce((tally, val)=> {
    
         if (tally[val]){
             tally[val]++
         } else {
             tally[val]=1
         }
         return tally;
    }, {})
    console.log(result2)

    function vowelCount (str){
        let new2= {a:0, i:0, e:0, u:0, o:0}
        str.toLowerCase().split('').forEach(function (item, index) {
            if (new2[item] !== undefined){
                new2[item]++;
            }
        });
        return new2;
    }
    console.log(vowelCount('shani barak'));
//5
const str=  ['beautiful', 'day', 'from']
const capitalize= str.map(function(cap){
    return cap.toUpperCase();
})
console.log(capitalize)

const string='monday';
const shiftLetters = (string) => { return string.split(" ").map(word => { return word.split("").map(letter => { return String.fromCharCode((letter.charCodeAt() + 1)) }).join('') }).join(' ') }
console.log (shiftLetters(string))
//7
const everyOtherWord= ['sunday', 'monday']
const secondWord= everyOtherWord.map(function(second){
    second = second.toLowerCase().split('')
    console.log(second);
    for (let j = 0; j < second.length; j++) {
        if (j % 2 === 0) {
            second[j] = second[j].toUpperCase()
        }
    
    }
    return second.join('')
})
console.log(secondWord)
