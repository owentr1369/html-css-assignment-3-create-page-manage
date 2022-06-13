const createBtn = document.getElementById("open-response");
const createResponseBox = document.getElementById("create-response-box");
const content = document.getElementById("content");
const close = document.getElementById("close");

createBtn.onclick = () => {
  createResponseBox.classList.add("open");
  createResponseBox.classList.remove("hide");
  content.classList.add("hide");
  content.classList.remove("open");
};
close.onclick = () => {
  content.classList.add("open");
  content.classList.remove("hide");
  createResponseBox.classList.add("hide");
  createResponseBox.classList.remove("open");
};
