// SCOPE

let age = 34;   // global scope

if(true) {
  let age = 50; // lokal scope
  let fName = 'Daniel';
  // console.log('inne i 1:a kodblocket', age, fName);
  // console.log('inne i 1:a kodblocket', name);


  if(true) {
    let age = 100; // lokal scope
    // console.log('inne i kodblock 1.2', age, fName);
    var global = 'var har global scope';   // global scope
  }

}

if(true) {
  let age = 66;
  let fName = 'Simon';
  // console.log('inne i 2:a kodblocket', age, fName);
}

// console.log('utanför något block', age);
// console.log('utanför något block', global);
// console.log('utanför något block', fName);



// FUNCTIONS
// Till för att underlätta så vi slipper repetera kod

// hoisting
// hej();

// deklarera en funktion
function hej() {
  console.log('hej på dig');
}

const greet = function() {
  console.log('hur är läget?');
}

// kör en funktion
hej();
greet();
