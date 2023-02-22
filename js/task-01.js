const listCateg = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listCateg.length}`);

// const a = document.querySelector(`#categories`);
// console.log(a.children.length)

const list = listCateg.forEach((element) => {
  const titleEl = element.firstElementChild;
  const listEl = element.lastElementChild;
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listEl.children.length}`);
});
