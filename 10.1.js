//1
let word = 1;
function isString (str, func) {
    return typeof str === "string" ? 
    func(str) : 
    false;
}

function cnslog (str) {
    return console.log(str);
}

console.log(isString(word, cnslog));



//2
let str = 'i like to eat';
function firstWordUpperCase (str,func1) {
    str= str.split(' ');
    str[0]= str[0].toUpperCase();
    return func1(str);
}
function buy (str){
    return str.join ('-');
}
function sell (str){
   str[1]=str[1].toUpperCase();
    return str;
}
    console.log(firstWordUpperCase('hgf fyj jhfd', buy))

function ofMyOwn(str){
    str[2]= str[2].toUpperCase();
    return str;
}


console.log(firstWordUpperCase('ofer bartal', dashes()));
//4
function sunday(s){
    s();
    s();
    s();
}
function feels(){
    console.log('feels like saturday')
}

sunday(feels)

let like= 'i like to eat';
love= like.split(' ')
console.log(love)
console.log(love[1].toUpperCase())