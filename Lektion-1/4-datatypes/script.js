/*
  JavaScript Datatyper
  ----------------------------------------------

  String      =     Text, 'abc', '123'
  Number      =     Heltal, decimaltal
  Boolean     =     Sant/Falskt, True/False
  null        =     Tomt, (manuellt)
  undefined   =     Odefinierat, tomt (automatiskt)
  Object      =     ett objekt/klass innehåller ett eller flera värden
  Array       =     en lista med värden, Array är av datatypen OBJECT

*/

let datatype;

console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = true;
console.log(typeof datatype);
datatype = {};
console.log(typeof datatype);
datatype = [];
console.log(typeof datatype);
datatype = null;
console.log(typeof datatype);

/* 
  Strings 

  let name = "Daniel";
  let name = 'Daniel';          - Denna brukar vi oftast använda
  let name = `Daniel`;        - Använd denna när du ska göra en template literal (PLaceholders)  (shift + `, tryck mellanslag för att göra en, tryck två gånger på knappenför två)

*/


let text = "Jag är \"bäst\" i 'hela' världen";
text = 'Jag är "bäst" i \'hela\' världen';
text = `Jag är "bäst" \`i\` 'hela' världen`;

let name = 'Daniel';
let age = "28";

text = 'Jag heter ' + name + ' och jag är ' + age + ' år gammal';
text = "Jag heter ' + name + ' och jag är ' + age + ' år gammal";
text = `Jag heter ${name} och är ${age} år gammal`;

// console.log(text)

let myName = 'Daniel Mrkoci';

// console.log(text.length);
// console.log(text[13]);
// console.log(text.indexOf('e'));

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.split(' '));

let names = myName.split(' ');
// console.log(names)
let firstName = names[0];
let lastName = names[1];

let text2 = `       Mitt förnamn är ${firstName} och efternamnet är ${lastName}.       `;
// console.log(text2);
document.body.innerText = `Hej ${firstName}, Välkommen tillbaka!`;

// console.log(text2.trim());



