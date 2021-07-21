let myLibrary = ["Book1", "Book2", "Book3"];
let newBook = document.getElementById("newBook");
let table = document.getElementById("library");
let form = document.createElement("form");
let 




function Book(title, author, pages, year, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}



function displayBooks() {
    myLibrary.forEach((book ) =>{
        let row = document.createElement("tr");
        let column = document.createElement("td");
        column.innerText = book;
        row.appendChild(column);
        table.appendChild(row);
    })
}

function displayForm() {

}

newBook.addEventListener("click, displayForm");
