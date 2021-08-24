// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Matt';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Dow';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + ' ' + lastName;
// 4 - Console log the value of `fullName`
console.log(fullName);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 12
// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('My name is', fullName, 'and I think', luckyNumber, 'is a winner!');
// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = false;
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'dumplings'
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
// 11 - Add two pets to your `pets` variable
pets +=  2;
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 4;
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous === true)
  console.log('Adventures are great!');
else
  console.log('How about we stay home?');
// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber===2 && adventurous===true)
  console.log('Roll the dice!');
else
  console.log("I'll stay, thank you!");

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (pets < allowedPets)
  console.log("I can have more pets!");
else if (pets == allowedPets)
  console.log("I have enough pets.");
else if (pets > allowedPets)
  console.log("Oh no, I have too many pets!");

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

// MD Comment: If the variables pets and friendsPets are both numbers,
// then I can only think of three scenarios: 1) pets > friendsPets
// 2) pets < friendsPets 3) pets == friendsPets. I think we can cover these
// three scenarios with only two comparisons, as if the pets == friendsPets,
// we can assign mostPets either value. However, there may be additional cases
// if pets or friendsPets are different variable types, or either are NaN or
// undefined. So I start my decision tree with checking whether either variable
// is NaN before comparing the two variables. Not sure this is the best way
// to do it, but it should catch at least a few weird situations.


let mostPets = 0;
if (isNaN(pets) == true && isNaN(friendsPets) == false)
  mostPets = friendsPets;
else if (isNaN(pets) == false && isNaN(friendsPets) == true)
  mostPets = pets;
else if (isNaN(pets) == true && isNaN(friendsPets) == true)
  mostPets = 0;
else if (pets >= friendsPets)
  mostPets = pets;
else if (friendsPets > pets)
  mostPets = friendsPets;

console.log(mostPets);

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!

/*
Entering this code as a comment. Not sure of an obvious way to check for invalid
number types while evaluating a single expression under the switch statement.

switch (pets >= friendsPets) {
  case true:
    mostPets = pets;
    break;
  case false:
    mostPets = friendsPets;
    break;
}
console.log(mostPets);
*/

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

adventureStatement = (adventurous === true) ? "Adventures are great!":"How about we stay home?"
console.log(adventureStatement);
