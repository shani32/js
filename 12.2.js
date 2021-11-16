let candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}
//    candyStore.candies[2]= {new1:'hghjxd'}
//    console.log(candyStore.candies)
//    candyStore.candies[1].name='mekupelet'
//    console.log(candyStore.candies)

function getcan(candyStore, id) {
    const newCandies = candyStore.candies;
    let newCandy = newCandies.find(function (el) {

        return el.id === id;

    })
    return newCandy
}
// console.log(getcan("5hd7y"))

function getPrice(id) {
    const candy1 = getcan(id);
    return (candy1.price)
}
// console.log(getPrice("5hd7y"))

function addCandy(name1, id, price, amount) {
    let candy = {
        name: name1,
        id: id,
        price: price,
        amount: amount

    };
    candyStore.candies.push(candy)

}
addCandy('mekupelet', "hsnr12", 6, 2);
// console.log(candyStore)


function buy(candyStore, id) {
    const candy = getcan(candyStore, id)
    const price = candy.price
    candy.amount--;

    candyStore.cashRegister += price;



    // return cash;

}

console.log(buy(candyStore, "as12f"));
console.log(candyStore);
// console.log(candyStore.cashRegister)


    // function getCandy(id){
    // getnew= candyStore.candies;
    // getnew.forEach(new1=>{
    //     if (new1.id === id){
    //         console.log (new1);
    // }
    // })

    // getCandy(1)



// function getCandy(candyStore, id){
//     candyStore.candies.forEach(element => {
//         if (element.id === id) {
//             console.log(element);
//         }
//     }); 
//     };
    //console.log(getCandy(candyStore, "5hd7y"));

    // function getPrice(candyStore, id){
    //     candyStore.candies.forEach(element => {
    //         if (element.id === id) {
    //             console.log(element.price);
    //         }
    //     }); 
    // }
    // getPrice(candyStore, 1)