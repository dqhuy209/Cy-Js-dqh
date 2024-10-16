const ulNode = document.querySelector("#Bai1");
function add() {
  const liLast = ulNode.lastElementChild.innerText;
  const li = document.createElement("li");
  li.innerText = Number(liLast) + 1;
  ulNode.appendChild(li);
}

// Bai 2
const ulNode2 = document.querySelector("#bai2");
function removeLastChild() {
  ulNode2.removeChild(ulNode2.lastElementChild);
}

// Bai 3
const ulNode3 = document.querySelector("#bai3");
const arr = [...ulNode3.children];
function resever() {
  arr.reverse().forEach((element) => {
    ulNode3.appendChild(element);
  });
}
