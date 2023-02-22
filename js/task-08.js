const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", createSubmit);

function createSubmit(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements.email.value);
  //  console.log(event.currentTarget.elements.password.value);
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return prompt("Fill the fields, ok?");
  }

  const result = {
    email: email.value,
    password: password.value,
  };
  console.log(result);
  event.currentTarget.reset();
}
