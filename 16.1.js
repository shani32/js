function funcA() {
    var a = 1;
    console.log(a);
    console.log(foo());
    
    function foo() {
    return 2;
    }
    
   }
   funcA();
//    // i think the function should return undefined becuse it print out the function before it declares,2 for foo.
//to fix it we need to switch a place
var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName()); //it will return de rosa cause this refer to his father full name
var test = obj.prop.getFullName();
console.log(test); //there is no this kind of function. its a var, return error. to fix it ill call the var
// test and put parentacis in in get full name
// //3
function funcB() {
     a = b = 0;
    a++;
    return a;
   }
   console.log(funcB());//will not run anything.we have to add console log so ut will print 1.
   console.log(typeof a); //will print undefined. to make it a number remove let
   console.log(typeof b); //print out a number
  //4
   function funcC() {
    console.log("1");
   }
   funcC();
   function funcC() {
    console.log("2");//will print 2
   }
   funcC();

   //5
//    function funcD1() {
//     d = 1;
//    }
//   funcD1();
//    console.log(d);//i think it return 1
//    function funcD2() {
//     var e = 1;
//    }
//    funcD2();
//    console.log(e); //i think will return error
   //6
   function funcE() {
    console.log("Value of f in local scope: ", f); //f- undefined. different scope. sentence will be printed
   }
   console.log("Value of f in global scope: ", f);//will print the sentence and the number same scope
   var f = 1;
   funcE();//if ill add here console log it will print undefined. otherwise nothing. 