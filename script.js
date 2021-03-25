console.log('Starting javascript...');

// EXERCISE 1: Print my name
var myName = 'Moe Steinmueller';
console.log('my name is: ', myName);

// EXERCISE 2: Print my age
var age = 28;
console.log('my age is: ', age);

// EXERCISE 3: Calc. and Print the age difference
var juliaAge = 32;
var ageDiff = age - juliaAge;
console.log('Age difference is: ', ageDiff);

// Writing code with conditionals//////////////////////////////////////

// EXERCISE 4: compares the variable with my age with the number 21
if (age >= 21) {
  console.log('You are older than 21.');
} else {
  console.log('You are NOT older than 21.');
}

// EXERCISE 5: compares Julia's age and my age
if (juliaAge > age) {
  console.log('Julia is older than me.');
} else if (juliaAge < age) {
  console.log('Julia is younger than me.');
} else {
  console.log('I have the same age as Julia.');
}

// Sorting an Array ///////////////////////////////////////////
// EXERCISE 1: Sorting an Array
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

// EXERCISE 2: Looping over an Array - prints even nums
let studentsAges = [27, 33, 28, 24, 28, 33, 32, 25, 31];
let j = 0;
while (j < studentsAges.length) {
  if (studentsAges[j] % 2 === 0) console.log(studentsAges[j]);
  j++;
}

// Function that use Arrays /////////////////
// EXERCISE 3: prints the lowest number of an array
function lowestNumber(array) {
  let lowestNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < lowestNum) {
      lowestNum = array[i];
    }
  }
  console.log('the lowest num is:', lowestNum);
}

lowestNumber(studentsAges); //the lowest num is: 24
lowestNumber([23, 100, -1, -18, 43, 29]); //the lowest num is: -18

// EXERCISE 4: prints the biggest number of an array
function biggestNumber(array) {
  let biggestNum = array[0];
  let i = 1;
  while (i < array.length) {
    if (biggestNum < array[i]) {
      biggestNum = array[i];
    }
    i++;
  }
  console.log('the biggest num is: ', biggestNum);
}

biggestNumber([10, 30, 100]); //the biggest num is: 100
biggestNumber(studentsAges); //the biggest num is: 33

// EXERCISE 5: prints the element of an array at the given index
function printElAtIndex(array, index) {
  console.log(array[index]);
}
printElAtIndex(
  [
    3,
    6,
    67,
    6,
    23,
    11,
    100,
    8,
    93,
    0,
    17,
    24,
    7,
    1,
    33,
    45,
    28,
    33,
    23,
    12,
    99,
    100,
  ],
  1
); //6
