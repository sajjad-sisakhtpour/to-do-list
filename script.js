let searchInput = document.querySelector("#search-form");
let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("section input");
let addBtn = document.querySelector("section button");

list.addEventListener("click", (e) => {
  if (e.target.nodeName == "SPAN" && e.target.className == "delete-btn") {
    e.target.parentNode.remove();
  }
  if (list.children.length == 0) {
    let eMsg = document.createElement("div");
    eMsg.innerText = "your list is empty";
    eMsg.style.color = "#333";
    eMsg.id = "emMsg";
    eMsg.style.textAlign='center'
    list.appendChild(eMsg);
  }
});
