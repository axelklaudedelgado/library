function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function deleteBookCard() {
  let index = this.parentElement.getAttribute('data-index');
  myLibrary.splice(index, 1);
  showBookCards();
}

function toggleReadStatus() {
  let index = this.parentElement.getAttribute('data-index');
  let currentReadStatus = myLibrary[index].readStatus;
  if(currentReadStatus == "Unread") {
    myLibrary[index].readStatus = "Read";
    showBookCards();
  } else {
    myLibrary[index].readStatus = "Unread";
    showBookCards();
  }
}

function resetBookCards() {
  bookCards.innerHTML = "";
}

function showBookCards() {
  resetBookCards();
  myLibrary.forEach((book,index) => createBookCard(book,index));
}

function createBookCard(book, index) {
  const card = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');
  const readStatus = document.createElement('button');
  const deleteButton = document.createElement('button');

  card.classList.add("card");
  card.dataset.index = index;
  readStatus.classList.add("cardButton");
  deleteButton.classList.add("cardButton");
  deleteButton.classList.add("redButton");
  readStatus.onclick = toggleReadStatus;
  deleteButton.onclick = deleteBookCard;
  
  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;

  if (book.readStatus == "Read") {
    readStatus.classList.add("greenButton");
    readStatus.textContent = "Read";
  } else {
    readStatus.classList.add("redButton");
    readStatus.textContent = "Unread";
  }

  deleteButton.textContent = "Remove";

  bookCards.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readStatus);
  card.appendChild(deleteButton);
}

function getInputValues() {
  const titleValue = document.querySelector("#title").value;
  const authorValue = document.querySelector("#author").value;
  const pagesValue = document.querySelector("#pages").value;
  const checkedValue = document.querySelector('input[name="status"]:checked').value;
  return new Book(titleValue, authorValue, pagesValue, checkedValue);
}

function addBookToLibrary() {
  const newBook = getInputValues();
  myLibrary.push(newBook);
}

function closeDialog(event) {
  if (event.target === dialog) {
    dialog.close();
  }
}

const myLibrary = [];

const showBtn = document.querySelector("#addButton");
const dialog = document.querySelector("#modal");
const modalCloseBtn = dialog.querySelector("#closeButton");
const submitBook = document.querySelector("#submitBook");
const bookCards = document.querySelector("#bookCards");
const addBookForm = document.querySelector("#addBookForm");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

modalCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

submitBook.addEventListener("click", (event) => {
  let isFormValid = addBookForm.checkValidity();

  if(!isFormValid) {
    addBookForm.reportValidity();
  } else {
    event.preventDefault();
    addBookToLibrary();
    showBookCards();
    addBookForm.reset(); 
    dialog.close();
  }
})

dialog.addEventListener("click", closeDialog);