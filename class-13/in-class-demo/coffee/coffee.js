'use strict';

function Drink(drinkType, milk, size) {
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
  this.report = function() {
    console.log(`This is a ${this.drinkType} with ${this.milk} milk`);
  }
}

function storeDrink(drinkToStore) {
  // turn the drink object into a string:
  let stringifiedDrink = JSON.stringify(drinkToStore);
  // put the drink in local storage with the key (label) 'drink':
  localStorage.setItem('drink', stringifiedDrink);
}

function getDrink() {
  // get the drink from local storage with the key (label) 'drink':
  let potentialDrinkFromStorage = localStorage.getItem('drink');
  if (potentialDrinkFromStorage) {
    // JSON.parse returns a POJO = Plain Old JavaScript Object
    let parsedDrink = JSON.parse(potentialDrinkFromStorage);
    // console.log(parsedDrink);
    // if all we need is a POJO we can leave it as a POJO. But if we need
    // to envoke a method on the object such as the report() method on Drink (see line 8). Then we need to turn the POJO back into an instance of DRINK


    // extract properties from the POJO and turn it back into an instance of drink — this is called reinstanciation
    // Drink(drinkType, milk, size)
    let newDrink = new Drink(parsedDrink.name, parsedDrink.milk, parsedDrink.size);
    // console.log(newDrink);
    return newDrink;
  }
}

let myDrink = new Drink('tea', 'half and half', 'grande');
console.log(myDrink);
myDrink.report();

storeDrink(myDrink);
// console.log(localStorage.drink);

let myDrinkReturnedFromLocalStorage = getDrink();
console.log(myDrinkReturnedFromLocalStorage);

// this won't work if the thing we got back is still a POJO
// report() will only work on instance of Drink
myDrinkReturnedFromLocalStorage.report();
