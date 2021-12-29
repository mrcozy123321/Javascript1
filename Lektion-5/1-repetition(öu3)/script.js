const printName = (name) => {
  // console.log('Hello ' + name);
}

printName('Daniel');

for(let i = 0; i < 5; i++) {
  printName('Daniel');
}

// const numberToColor = (nr) => {
//   if(nr < 0) {
//     answer = 'Black';
//   } else {
//     switch(true) {
//       case nr < 13:
//         // return 'White'
//         answer = 'White';
//         break;
//       case nr < 19:
//         // return 'Green'
//         answer = 'Green';
//         break;
//       case nr < 26:
//         // return 'Red'
//         answer = 'Red';
//         break;
//       case nr < 100:
//         // return 'Blue'
//         answer = 'Blue';
//         break;
//       default:
//         // return 'Black'
//         answer = 'Black';
//     }  
//   }
//   console.log(answer);
// }


const numberToColor = (nr) => {
  if(nr >= 0 && nr <= 12) {
    console.log('White')
  }
  else if(nr >= 13 && nr <= 18) {
    console.log('Green')
  }
  else if(nr >= 19 && nr <= 25) {
    console.log('Red')
  }
  else if(nr >= 26 && nr <= 99) {
    console.log('Blue')
  }
  else {
    console.log('Black')
  }
}

// numberToColor(10);
// numberToColor(18);
// numberToColor(22);
// numberToColor(69);
// numberToColor(18124);
// numberToColor(-1241);
// console.log(numberToColor(10));
// console.log(numberToColor(16));
// console.log(numberToColor(24));
// console.log(numberToColor(88));
// console.log(numberToColor(109989));
// console.log(numberToColor(-124142));


const namesArray = ['Daniel', 'Simon', 'Maria', 'Vlatko', 'Jonatan']
// const namesDIV = document.querySelector('#names');

// namesArray.forEach(name => {
//   namesDIV.innerHTML += `<p>${name}</p>`
// })

// let namesDIV = document.createElement('div')
// namesDIV.id = 'names';

// document.body.appendChild(namesDIV);

// namesArray.forEach(name => {
//   let p = document.createElement('p');
//   p.innerText = name;
//   namesDIV.appendChild(p);
// })

const form = document.querySelector('#form');
const input = document.querySelector('#input');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(input.value);
  input.value = '';
})

// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(input.value);
//   input.value = '';
// })

