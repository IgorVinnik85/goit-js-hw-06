const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liElement = ingredients.map((option) => {
  const createList = document.createElement("li");
  createList.textContent = option;
  createList.classList.add(`item`);
  // console.log(createList);

  return createList;
});

// console.log(liEelement);

const ul = document.querySelector("#ingredients");
// console.log(ul);

ul.append(...liElement);
