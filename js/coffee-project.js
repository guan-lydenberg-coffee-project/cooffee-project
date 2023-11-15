import { coffees } from "./coffees.js";

const handleNewCoffeeBtn = () =>{
    const btnCreateForm = document.querySelector(`#addCoffee`);
    const coffeeForm = document.querySelector(`.coffee-form`)

    btnCreateForm.addEventListener(`click`,(e)=>{
        coffeeForm.classList.toggle('display-form');
    });
}


(()=>{
handleNewCoffeeBtn();
})();
