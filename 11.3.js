const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];
   const name1= data.forEach(function(n){
       console.log (n.name);
   })
   const before= data.map(function(b){
    if (b.birthday[3]<1990){
        return (b.name+b.birthday)
    }
    return false
    
})
 console.log(before)

 //3 no success

 const result= data.forEach((tally, val) => {
     
     if (tally.favoriteFoods[val]){
         tally.favoriteFoods[val]++
     } else {
         tally.favoriteFoods[val]=1
     }
     return tally.favoriteFoods;
 })
 
 console.log(result)


 