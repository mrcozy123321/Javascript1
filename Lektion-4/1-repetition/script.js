// IF Satser

/*
  ==    jämför inte datatyp   1 == '1'
  ===   jämför även datatyp   1 === 1
*/

const notLoggedIn = document.querySelector('#notLoggedIn');
const loggedIn = document.querySelector('#loggedIn');

const signedIn = true;

const toggleLogin = () => {
  if(signedIn) {
    notLoggedIn.classList.add('d-none');
    loggedIn.classList.remove('d-none');
  } else {
    loggedIn.classList.add('d-none');
    notLoggedIn.classList.remove('d-none');
  }
}
toggleLogin();

let value = 1;

if(value === 1) {}
else if(value === 2) {}
else {}


// SWITCH      är som en ===
switch(value) {
  case 1:
    // Do something
    break;
  case 2:
    // Do something
    break;
  case 3:
    // Do something
    break;
  case 4:
    // Do something
    break;
  case 5:
    // Do something
    break;
  case 6:
    // Do something
    break;
  default:
    // Do something
};

const array = [11, 22, 33, 44, 55];

for(let i = 0; i < array.length; i++) {
  // console.log(i)
  // console.log(array[i])
};

const foodItemsUL = document.querySelector('#foodItems');

const items = ['Pannkakor', 'Köttbullar', 'Julskinka'];

for(let item of items) {
  foodItemsUL.innerHTML += `<li>${item}</li>`
};

items.forEach(item => {
  let li = document.createElement('li');
  li.innerHTML = `<a href="#">${item}</a>`

  foodItemsUL.appendChild(li)
});

const users = [
  { id: 1, name: 'Daniel', value: false},
  { id: 2, name: 'Simon', value: false},
  { id: 3, name: 'Jonatan', value: false},
  { id: 4, name: 'Elias', value: false}
];

// users.forEach(user => {
//   foodItemsUL.innerHTML += `<li>${user.name}</li>`
// })

const newUsers = users.map(user => {
  if(user.id === 3) {
    user.value = true;
    return user
  }
  return user
})
// console.log(newUsers)

const filteredUsers = newUsers.filter(user => {
  // return user.id !== 2
  // return user.value == true
})
// console.log(filteredUsers);

