let myLibrary = ["Book1", "Book2", "Book3"];
let newBook = document.getElementById("newBook");
let table = document.getElementById("library");
let main = document.getElementById("main");
let br = document.createElement("br");

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
  myLibrary.forEach((book) => {
    let row = document.createElement("tr");
    let column = document.createElement("td");
    column.innerText = book;
    row.appendChild(column);
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
  let submitButton = document.createElement("button");

  form.setAttribute("method", "post");

  setAttributes(titleLabel, { for: "title"});
  setAttributes(titleInput, { id: "title", name: "title" });
  setAttributes(authorLabel, { for: "author" });
  setAttributes(authorInput, { id: "author", name: "author"});
  setAttributes(pagesLabel, { for: "pages" });
  setAttributes(pagesInput, { id: "pages", name:"pages" });
  setAttributes(yearLabel, { for: "year" });
  setAttributes(yearInput, { id: "year", name:"year" });
  setAttributes(readLabel, { for: "read"});
  setAttributes(readInput, { id: "read", name: "read" });

  titleLabel.innerText= "Book title";
  authorLabel.innerText= "Book author";
  pagesLabel.innerText= "Num of pages";
  readLabel.innerText= "Read status";
  yearLabel.innerText= "Publish year";
  submitButton.innerText= "Add Book";

  titleInput.type = "text";
  authorInput.type = "text";
  pagesInput.type = "text";
  yearInput.type = "text";
  readInput.type = "text";
  submitButton.type = "submit";

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
    submitButton.outerHTML;

}

newBook.addEventListener("click", displayForm);
