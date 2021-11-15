var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];
    library.forEach(function(val){
        if (val.readingStatus === true){
            console.log (`the book name ${val.title} wrote by ${val.author} and the reading status ${val.readingStatus}`)
        }
    })