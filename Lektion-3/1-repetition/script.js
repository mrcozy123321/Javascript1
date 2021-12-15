// ARRAYS
// En lista med ett eller flera värden

const array = [
  {firstName: 'Daniel', lastName: 'Mrkoci', age: 28},
  {firstName: 'Simon', lastName: 'Mrkoci', age: 27},
  {firstName: 'Jonatan', lastName: 'Mrkoci', age: 22}
];


// Hämta ut information från en array
// console.log(array[2]);
// console.log(array[2].firstName);

// Lägg till i början
// array.unshift({firstName: 'Vlatko', lastName: 'Mrkoci', age: 60});

const vlatko = {
  firstName: 'Vlatko', 
  lastName: 'Mrkoci', 
  age: 60
};
array.unshift(vlatko);

// Tar bort i början
array.shift();

// Lägg till i slutet
array.push(vlatko);

// Ta bort i slutet
// array.pop();

// console.log(array);


// Hämta index platsen
// console.log(family.indexOf('Simon'));
// console.log(array.indexOf(vlatko))


// Hitta ett objekt i en array

const indexOfVlatko = array.findIndex((person) => {
  return person.firstName == 'Vlatko';
});

// console.log(indexOfVlatko);

// Hitta ett specifikt objekt
const person = array.find((p) => {
  return p.firstName == 'Daniel';
});

// person.firstName = 'Erik';

// console.log(person);

const family = ['Daniel', 'Simon', 'Jonatan', 'Maria', 'Vlatko'];

family.sort();

// console.log(family);

family.splice(family.indexOf('Daniel') + 1, 0, 'Hans', 'Joakim');

// console.log(family);

let familyMember = family.pop();

// console.log(familyMember);
family.unshift(familyMember);

// console.log(family);

let counter = 0;
family.forEach(() => {
  counter++;
  // console.log(counter);
});

// console.log(family.length);

const greetings = family.map((name) => {
  return 'Hejsan ' + name;
});

greetings.forEach((greet) => {
  // console.log(greet);
});

// let selected = array.map((person) => {
//   return person.lastName == 'Mrkoci';
// });

// let selected = array.filter((person) => {
//   return person.lastName == 'Mrkoci';
// });

// let selected = array.filter((person) => person.lastName == 'Mrkoci').map((person) => person.firstName).sort();


// console.log(selected);

// const shoppingList = ['Mjölk', 'Ägg', 'Bröd'];

// console.log(shoppingList.includes('Ägg'));


// SET

const shoppingList = new Set();
shoppingList.add('Mjölk');
shoppingList.add('Ägg');
shoppingList.add('Smör');
shoppingList.add('Bröd');
shoppingList.add('Smör');
shoppingList.add('Smör');
shoppingList.add('Smör');

console.log(shoppingList);

const list = [];
shoppingList.forEach((item) => {
  console.log(item);
  list.push(item);
});

// const list = Array.from(shoppingList);
// const list = [...shoppingList];

console.log(list);