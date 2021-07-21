const myLibrary = [];
const newBook = document.getElementById("newBook");
const table = document.getElementById("library");
const heading = document.getElementById("heading");
const main = document.getElementById("main");
const br = document.createElement("br");

//Create form elements
const form = document.createElement("form");
form.style.margin = "40px";
main.appendChild(form);
const titleLabel = document.createElement("label");
const titleInput = document.createElement("input");
const authorLabel = document.createElement("label");
const authorInput = document.createElement("input");
const pagesLabel = document.createElement("label");
const pagesInput = document.createElement("input");
const yearLabel = document.createElement("label");
const yearInput = document.createElement("input");
const readLabel = document.createElement("label");
const readInput = document.createElement("input");
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
  form.style.display = "none";
  newBook.style.display = "block";
  myLibrary.push(createBook());
}

function displayBooks() {
    table.innerHTML = heading.outerHTML;
  myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const year = document.createElement("td");
    const read = document.createElement("td");
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
  form.style.display = "block";  
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
