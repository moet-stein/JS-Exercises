console.log('Starting javascript...');

// Exercise 1: Print my name
var myName = 'Moe Steinmueller';
console.log('my name is: ', myName);

// Exercise 2: Print my age
var age = 28;
console.log('my age is: ', age);

// Exercise 3: Calc. and Print the age difference
var juliaAge = 32;
var ageDiff = age - juliaAge;
console.log('Age difference is: ', ageDiff);

// Writing code with conditionals//////////////////////////////////////

// Exercise 4: compares the variable with my age with the number 21
if (age >= 21) {
  console.log('You are older than 21.');
} else {
  console.log('You are NOT older than 21.');
}

// Exercise 5: compares Julia's age and my age
if (juliaAge > age) {
  console.log('Julia is older than me.');
} else if (juliaAge < age) {
  console.log('Julia is younger than me.');
} else {
  console.log('I have the same age as Julia.');
}

// Sorting an Array ///////////////////////////////////////////
// Exercise 1: Create an array with all the names of my class, sort the array alphabetically. Print the first element of the array. And the last one too.
//print all the names using "for" loop
var namesOfClass = [
  'Ottavia',
  'Lucas',
  'Laura',
  'Chirag',
  'Denis',
  'Michelle',
  'Oded',
  'Nathalia',
  'Moe',
];

namesOfClass.sort();
console.log('First person: ', namesOfClass[0]);
console.log('Last person: ', namesOfClass[namesOfClass.length - 1]);

for (let i = 0; i < namesOfClass.length; i++) {
  console.log(namesOfClass[i]);
}
