'use strict';

// DOM ELEMENTS
// any time I am interacting with the Document Object Model (DOM).
// I need a window into the dom:
// grabbing an element from the page and I'm saving it for later
let kittenContainer = document.getElementById('kittenProfiles');
// console.log(kittenContainer);

const kittenTableBody = document.querySelector('tbody');
console.log(kittenTableBody);
const kittenTableHead = document.querySelector('thead');

function Kitten(name, about, likes, src, alt) {
  this.name = name;
  this.about = about;
  this.likes = likes;
  this.src = src;
  this.alt = alt;
  this.id = '';
  this.render = function() {
    this.id = `${this.name}Profile`;
    // after we have our window into the DOM
    // if I want to create new elements and add them
    // there 3 steps:

    // 1. create element
    // declared a variable and then we envoked the createElement method and we passed it an HTML as a string — AKA we want to create a <article> in our DOM.
    let kittenArticle = document.createElement('article');
    kittenArticle.setAttribute('id', this.id);
    // 2. give it content

    // 3. append it to the DOM (add it to the page)
    // parent variable, then we call .appendChild() method and we pass the thing we want to add
    kittenContainer.appendChild(kittenArticle);

    // render the full article here
    // H3
    // 1. create element
    let kittenh3 = document.createElement('h3');
    // 2. give it content
    kittenh3.textContent = this.name;
    // 3. append it to the DOM (add it to the page)
    // ex:
    // parent.appendChild(elementToAdd);
    // parent is the direct parent in the DOM of the thing we want to add.
    kittenArticle.appendChild(kittenh3);

    // p
    let p = document.createElement('p');
    p.textContent = this.about;
    kittenArticle.appendChild(p);

    // img
    let img = document.createElement('img');
    img.src = this.src;
    img.alt = this.alt;
    kittenArticle.appendChild(img);
    // Add the list
    this.renderList();
    // Add the table
    this.renderTable();
  };
  this.renderList = function() {
    let kittenArticle = document.getElementById(this.id);
    // ul
    let ul = document.createElement('ul');
    kittenArticle.appendChild(ul);

    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = `Jumper likes ${this.likes[i]}`;
      ul.appendChild(li);
    }
  };
}


Kitten.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  // kittenTableBody is the parent
  kittenTableBody.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (let i = 0; i < this.likes.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.likes[i];
    tr.appendChild(td);
  }
};


// Kitten(name, about, likes, src, alt)
let jumper = new Kitten(
  'Jumper',
  'Jumper the cat is special',
  ['cudding', 'lazer pointer', 'catnip'],
  'images/jumper.jpeg',
  'Jumper is available for adoption'
);
let serena = new Kitten(
  'Serena',
  'Serena is a sweet kitty',
  ['string', 'feathers', 'soft beds'],
  'images/serena.jpeg',
  'adopt Serena'
);
let frankie = new Kitten(
  'Frankie',
  'Frankie is adorable, and is 12 months old.',
  ['naps', 'treats', 'cat tree'],
  'images/frankie.jpeg',
  'Frankie is available for adoption'
)
// frankie.render();
// jumper.render();
// serena.render();

// create a kitten array
let kittenArray = [frankie, jumper, serena];

// you can use a function to do all your rendering
function renderAll() {
  for (let i = 0; i < kittenArray.length; i++) {
      kittenArray[i].render();
  }
}
renderAll();

/*
let jumper = {
  name: 'Jumper',
  about: 'Jumper the cat is special',
  likes: ['cudding', 'lazer pointer', 'catnip'],
  id: '',
  src: 'images/jumper.jpeg',
  alt: 'Jumper is available for adoption',
  render: function () {
    this.id = `${this.name}Profile`;
    // after we have our window into the DOM
    // if I want to create new elements and add them
    // there 3 steps:

    // 1. create element
    // declared a variable and then we envoked the createElement method and we passed it an HTML as a string — AKA we want to create a <article> in our DOM.
    let kittenArticle = document.createElement('article');
    kittenArticle.setAttribute('id', this.id);
    // 2. give it content

    // 3. append it to the DOM (add it to the page)
    // parent variable, then we call .appendChild() method and we pass the thing we want to add
    kittenContainer.appendChild(kittenArticle);

    // render the full article here
    // H3
    // 1. create element
    let kittenh3 = document.createElement('h3');
    // 2. give it content
    kittenh3.textContent = this.name;
    // 3. append it to the DOM (add it to the page)
    // ex:
    // parent.appendChild(elementToAdd);
    // parent is the direct parent in the DOM of the thing we want to add.
    kittenArticle.appendChild(kittenh3);

    // p
    let p = document.createElement('p');
    p.textContent = this.about;
    kittenArticle.appendChild(p);

    // img
    let img = document.createElement('img');
    img.src = this.src;
    img.alt = this.alt;
    kittenArticle.appendChild(img);
    // Add the list
    this.renderList();
  },
  renderList: function () {
    let kittenArticle = document.getElementById(this.id);
    // ul
    let ul = document.createElement('ul');
    kittenArticle.appendChild(ul);

    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = `Jumper likes ${this.likes[i]}`;
      ul.appendChild(li);
    }
  }
}

jumper.render();
*/
