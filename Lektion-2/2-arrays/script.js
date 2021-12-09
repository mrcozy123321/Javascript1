// ARRAYS - en lista med ett eller flera värden

// names = [];
// var names = [];
// let names = [];
// const names = [];

// Vi vill hålla samma datatyp i en array
const array = [0, 1, 2, 3, 4, 5, 6, 7];

// GÖR INTE SÅHÄR!
// const multiArray = ['12', 12, true, {firstName: 'Daniel'}];

// Det här är också samma
// I det här fallet är datatypen objekt, objekten i sig kan innehålla flera datatyper men man vill hålla dem strukturerade likadant då
const users = [
  {firstName: 'Daniel', lastName: 'Mrkoci', age: 28},
  {firstName: 'Simon', lastName: 'Mrkoci', age: 27},
  {firstName: 'Jonatan', lastName: 'Mrkoci', age: 22}
];

const names = ['Daniel', 'Hans', 'Jonas'];

// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// Lägga till i början av en array
names.unshift('Colin')
console.log('Med unshift: ' + names);

// Ta bort i början av en array
names.shift();
console.log('Med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
console.log('Med push: ' + names);

// Ta bort i sutet av en array
names.pop();
console.log('Med pop: ' + names);

// Ändra ett specifikt värde i en array
names[1] = 'Nytt namn';
console.log('Ändrat: ' + names);

// names = ['Tommy', 'Annika']; // Går inte när det är en const

console.log(names.indexOf('Daniel')); // get det -1 om det inte finns

// const i = names.indexOf('Daniel');
// names[i] = 'hej';
names[names.indexOf('Daniel')] = 'hej';
console.log(names);