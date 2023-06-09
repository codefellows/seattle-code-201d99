'use strict';

/*

- there is a collection of goat photos
- the user is presented 2 images of goats (goats are randomly generated) - 2 different photo
- the user votes on their favorite by clicking on photo
- 15 match ups — 15 total votes (15 vote is a round)
- display the result of the vote
- display the number of times each goat was seen by the user



WHAT ARE THINGS I NEED?

- loops — for loop?
- event listeners (clicks)
  — one event listener on the outer box to listen to the images inside the box
  - view results div — at end to generate the results
- Goat constructor to make instance of goats
  - img src
  - number of views
  - number of votes

- global varriables
  - window into the DOM
  - goat array
  - counter - (limit of 15 match up)


- functions
  - get a random number to use with goat array to get a random goat
  - update the DOM (change goat photos in the DOM)
    - increment the number of views on the goats
  - handle goat clicks
    - what goat was click on
    - increment the number of votes on that goat
  - handle click of view results

*/

let goatArray = [];

let myContainer = document.querySelector('section');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let viewResultsBtn = document.querySelector('section ~ div')

let counter = 0;
let maxCounter = 5;

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

let sassy = new Goat('sassy-goat');
let cruisin = new Goat('cruisin-goat', 'png');
let sweater = new Goat('sweater-goat');
let float = new Goat('float-your-goat');
let hand = new Goat('goat-out-of-hand');
let kissing = new Goat('kissing-goat');
let smile = new Goat('smiling-goat');

goatArray.push(sweater, cruisin, float, hand, kissing, sassy, smile);

// console.log(goatArray);

// - get a random number to use with goat array to get a random goat
function selectRandomGoatNumber() {
  // the net effect here is that a random number between 0 and 6.9 will be generated by Math.random() * allGoat.length and then Math.floor will round it down so we will get a number a number between 0 and 6
  return Math.floor(Math.random() * goatArray.length);
}

// - update the DOM (change goat photos in the DOM)
//     - increment the number of views on the goats
function renderGoats() {
  let goat1 = selectRandomGoatNumber(); // 5
  let goat2 = selectRandomGoatNumber(); // 5
  console.log(goat1, goat2);
  // as long as goat1 === goat2 we need a new number for goat2
  while (goat1 === goat2) {
    goat2 = selectRandomGoatNumber(); // 5
    console.log(goat1, goat2);
  }
  // seriously consider using an array — you can push things to an array
  // remember: how do you find if an array includes something?
  // look it up - Google

  image1.src = goatArray[goat1].src;
  image1.alt = goatArray[goat1].name;
  goatArray[goat1].views++;
  image2.src = goatArray[goat2].src;
  image2.alt = goatArray[goat2].name;
  goatArray[goat2].views++;
  // console.log(goatArray);
}

// - handle goat clicks
//     - what goat was click on
//     - increment the number of votes on that goat

function handleGoatClick(event) {
  counter++;
  console.log(event.target.alt);
  let clickedGoat = event.target.alt;
  // find a the goat instance in the goat array whose name property equals the clickedGoat value.
  for (let i = 0; i < goatArray.length; i++) {
    if (clickedGoat === goatArray[i].name) {
      goatArray[i].votes++;
      console.log(goatArray);
    }
  }
  // check to see if the round has ended
  if ( counter < maxCounter) {
    // the round can continue, new goats should render
    renderGoats();
  } else {
    // After voting rounds have been completed, remove the event listeners on the product.
    myContainer.removeEventListener('click', handleGoatClick);
    // make the button clickable
    viewResultsBtn.addEventListener('click', viewResults);
    // stop the game and render the results
  }
}

function viewResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < goatArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${goatArray[i].name} had ${goatArray[i].views} views and ${goatArray[i].votes} votes.`;
    ul.appendChild(li);
  }

}

renderGoats();

// event listener on myContainer, for clicks,
// my event handler is handleGoatClick

myContainer.addEventListener('click', handleGoatClick);
