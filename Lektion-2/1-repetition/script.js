// CONSOLE

//Felsökning om något går fel
// let app;

// console.log('Vanligt meddelande');
// console.warn('Varnings meddelande');
// console.error('Felmeddelande');

//DOM
// document.body.innerText = '<h1>Hejsan</h1>';
// document.body.innerHTML = '<h1>Hejsan</h1>';
// document.body.createElement('div').innerText = 'hej'; // ger ett felmeddelande i consolen
// document.body.appendChild(document.createElement('div'));

// const results = document.querySelector('#results')
// // const input = document.querySelector('.input-class');
// const input = document.getElementsByName('input-name')[0];

// let res = document.querySelector('#input-id').value;

// res = input.classList

// results.innerText = res;
// console.log(input);
// console.log(res);


// VARIABLES

// name = 'Daniel';          // deklarerar något glovalt. GÖR INTE SÅHÄR!
// var name = 'Daniel';      // deklarerar någonting globalt. UNDVIK DET HÄR!
// let name = 'Daniel';      // deklarerar någonting lokalt i ett scope. GÖR DET HÄR!
// const name = 'Daniel';       // deklarerar någonting skrivskyddat lokalt. GÖR DET HÄR!


// DATATYPER

/*
  string    - text
  number    - siffror, heltal, decimaltal
  boolean   - true/false
  null      - tomt, (manuellt)
  undefined - tomt / oidentifierat (automatiskt)
  object    - innehåller ett eller flera andra värden som key:value pairs
  array     - en lista på ett eller flera värden
*/

// String - text

//let name = 'Daniel';
// let age = '28';

// let name = "Daniel";
// let name = 'Daniel';
// let name = `Daniel`;    //när vi vill använda placeholders till variabler (template literal)

// let text = "Använder \"citat\" och enkel 'fnuttar och' variabeln " + name;
// let text = 'Använder "citat" och enkel \'fnuttar\' och variabeln ' + name;
// let text = `     Använder "citat" och enkel 'fnuttar' och variabeln ${name}`;


// results.innerText = text;
// console.log(text);

// let email = 'daniel@wiklunds.nu';
// let number = 3;
// let num1 = '23';

// console.log(text.length);
// console.log(text.indexOf('och'));
// console.log(text.lastIndexOf('och'));
// console.log(text.replace('och', '&'));
// console.log(text.replaceAll('och', '&'));
// console.log(text.toUpperCase());
// console.log(text.toLocaleUpperCase());
// console.log(text.toLowerCase());
// console.log(text.concat(name));
// console.log(text.concat(' hej'));
// console.log(text.trim());
// console.log(text.split(' '));
// console.log(email.split('@'));

// console.log(number);
// console.log(number.toString());

// console.log(num1);
// console.log(parseInt(num1));
// console.log(+num1);

// console.log(text);

// NUMBER - till för nummer av olika slag, heltal och decimaler

// let value = 1;
// value = 'Hej';

// console.log(value);

// JS (.js)     let value = 1;    DET GÅR ATT GÖRA value = 'Hej';
//C# (.cs)      int value = 1;    DET GÅR DÅ INTE ATT GÖRA value = 'Hej';
//TS (.ts)      value:number = 1; DET GÅR DÅ INTE ATT GÖRA value = 'Hej';

// console.log(1 + '5');
// console.log(2 + 5 * 3);
// console.log(11 % 2);
// console.log(1e+6);
// console.log(1e-6);

// console.log(Number(true));
// console.log(Number(false));

// let value = 5;

// value += 2;
// value ++;

// console.log(value += 2); // Manipulerar ursprungsvärdet
// console.log(value)


// console.log(Number(10));
// console.log(Number('10'));
// console.log(Number('10.23'));
// console.log(Number('10,23'));
// console.log(Number('Daniel'));
// console.log(Number('                 10.23'));
// console.log(Number('10 23'));

// console.log(parseInt('23h'));
// console.log(parseInt('23h   dance  234'));

// console.log(Math.PI);
// console.log(Math.sqrt(4));
// console.log(Math.random() * 100);

// function random(min, max) {
//   const num = Math.floor(Math.random() * (max - min +1)) + min;
//   return num;
// }

// console.log(random(3, 7));

// OBJECT

const user = {
  firstName: 'Daniel',
  account: {
    email: 'daniel@wiklunds.nu',
    password: 'Daniel123'
  }
};

user.lastName = 'Mrkoci';
user.account.password = '12345';

// let q = new URLSearchParams(window.location.search).get('q')

// console.log(q);
// console.log(user.firstName);
// console.log(user[q]);

// JSON JavaScript Object Notation
// json = '{"firstName": "Daniel", "lastName": "Mrkoci"}'

const json = JSON.stringify(user);
const js = JSON.parse('{"firstName": "Daniel", "lastName": "Mrkoci"}');

// console.log(user);
// console.log(json);
// console.log(js);

// ta bort ett värde
// delete user.account;
// console.log(user);

// destructure
const { firstName, lastName } = user;
const { firstName: fName, lastName: lName } = js;

let text = `Hej jag heter ${firstName} ${lastName}`;
let text3 = `Hej jag heter ${fName} ${lName}`;
let text2 = `Hej jag heter ${user.firstName} ${user.lastName}`;

console.log(text);
console.log(text3);
console.log(text2);