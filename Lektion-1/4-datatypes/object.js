/*
  OBJECT
  ------------------------------------------

  Innehåller ett eller flera värden

  skrivs som key:value par
  Vi kommer att arbeta med JSON (JavaScript Object Notation)

  person = {}
  var person = {}
  let person = {}
  const person = {}

  JS Objekt
  const person = {
    firstName: 'Daniel',
    lastName: 'Mrkoci',
  };

  const person = {firstname: 'Daniel', lastName: 'Mrkoci'};

  JSON Objekt
  {
    "firstName": "Daniel",
    "lastName": "Mrkoci"
  };
*/


const user = {
  firstName: 'Daniel',
  lastName: 'Mrkoci',
  age: 28,
  address: {
    street: 'Mobergsgatan',
    nr: 10,
    postalCode: '72220',
    city: 'Västerås'
  },
  isActive: true,
  phoneNumbers: [
    '076-7631888',
    '021-130009'
  ]
};

// console.log(user);
// console.log(user.firstName);
// console.log(user.address.city)

// user = {
//   email: 'daniel@wiklunds.nu'
// }

user.firstName = 'Hans';
user.email = 'daniel@wiklunds.nu'

let key = 'lastName';
key = 'age';

// console.log(user.key);

// console.log(user);
// console.log(user['lastName']);
// console.log(user[key]);

// konvertera till JSON
let json = JSON.stringify(user);
// console.log(json);

//konvertera från JSON till JS
let js = JSON.parse(json);
console.log(js);

user.firstName = 'Daniel';

console.log(`Användaren heter ${user.firstName} ${user.lastName} och bor i ${user.address.city}.`);

// Destructure
const { firstName, lastName, address: { city } } = user;
// const firstName = user.firstName;

console.log(firstName);
console.log(`Användaren heter ${firstName} ${lastName} och bor i ${city}.`);
