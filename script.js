const showBtn = document.querySelector("#addButton");
const dialog = document.querySelector("#modal");
const modalCloseBtn = dialog.querySelector("#closeButton");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

modalCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});