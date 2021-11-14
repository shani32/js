
const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
function match (food1, food2){
 if (food1.length !== food2.length) 
 console.log ("false");
for (let i = 0; i < food1.length; i++) {
    for (let j = 0; j < food2.length; j++) {
        if (food1[i] === food2[j]) {
            console.log("yes match", food1[i], food2[j]);
    }
    }
}
}
match(food1,food2)