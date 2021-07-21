let myLibrary = [];
let newBook = document.getElementById("newBook");
let table = document.getElementById("library");
let main = document.getElementById("main");
let br = document.createElement("br");

//Create form elements
let form = document.createElement("form");
form.style.margin = "40px";
main.appendChild(form);
let titleLabel = document.createElement("label");
let titleInput = document.createElement("input");
let authorLabel = document.createElement("label");
let authorInput = document.createElement("input");
let pagesLabel = document.createElement("label");
let pagesInput = document.createElement("input");
let yearLabel = document.createElement("label");
let yearInput = document.createElement("input");
let readLabel = document.createElement("label");
let readInput = document.createElement("input");
let addBook = document.createElement("button");

form.setAttribute("method", "post");

setAttributes(titleLabel, { for: "title" });
setAttributes(titleInput, { id: "title", name: "title", type: "text" });
setAttributes(authorLabel, { for: "author" });
setAttributes(authorInput, { id: "author", name: "author", type: "text" });
setAttributes(pagesLabel, { for: "pages" });
setAttributes(pagesInput, { id: "pages", name: "pages", type: "text" });
setAttributes(yearLabel, { for: "year" });
setAttributes(yearInput, { id: "year", name: "year", type: "text" });
setAttributes(readLabel, { for: "read" });
setAttributes(readInput, { id: "read", name: "read", type: "text" });
setAttributes(addBook, { id: "addBook", type: "button" });

titleLabel.innerText = "Book title";
authorLabel.innerText = "Book author";
pagesLabel.innerText = "Num of pages";
readLabel.innerText = "Read status";
yearLabel.innerText = "Publish year";
addBook.innerText = "Add Book";

//Functions

function Book(title, author, pages, year, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(createBook());
}

function displayBooks() {
  myLibrary.forEach((book) => {
    let row = document.createElement("tr");
    let title = document.createElement("td");
    let author = document.createElement("td");
    let pages = document.createElement("td");
    let year = document.createElement("td");
    let read = document.createElement("td");
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    year.innerText = book.year;
    read.innerText = book.read;
    row.innerHTML =
      title.outerHTML +
      author.outerHTML +
      pages.outerHTML +
      year.outerHTML +
      read.outerHTML;
    table.appendChild(row);
  });
}

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function displayForm() {
  newBook.style.display = "none";
  form.innerHTML =
    titleLabel.outerHTML +
    br.outerHTML +
    titleInput.outerHTML +
    br.outerHTML +
    authorLabel.outerHTML +
    br.outerHTML +
    authorInput.outerHTML +
    br.outerHTML +
    pagesLabel.outerHTML +
    br.outerHTML +
    pagesInput.outerHTML +
    br.outerHTML +
    yearLabel.outerHTML +
    br.outerHTML +
    yearInput.outerHTML +
    br.outerHTML +
    readLabel.outerHTML +
    br.outerHTML +
    readInput.outerHTML +
    br.outerHTML +
    addBook.outerHTML;

  addBook = document.getElementById("addBook");
  addBook.addEventListener("click", test);
  addBook.addEventListener("click", addBookToLibrary);
  addBook.addEventListener("click", displayBooks);
}

function createBook() {
  const tInput = document.getElementById("title");
  const aInput = document.getElementById("author");
  const pInput = document.getElementById("pages");
  const yInput = document.getElementById("year");
  const rInput = document.getElementById("read");
  let book = new Book(
    tInput.value,
    aInput.value,
    pInput.value,
    yInput.value,
    rInput.value
  );
  console.log(book);
  return book;
}
newBook.addEventListener("click", displayForm);
