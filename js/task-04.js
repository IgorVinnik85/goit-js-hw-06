const decrBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decr.textContent);
const incrBtn = document.querySelector('button[data-action="increment"]');
// console.log(incr);
let count = document.querySelector("#value");
console.log(count.textContent);

decrBtn.addEventListener("click", decriment);
incrBtn.addEventListener("click", increment);

let counterValue = 0;

function decriment(event) {
  return (count.textContent = counterValue -= 1);
}

function increment(event) {
  return (count.textContent = counterValue += 1);
}
