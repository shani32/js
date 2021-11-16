let foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
foods.sort();

console.log(foods);


foods.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});

console.log(foods)
//b
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
   ];

   foodsWithUpperCase.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

});
console.log(foodsWithUpperCase)
foodsWithUpperCase.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? -1 : 1;

});
console.log(foodsWithUpperCase)
//c
const words = ["apple", "supercalifragilisticexpialidocious", 
"hi", "zoo"];
words.sort(function (a, b) {
    // let x = a.toUpperCase(),
    //     y = b.toUpperCase();
    return a.length == b.length ? 0 : a.length > b.length ? -1 : 1;

});
console.log(words)
