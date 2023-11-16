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

const renderCoffeeCard = (coffee) => {
  const coffeeCard = document.createElement(`div`);
  coffeeCard.classList.add(`coffeeCard`, `d-flex`);
  coffeeCard.setAttribute(`id`, `${coffee.id}`);

  coffeeCard.innerHTML = `
    <img class="coffee-img" src="${coffee.src}" alt="" />
                <div class="d-flex flex-column coffee-info">
                  <h3>${coffee.name}</h3>
                  <p>$${coffee.price}</p>
                  <p>${coffee.roast}</p>
                  <p>${coffee.desc}</p>
                </div>
    `;
  const coffeeParent = document.querySelector(`.coffeeCardParent`);
  coffeeParent.appendChild(coffeeCard);
};

const renderCoffeeCards = (coffees) => {
  document.querySelector(`.coffeeCardParent`).innerHTML = " ";
  coffees.forEach((coffee) => {
    renderCoffeeCard(coffee);
  });
};

const updateCoffeesByClicking = (coffees) => {
  // update Coffees with buttons clicked
  const filterBtns = document.querySelectorAll(".btn-Search");
  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener("click", (e) => {
      console.log(e.target.innerText);
      let filteredCoffees = [];
      if (e.target.innerText.toLowerCase() === "all") {
        filteredCoffees = coffees;
      } else {
        filteredCoffees = [];
        coffees.forEach((coffee) => {
          if (coffee.roast.toLowerCase() === e.target.innerText.toLowerCase()) {
            filteredCoffees.push(coffee);
          }
        });
      }
      renderCoffeeCards(filteredCoffees);
    });
  });
};

const updateCoffeesByTyping = (coffees) => {
  let updatedCoffeesByTyping = [];
  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("input", (e) => {
    let searchValue = searchInput.value.trim().toLowerCase();
    coffees.forEach((coffee) => {
      if (coffee.name.toLowerCase().includes(searchValue)) {
        updatedCoffeesByTyping.push(coffee.name);
      }
    });
    console.log(updatedCoffeesByTyping);
  });
};

(() => {
  // handleNewCoffeeBtn();
  // handleSubmitBtn();
  // for (let coffee of coffees){
  //   renderCoffeeCard(coffee);
  // }

  // Implment search buttons functionality
  // const searchBtns = document.querySelectorAll('.btn-Search');
  // searchBtns.forEach((btn)=>{
  //   btn.addEventListener('click', ()=>{
  //     console.log(handleCoffeeFilter(coffees, btn));
  //   })
  // })

  // updateCoffeesByClicking(coffees);

  updateCoffeesByClicking(coffees);
})();
