const candyStore = {
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
   
function getCandy(candyStore, id){
    candyStore.candies.forEach(element => {
        if (element.id === id) {
            console.log(element);
        }
    }); 
    };
    //console.log(getCandy(candyStore, "5hd7y"));

    function getPrice(candyStore, id){
        candyStore.candies.forEach(element => {
            if (element.id === id) {
                console.log(element.price);
            }
        }); 
    }