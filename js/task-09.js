function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
// console.log(btn)
const body = document.querySelector("body");
// console.log(body);
const span = document.querySelector(".color");
// console.log(span);

btn.addEventListener("click", changeColorBtn);

function changeColorBtn(event) {
  body.classList.add("newColor");
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
