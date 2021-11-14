const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];
  
   for(let i=0; i<listOfNeighbours.length; i++){
       for (let j=0; j<listOfNeighbours.length; j++){
        console.log (`neighbours: ${listOfNeighbours[j]}`);
   }
}
  