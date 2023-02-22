const input = document.querySelector("#validation-input");
// console.log((input.dataset.length));

const dataValue = Number(input.dataset.length);
// console.log(dataValue);

input.addEventListener("blur", borderFocus);

function borderFocus(event) {
  input.classList.add("invalid");
  if (event.currentTarget.value.length === 0) {
    input.classList.remove("invalid", "valid");
  }

  event.currentTarget.value.length === dataValue
    ? input.classList.replace("invalid", "valid")
    : input.classList.replace("valid", "invalid");
}
