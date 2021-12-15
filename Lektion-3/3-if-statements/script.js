// Booleans true/false

let email = 'daniel.mrkoci@mail.com';

// console.log(email.includes('@')); // true
// console.log(email.includes('12')); // false


// COMPARE STATEMENTS

let number = 13;
let string = '13';

// // Påstår att number är samma som 13
// console.log(number == 13); // true
// console.log(number == 20); //false

// // Påstår att number INTE är samma som 13
// console.log(number != 13); //false
// console.log(number != 20); //true

// // Större än
// console.log(number > 10); // true

// // Större eller lika med
// console.log(number >= 13); // true

// // Mindre än
// console.log(number < 10); // false

// // Mindre eller lika med
// console.log(number <= 13); // true


// // Två = tecken jämför bara värdet
// console.log(number == string);  //true
// // Tre = tecken jämför värdet och datatyp
// console.log(number === string); //false



// IF SATSER
if(true) {
  // gör något här
  // console.log('true');
}
if(false) {
  // hoppa över det här
  console.log('false');
}

// let isLoggedin = false;
// isLoggedin = true;

// if(isLoggedin) {
  // console.log('användaren är inloggad');
  // visa "mina sidor" i navbaren
// }
// if(!isLoggedin) {
  // console.log('användaren är INTE inloggad');
  // dölj "mina sidor" i navbaren
  // visa en länk till login sidan
// }

const names = [];
// names.push('Daniel');

if(names.length) {
  console.log('arrayen names är längre än 0');
}

if(string == number) {
//   console.log('påståendet är sant: string == number');
}
if(string === number) {
  console.log('påståendet är falskt: string === number');
}

/*
  ==  lika med (utan att jämföra datatyp)
  === lika med (jämför datatyp)
  <   mindre än
  >   större än
  <=  mindre eller lika med
  >=  större eller lika med
  !   inte
  &&  och
  ||  eller
*/


let str = '15';
let num = 13;

// console.log(str > num);
// if(str > num) {
//   console.log('str är större än num');
// }
// if(typeof str == typeof num) {
//   console.log('dem har samma datatyp');
// }
// if(typeof str != typeof num) {
//   console.log('str är INTE samma typ som num');
// }

// if(str > num) {
//   if(typeof str == typeof num) {
//     console.log('str är större än num och dem har samma datatyp');
//   }
// }

// if(str > num && typeof str == typeof num) {
//   console.log('str är större än num och dem har samma datatyp');
// }

// if(str > num || typeof str == typeof num) {
//   console.log('str är större än num ELLER dem har samma datatyp');
// }


// if, else if, else

// Bad Practice
let isLoggedin = false;
// if(isLoggedin) {
//   console.log('användaren är inloggad');
//   // visa "mina sidor" i navbaren
// }
// if(!isLoggedin) {
//   console.log('användaren är INTE inloggad');
//   // dölj "mina sidor" i navbaren
//   // visa en länk till login sidan
// }

// Good Practice
// if(isLoggedin) {
//   // Do something
//   console.log('vi är inloggade');
// } else {
//   // Do something else
//   console.log('vi är inte inloggade');
// }


let name = 'Daniel';

// if(name == 'Daniel') {
//   console.log('Namnet är Daniel');
// }
// if(name == 'Hans') {
//   console.log('Namnet är Hans');
// }

if(name == 'Daniel') {
  console.log('Namnet är Daniel');
} 
else if(name == 'Hans') {
  console.log('Namnet är Hans');
}
else if(name == 'Hans') {
  console.log('Namnet är Hans');
}
else {
  console.log('Okänt namn');
}

let value = 5;
if(value === 1) {console.log('Värdet är 1')}
else if(value === 2) {console.log('Värdet är 2')}
else if(value === 3) {console.log('Värdet är 3')}
else if(value === 4) {console.log('Värdet är 4')}
else if(value === 5) {console.log('Värdet är 5')}
else if(value === 6) {console.log('Värdet är 6')}
else if(value === 7) {console.log('Värdet är 7')}
else if(value === 8) {console.log('Värdet är 8')}
else if(value === 9) {console.log('Värdet är 9')}
else if(value === 10) {console.log('Värdet är 10')}
else if(value === 11) {console.log('Värdet är 11')}
else {console.log('Värdet finns inte i if satsen.')}