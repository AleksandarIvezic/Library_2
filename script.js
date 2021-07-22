let myLibrary = [];
const newBook = document.getElementById('newBook');
const table = document.getElementById('library');
const heading = document.getElementById('library');
const main = document.getElementById('main');
const br = document.createElement('br');

// Create form elements
const form = document.createElement('form');
form.style.margin = '40px';
main.appendChild(form);
const titleLabel = document.createElement('label');
const titleInput = document.createElement('input');
const authorLabel = document.createElement('label');
const authorInput = document.createElement('input');
const pagesLabel = document.createElement('label');
const pagesInput = document.createElement('input');
const yearLabel = document.createElement('label');
const yearInput = document.createElement('input');
const readLabel = document.createElement('label');
const readInput = document.createElement('select');
const yes = document.createElement('option');
const no = document.createElement('option');
let addBook = document.createElement('input');

form.setAttribute('method', 'get');

// Create setAttributes helper
function setAttributes(el, attrs) {
  Object.keys(attrs).forEach((key) => {
    el.setAttribute(key, attrs[key]);
  });
}

setAttributes(titleLabel, {
  for: 'title',
});
setAttributes(titleInput, {
  id: 'title',
  name: 'title',
  type: 'text',
  required: '',
});
setAttributes(authorLabel, {
  for: 'author',
});
setAttributes(authorInput, {
  id: 'author',
  name: 'author',
  type: 'text',
});
setAttributes(pagesLabel, {
  for: 'pages',
});
setAttributes(pagesInput, {
  id: 'pages',
  name: 'pages',
  type: 'text',
});
setAttributes(yearLabel, {
  for: 'year',
});
setAttributes(yearInput, {
  id: 'year',
  name: 'year',
  type: 'text',
});
setAttributes(readLabel, {
  for: 'read',
});
setAttributes(readInput, {
  id: 'read',
  name: 'read',
});
setAttributes(yes, {
  value: 'read already',
});
setAttributes(no, {
  value: 'not read yet',
});
setAttributes(addBook, {
  id: 'addBook',
  type: 'submit',
  value: 'Add Book',
});

titleLabel.innerText = 'Book title';
authorLabel.innerText = 'Book author';
pagesLabel.innerText = 'Num of pages';
readLabel.innerText = 'Read status';
yes.innerText = 'Read already';
no.innerText = 'Not read yet';
yearLabel.innerText = 'Publish year';

readInput.innerHTML = yes.outerHTML + no.outerHTML;

// Functions

function Book(title, author, pages, year, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.read = read;
}

function createBook() {
  const tInput = document.getElementById('title');
  const aInput = document.getElementById('author');
  const pInput = document.getElementById('pages');
  const yInput = document.getElementById('year');
  const rInput = document.getElementById('read');
  const book = new Book(
    tInput.value,
    aInput.value,
    pInput.value,
    yInput.value,
    rInput.value,
  );
  return book;
}

function saveLibrary() {
  const library = JSON.stringify(myLibrary);
  localStorage.setItem('library', library);
}

function addBookToLibrary() {
  form.style.display = 'none';
  newBook.style.display = 'block';
  myLibrary.push(createBook());
  saveLibrary();
}

function removeBook(e) {
  myLibrary.splice(e.target.id, 1);
  saveLibrary();
  window.location.reload();
}

function changeStatus(e) {
  const current = e.target.parentElement.firstChild;
  if (current.textContent === 'read already') {
    current.textContent = 'not read yet';
  } else if (current.textContent === 'not read yet') {
    current.textContent = 'read already';
  }
}

function displayBooks() {
  const removeBtns = [];
  const changeBtns = [];
  table.innerHTML = heading.outerHTML;
  let id = 0;
  myLibrary.forEach((book) => {
    book.id = id;
    const row = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const year = document.createElement('td');
    const read = document.createElement('td');
    const remove = document.createElement('button');
    const change = document.createElement('button');

    remove.setAttribute('id', id);
    change.setAttribute('id', `change-${id}`);

    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    year.innerText = book.year;
    read.innerText = book.read;
    remove.innerText = 'remove Book';
    change.innerText = 'Change';

    read.appendChild(change);
    // eslint-disable-next-line max-len
    row.innerHTML = title.outerHTML + author.outerHTML + pages.outerHTML + year.outerHTML + read.outerHTML + remove.outerHTML;
    table.appendChild(row);
    const removeBtn = document.getElementById(`${id}`);
    const changeBtn = document.getElementById(`change-${id}`);
    removeBtns.push(removeBtn);
    changeBtns.push(changeBtn);
    removeBtns[id].addEventListener('click', removeBook);
    changeBtns[id].addEventListener('click', changeStatus);
    id += 1;
  });
}

