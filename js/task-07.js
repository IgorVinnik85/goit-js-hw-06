const input = document.querySelector("#font-size-control");
// console.log(input.value);
const text = document.querySelector("#text");
// console.log(text);

input.addEventListener("input", biggerLetters);

function biggerLetters(event) {
  // console.log(event.currentTarget.value);
  const inputValue = event.currentTarget.value;
  text.classList.add("size");
  text.style.fontSize = `${inputValue}px`;
}
