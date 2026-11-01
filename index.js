// Global variable 'burgers' declaration
const burgers = ['Hamburger', 'Cheeseburger'];

// Global variable 'featuredDrink' declaration
let featuredDrink = 'Strawberry Milkshake';

// Function to add a function-scoped variable
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Create a block scope with if statement
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Function to change the global drink variable
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}