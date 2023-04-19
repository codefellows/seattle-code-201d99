"use strict";

// settings to use with local storage
let settings = {
  darkMode: false,
  comment: "",
};

let mode = document.getElementsByClassName("mode");
let commentBox = document.getElementById("commentBox");

function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");

  // data we want to save:
  settings.darkMode = true;

  // update value saved in local storage
  saveSettings()
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");
  settings.darkMode = false;

  // update value saved in local storage
  saveSettings()
}

// save settings to localStorage
function saveSettings() {
  console.log(settings);
  // take the data and turn it into a string to store it
  let stringify = JSON.stringify(settings);
  console.log(stringify);

  // put it in local storage with a label (AKA key)
  // "settings" is our key
  // setItem() takes in 2 arguemnts:
  // 1. the key as a string
  // 2. the data as a string
  localStorage.setItem('settings', stringify);

}

// get the data out of local storage and use it
function pageLoad() {
  // get the data out of local storage with the key
  // "settings" is our key
  let savedSettings = localStorage.getItem('settings');
  console.log(savedSettings)
  if (savedSettings) {
    console.log(savedSettings);
  // turn the data from a string back into an object
    settings = JSON.parse(savedSettings);
    console.log(settings);

    if (settings.darkMode) {
      enterDarkMode();
    } else {
      enterLightMode();
    }
    commentBox.value = settings.comment;
  } else {
    return;
  }
}

function handleColorMode() {
  // change styling of background and text color
  if (this.value === "dark") {
    enterDarkMode();
  }
  if (this.value === "light") {
    enterLightMode();
  }
}

// add event listener to dark mode form
for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener("click", handleColorMode);
}

// let name = 'Sheyna';
// sayHi('Sheyna');
// sayHi(handleColorMode);
// sayHi(function() {
//   // change styling of background and text color
//   if (this.value === "dark") {
//     enterDarkMode();
//   }
//   if (this.value === "light") {
//     enterLightMode();
//   }
// });

// event listener to tell when changes have made to the textarea
commentBox.addEventListener('input', function() {
  // reasign the property on the global settings object (see line 6) to the value from the DOM that the user typed in:
  settings.comment = commentBox.value;
  saveSettings();
});

// loads page with saved settings
pageLoad();