function displayForm() {
  newBook.style.display = 'none';
  form.style.display = 'block';
  // eslint-disable-next-line max-len
  form.innerHTML = titleLabel.outerHTML + br.outerHTML + titleInput.outerHTML + br.outerHTML + authorLabel.outerHTML + br.outerHTML + authorInput.outerHTML + br.outerHTML + pagesLabel.outerHTML + br.outerHTML + pagesInput.outerHTML + br.outerHTML + yearLabel.outerHTML + br.outerHTML + yearInput.outerHTML + br.outerHTML + readLabel.outerHTML + br.outerHTML + readInput.outerHTML + br.outerHTML + addBook.outerHTML;

  addBook = document.getElementById('addBook');
  addBook.addEventListener('click', addBookToLibrary);
  addBook.addEventListener('click', displayBooks);
}

newBook.addEventListener('click', displayForm);

function checkLocalStorage() {
  if (localStorage.getItem('library')) {
    myLibrary = JSON.parse(localStorage.getItem('library'));
    displayBooks();
  }
}

window.onload = checkLocalStorage;

// Add some styling
const hData = document.getElementsByTagName('th');
for (let i = 0; i < hData.length; i += 1) {
  hData[i].style.border = 'green 3px solid';
  hData[i].style.padding = '15px';
}
table.style.margin = '30px';
table.style.padding = '20px';
table.style.border = '5px green solid';
table.style.borderCollapse = 'collapse';

// let myLibrary = [];
// const newBook = document.getElementById('newBook');
// const table = document.getElementById('library');
// const heading = document.getElementById('heading');
// const main = document.getElementById('main');
// const br = document.createElement('br');

// // Create form elements
// const form = document.createElement('form');
// form.style.margin = '40px';
// main.appendChild(form);
// const titleLabel = document.createElement('label');
// const titleInput = document.createElement('input');
// const authorLabel = document.createElement('label');
// const authorInput = document.createElement('input');
// const pagesLabel = document.createElement('label');
// const pagesInput = document.createElement('input');
// const yearLabel = document.createElement('label');
// const yearInput = document.createElement('input');
// const readLabel = document.createElement('label');
// const readInput = document.createElement('select');
// const yes = document.createElement('option');
// const no = document.createElement('option');
// let addBook = document.createElement('input');

// form.setAttribute('method', 'get');

// // Create setAttributes helper
// function setAttributes(el, attrs) {
//   Object.keys(attrs).forEach((key) => {
//     el.setAttribute(key, attrs[key]);
//   });
// }

// setAttributes(titleLabel, {
//   for: 'title',
// });
// setAttributes(titleInput, {
//   id: 'title',
//   name: 'title',
//   type: 'text',
//   required: '',
// });
// setAttributes(authorLabel, {
//   for: 'author',
// });
// setAttributes(authorInput, {
//   id: 'author',
//   name: 'author',
//   type: 'text',
// });
// setAttributes(pagesLabel, {
//   for: 'pages',
// });
// setAttributes(pagesInput, {
//   id: 'pages',
//   name: 'pages',
//   type: 'text',
// });
// setAttributes(yearLabel, {
//   for: 'year',
// });
// setAttributes(yearInput, {
//   id: 'year',
//   name: 'year',
//   type: 'text',
// });
// setAttributes(readLabel, {
//   for: 'read',
// });
// setAttributes(readInput, {
//   id: 'read',
//   name: 'read',
// });
// setAttributes(yes, {
//   value: 'read already',
// });
// setAttributes(no, {
//   value: 'not read yet',
// });
// setAttributes(addBook, {
//   id: 'addBook',
//   type: 'submit',
//   value: 'Add Book',
// });

// titleLabel.innerText = 'Book title';
// authorLabel.innerText = 'Book author';
// pagesLabel.innerText = 'Num of pages';
// readLabel.innerText = 'Read status';
// yes.innerText = 'Read already';
// no.innerText = 'Not read yet';
// yearLabel.innerText = 'Publish year';

