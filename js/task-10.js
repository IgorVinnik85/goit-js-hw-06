function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
// console.log(input.value);
const createBtn = document.querySelector(["button[data-create]"]);
// console.log(createBtn);
const destroyBtn = document.querySelector(["button[data-destroy]"]);
// console.log(destroyBtn);
const box = document.querySelector("#boxes");
// console.log(box);

function createBoxes(amount) {
  let width = 50;
  let height = 50;

  for (let i = 1; i <= amount; i += 1) {
    const div = `<div class="color"></div>`;
    box.insertAdjacentHTML("afterbegin", div);
    const elements = document.querySelector(".color");
    elements.style.backgroundColor = getRandomHexColor();
    elements.style.width = `${(width += 10)}px`;
    elements.style.height = `${(height += 10)}px`;
  }
  box.classList.add("newColor");
  box.style.display = "flex";
  box.style.gap = "10px";
}
destroyBtn.addEventListener("click", destroy);
createBtn.addEventListener("click", create);

function destroy(event) {
  box.innerHTML = "";
}

function create(event) {
  createBoxes(input.value);
}
