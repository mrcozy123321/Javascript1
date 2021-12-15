// LOOPS

const namesArray = ['Daniel', 'Simon', 'Jonatan', 'Maria', 'Vlatko'];
const usersArray = [
  { name: 'Daniel', email: 'daniel@wiklunds.nu', age: 28, status: true },
  { name: 'Simon', email: 'simon@wiklunds.nu', age: 27, status: false },
  { name: 'Jonatan', email: 'jonatan@wiklunds.nu', age: 22, status: false },
  { name: 'Maria', email: 'maria@wiklunds.nu', age: 58, status: false },
  { name: 'Vlatko', email: 'vlatko@wiklunds.nu', age: 60, status: true }
];

// FOR Loops - Loopar ett givet antal gånger

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   console.log(namesArray[i]);
// };

// Loopar igenom hela en array
// for(let i = 0; i < namesArray.length; i++) {
//   console.log(i + ' - ' + namesArray[i]);
// }


// FOR OF Loops - Loopar igenom en hel array

// for(let name of namesArray) {
//   console.log(name);
// };

// for(let user of usersArray) {
//   console.log(user.name);
// };


// WHILE Loops
// Kom ihåg att inkrementera i, annars blir det en oändlig loop

// let i = 1;

// while( i < 5 ) {
//   console.log('while: ' + i);
//   i++;
// };

// console.log(i < 5);
// console.log('i är: ' + i);


// // DO WHILE
// // Kommer alltid att köras minst en gång

// do {
//   console.log('do while: ' + i);
//   i++;
// } while (i < 7);

// console.log('i är: ' + i);

