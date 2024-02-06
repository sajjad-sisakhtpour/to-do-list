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
    eMsg.style.textAlign = "center";
    list.appendChild(eMsg);
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  list.appendChild(createItem(addInput.value));
  addInput.value = "";
  if (list.querySelector("#emMsg")) {
    list.querySelector("#emMsg").remove();
  }
});

function createItem(itemValue) {
  let item = document.createElement("li");
  let title = document.createElement("span");
  let btn = document.createElement("span");

  item.className = "to-do-item";
  title.className = "title";
  title.innerText = itemValue;
  btn.className = "delete-btn";
  btn.innerText = "delete";
  item.appendChild(title);
  item.appendChild(btn);
  return item;
}

searchInput.addEventListener("input", (e) => {
  if (list.querySelector("#emMsg")) return;
  Array.from(list.children).forEach((Element) => {
    if (
      Element.querySelector(".title")
        .innerText.toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      Element.style.display = "flex";
    } else {
      Element.style.display = "none";
    }
  });
});
