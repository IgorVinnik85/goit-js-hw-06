const input = document.querySelector("#name-input");
// console.log(input);
const span = document.querySelector("#name-output");
// console.log(span);

input.addEventListener("input", changeSpanText);

function changeSpanText(event) {
  span.textContent = event.currentTarget.value;
  if (span.textContent === "") {
    span.textContent = "Anonymous";
  }
}
