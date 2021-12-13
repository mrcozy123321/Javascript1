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
// console.log('Med unshift: ' + names);

// Ta bort i början av en array
names.shift();
// console.log('Med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
// console.log('Med push: ' + names);

// Ta bort i sutet av en array
names.pop();
// console.log('Med pop: ' + names);

// Ändra ett specifikt värde i en array
// names[1] = 'Nytt namn';
// console.log('Ändrat: ' + names);

// names = ['Tommy', 'Annika']; // Går inte när det är en const

// Hämta ut vilken index plats någonting i en array
// names.indexOf('Daniel'); // get det -1 om det inte finns

// const i = names.indexOf('Daniel');
// names[i] = 'hej';
// names[names.indexOf('Daniel')] = 'hej';
// console.log(names);

// delete - tar bort värdet på en specifik plats i en array
// delete names [1];
// delete names [names.indexOf('hej')];

// console.log(names)

// .splice() - tar bort och/eller lägger till ett värde från en specifik position
names.splice(1, 1); // tar bort 1 från index plats 1
names.splice(1, 0, 'Colin', 'Hans'); // tar bort 0 och lägger till Colin & Hans
names.splice(1, 2, 'Jack'); // tar bort 2 från index plats 1 och lägger till Jack
// console.log(names);
names.splice(names.indexOf('Jack'), 1, 'Tommy', 'Haitem');

// console.log(names)

// Hur lång är en array
// console.log(names.length);

const arrayToAdd = ['Colin', 'Hans'];

// Lägga ihop 2 arrayer
// console.log(names.concat(['Colin', 'Hans'])); // görs bara i consolen (modifierar inte det ursprungliga värdet)
// const newNames = names.concat(['Colin', 'Hans']); // returnerar en ny kombinerad array

// Spread operator

// names.splice(names.length -1, 0, arrayToAdd);
names.splice(names.length -1, 0, ...arrayToAdd);
// names.splice(0, names.length, ...arrayToAdd);
// console.log(names)

const obj = {
  fName: 'Daniel',
  lName: 'Mrkoci'
}

const obj2 = {
  email: 'daniel@wiklunds.nu',
  obj
}

// ...obj
const obj3 = {
  email: 'daniel@wiklunds.nu',
  ...obj
}


// console.log(obj2);
// console.log(obj3);


const newNames = ['Aa', 'Bb', '1a', '2a', 'aa', 'bb'];
const numbers = [5, 6, 7, 8, 2, 1, 9, 10, 11 ,12, 30, 40];

console.log(names);

// names.sort();   // Sortera i bokstavsordning
// console.log(names);
// names.reverse();    // Vänder på arrayen så först blir sist osv.
// console.log(names);

// names.sort().reverse();   // Sortera i bokstavsordning baklänges
// console.log(names);

newNames.sort();
console.log(newNames)

numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);