// readInput.innerHTML = yes.outerHTML + no.outerHTML;

// // Functions

// function Book(title, author, pages, year, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.year = year;
//   this.read = read;
// }

// function createBook() {
//   const tInput = document.getElementById('title');
//   const aInput = document.getElementById('author');
//   const pInput = document.getElementById('pages');
//   const yInput = document.getElementById('year');
//   const rInput = document.getElementById('read');
//   const book = new Book(
//     tInput.value,
//     aInput.value,
//     pInput.value,
//     yInput.value,
//     rInput.value,
//   );
//   return book;
// }

// function saveLibrary() {
//   const library = JSON.stringify(myLibrary);
//   localStorage.setItem('library', library);
// }

// function addBookToLibrary() {
//   form.style.display = 'none';
//   newBook.style.display = 'block';
//   myLibrary.push(createBook());
//   saveLibrary();
// }

// function removeBook(e) {
//   myLibrary.splice(e.target.id, 1);
//   saveLibrary();
//   window.location.reload();
// }

// function changeStatus(e) {
//   const current = e.target.parentElement.firstChild;
//   if (current.textContent === 'read already') {
//     current.textContent = 'not read yet';
//   } else if (current.textContent === 'not read yet') {
//     current.textContent = 'read already';
//   }
// }

// function displayBooks() {
//   const removeBtns = [];
//   const changeBtns = [];
//   table.innerHTML = heading.outerHTML;
//   let id = 0;
//   myLibrary.forEach((book) => {
//     book.id = id;
//     const row = document.createElement('tr');
//     const title = document.createElement('td');
//     const author = document.createElement('td');
//     const pages = document.createElement('td');
//     const year = document.createElement('td');
//     const read = document.createElement('td');
//     const remove = document.createElement('button');
//     const change = document.createElement('button');

//     remove.setAttribute('id', id);
//     change.setAttribute('id', `change-${id}`);

//     title.innerText = book.title;
//     author.innerText = book.author;
//     pages.innerText = book.pages;
//     year.innerText = book.year;
//     read.innerText = book.read;
//     remove.innerText = 'remove Book';
//     change.innerText = 'Change';

//     read.appendChild(change);
// eslint-disable-next-line max-len
//     row.innerHTML = title.outerHTML + author.outerHTML + pages.outerHTML + year.outerHTML + read.outerHTML + remove.outerHTML;
//     table.appendChild(row);
//     const removeBtn = document.getElementById(`${id}`);
//     const changeBtn = document.getElementById(`change-${id}`);
//     removeBtns.push(removeBtn);
//     changeBtns.push(changeBtn);
//     removeBtns[id].addEventListener('click', removeBook);
//     changeBtns[id].addEventListener('click', changeStatus);
//     id += 1;
//   });
// }

// function displayForm() {
//   newBook.style.display = 'none';
//   form.style.display = 'block';
// eslint-disable-next-line max-len
//   form.innerHTML = titleLabel.outerHTML + br.outerHTML + titleInput.outerHTML + br.outerHTML + authorLabel.outerHTML + br.outerHTML + authorInput.outerHTML + br.outerHTML + pagesLabel.outerHTML + br.outerHTML + pagesInput.outerHTML + br.outerHTML + yearLabel.outerHTML + br.outerHTML + yearInput.outerHTML + br.outerHTML + readLabel.outerHTML + br.outerHTML + readInput.outerHTML + br.outerHTML + addBook.outerHTML;

//   addBook = document.getElementById('addBook');
//   addBook.addEventListener('click', addBookToLibrary);
//   addBook.addEventListener('click', displayBooks);
// }

// newBook.addEventListener('click', displayForm);

// function checkLocalStorage() {
//   if (localStorage.getItem('library')) {
//     myLibrary = JSON.parse(localStorage.getItem('library'));
//     displayBooks();
//   }
// }

// window.onload = checkLocalStorage;

// // Add some styling
// const hData = document.getElementsByTagName('th');
// for (let i = 0; i < hData.length; i += 1) {
//   hData[i].style.border = 'green 3px solid';
//   hData[i].style.padding = '15px';
// }
// table.style.margin = '30px';
// table.style.padding = '20px';
// table.style.border = '5px green solid';
// table.style.borderCollapse = 'collapse';
