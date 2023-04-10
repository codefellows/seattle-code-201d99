'use strict';

// any time I am interacting with the Document Object Model (DOM).
// I need a window into the dom:
// grabbing an element from the page and I'm saving it for later
let kittenContainer = document.getElementById('kittenProfiles');
console.log(kittenContainer);






// after we have our window into the DOM
// if I want to create new elements and add them
// there 3 steps:

// 1. create element
// declared a variable and then we envoked the createElement method and we passed it an HTML as a string — AKA we want to create a <article> in our DOM.
let kittenArticle = document.createElement('article');

// 2. give it content

// 3. append it to the DOM (add it to the page)
// parent variable, then we call .appendChild() method and we pass the thing we want to add
kittenContainer.appendChild(kittenArticle);

// H3
// 1. create element
let kittenh3 = document.createElement('h3');
// 2. give it content
kittenh3.textContent = 'Jumper';
// 3. append it to the DOM (add it to the page)
// ex:
// parent.appendChild(elementToAdd);
// parent is the direct parent in the DOM of the thing we want to add.
kittenArticle.appendChild(kittenh3);

// p
let p = document.createElement('p');
p.textContent = 'Jumper the cat is special';
kittenArticle.appendChild(p);

// ul
let ul = document.createElement('ul');
kittenArticle.appendChild(ul);

// img
let img = document.createElement('img');
img.src = 'images/jumper.jpeg';
img.alt = 'Jumper is available for adoption';
kittenArticle.appendChild(img);


// // for your lab
// let li = document.createElement('li');
// li.textContent = `6am: ${seattle.someValueInAnArry[i]} cookies`;

let jumper = {
  name: 'Jumper',
  about: 'Jumper the cat is special',
  likes: ['cudding', 'lazer pointer', 'catnip'],
  renderList: function() {
    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = `Jumper likes ${this.likes[i]}`;
      ul.appendChild(li);
    }
  }
}

jumper.renderList();
