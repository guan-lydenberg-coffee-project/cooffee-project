import { coffees } from "./coffees.js";

// Ask customer to create new coffees
const handleNewCoffeeBtn = () => {
  const btnCreateForm = document.querySelector(`#addCoffee`);
  const coffeeForm = document.querySelector(`.coffee-form`);

  btnCreateForm.addEventListener(`click`, (e) => {
    coffeeForm.classList.toggle("display-form");
  });
};

const createCoffee = () => {
  let coffee = {};

  coffee.id = coffees.length + 1;
  const coffeeName = document.querySelector(`#coffee-name`);
  coffee.name = coffeeName.value;
  const coffeeRoast = document.querySelector(`#coffee-roast`);
  coffee.roast = coffeeRoast.value;
  const coffeeDesc = document.querySelector(`#coffee-desc`);
  coffee.desc = coffeeDesc.value;
  const coffeePrice = document.querySelector(`#coffee-price`);
  coffee.price = coffeePrice.value;
  const coffeeLink = document.querySelector(`#coffee-link`);
  coffee.src = coffeeLink.value;

  coffees.push(coffee);
  console.log(coffee);
};

const handleSubmitBtn = () => {
  const submitCoffeeBtn = document.querySelector(`.submitCoffee`);

  submitCoffeeBtn.addEventListener("click", (e) => {
    createCoffee();
  });
};

// Create new coffee card to HTML!!!

(() => {
  handleNewCoffeeBtn();
  handleSubmitBtn();
})();
