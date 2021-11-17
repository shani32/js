var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
 return otherFunction;
}
var firstResult = someFunction(9);
console.log(firstResult)
var result = firstResult(2);
console.log(result)

//2
var a = 1;
function b2() {
a = 10;
 return;
 function a() { }
}
console .log(b2());//return undefined. there is nothing to return
console.log(a); //global scope=1 will print out the var
//3
let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
//  setTimeout(log,100);//log will print 3 times 3 because it saves i and not the resault at time out.100 i think means nothing at this point
setTimeout(log, 100);

}
