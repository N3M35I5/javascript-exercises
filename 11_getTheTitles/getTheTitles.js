const getTheTitles = function(books) {
    let arr=Array();
    books.forEach(book => {
        arr.push(book.title);
    });
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
