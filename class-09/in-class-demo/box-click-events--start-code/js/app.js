'use strict';

/*

EVENTS

- an event is FIRED or RAISED

- code is TRIGGERED


-- Event types:

- click
- submit (what we will use in today's lab)

there are others defined by JavaScript

- onChange
- hover
- on Page Load
- on Mouse Over
- on Key release

- Event Listener — code that is TRIGGERED when an event is FIRED
- Bind — bind or tether an event listener to an event
- Event Handler — this is the code that runs in response to the event

*/


// 3 STEPS TO EVENT HANDLING

// STEP 1
// we need a DOM element (window into the DOM)
let myContainer = document.getElementById('container');

// STEP 3
// event handler — the function that will be triggered when the event happens
function handleClick(event) {
  // define the function
  console.log(event.target.id);

  let clickedElementId = event.target.id;

  // window into the dom (where I will add the messages)
  let results = document.getElementById('results');

  // create the element
  let pTag = document.createElement('p');
  pTag.textContent = `${clickedElementId} was clicked`;
  // parent.apppendChild(thingToAdd);
  results.appendChild(pTag);

}


// STEP 2
// we need to add the event listener.
// This usually goes at the bottom of your JS file
// it should run last (probably)

// addEventListener() takes in 2 arugments
// 1 - an event as a string
// 2 - the name of a function we want to run when the event happens
      // this is what we call a callback function
myContainer.addEventListener('click', handleClick);
