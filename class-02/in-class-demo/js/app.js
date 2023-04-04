'use strict';

/*

if (condition) {
  console.log('this code ran because the conditon was true');
}


=== 
- strictly equal to

Evaluate 2 conditonal statements:

||
- is the "logical or"
One true and it will run

&& 
— is the "logical and"
Both have to be true in order for it to run

ex:

let num = 5
if (num > 2 && num < 10) {
  console.log('this code ran because the conditon was true');
}

*/

let doILikeStarWars = prompt('Do I like Star Wars? Yes or No?').toLowerCase();
// console.log(doILikeStarWars);
// let doILikeStarWarsLower = doILikeStarWars.toLowerCase();
// console.log(doILikeStarWarsLower);

if (doILikeStarWars === 'yes' || doILikeStarWars === 'y') {
  // console.log('You are right; I do like Star Wars');
  alert('You are right; I do like Star Wars');
} else if (doILikeStarWars === 'no' || doILikeStarWars === 'n') {
  console.log('You are wrong. I do like Star Wars');
} else {
  console.log('You need to answer with a \'yes\' or a \'no\'');
}
