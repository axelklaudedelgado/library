function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  const titleValue = document.querySelector("#title").value;
  const authorValue = document.querySelector("#author").value;
  const pagesValue = document.querySelector("#pages").value;
  const checkedValue = document.querySelector('input[name="status"]:checked').value;
  myLibrary.push(new Book(titleValue, authorValue, pagesValue, checkedValue));
}

const myLibrary = [
  new Book("John", "Doe", 50, "Not Read")
];

const showBtn = document.querySelector("#addButton");
const dialog = document.querySelector("#modal");
const modalCloseBtn = dialog.querySelector("#closeButton");
const submitBook = document.querySelector("#submitBook");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

modalCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

submitBook.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
  dialog.close();
})
