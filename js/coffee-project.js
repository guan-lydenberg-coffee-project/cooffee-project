import { coffees } from "./coffees.js";

const handleNewCoffeeBtn = () =>{
    const btnCreateForm = document.querySelector(`#addCoffee`);
    const coffeeForm = document.querySelector(`.coffee-form`)

    btnCreateForm.addEventListener(`click`,(e)=>{
        coffeeForm.classList.toggle('display-form');
    });
}

const createCoffee =(coffee)=>{

    coffee.id = coffees.length + 1;
    const coffeeName = document.querySelector(`#coffee-name`);
    coffeeName.value = coffee.name;
    const coffeeRoast = document.querySelector(`#coffee-roast`);
    coffeeRoast.value = coffee.roast;
    const coffeeDesc = document.querySelector(`#coffee-desc`);
    coffeeDesc.value = coffee.desc;
    const coffeePrice = document.querySelector(`#coffee-price`);
    coffeePrice.value = coffee.price;
    const coffeeLink = document.querySelector(`#coffee-link`);
    coffeeLink.value = coffee.src;

    coffees.push(coffee);
}

const handleSubmitBtn = (coffee) =>{
    const submitCoffeeBtn = document.querySelector(`.submitCoffee`);

    submitCoffeeBtn.addEventListener('click', (e)=>{
        createCoffee(coffee);
    });
}



(()=>{
handleNewCoffeeBtn();
;
handleSubmitBtn(coffee);
})();
