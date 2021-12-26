let scoreOne = 50;
let scoreTwo = scoreOne;

// console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`);

scoreOne = 100;

// console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`);

const userOne = { name: 'Daniel', age: 29};
const userTwo = userOne;
const user3 = {...userOne}

console.log(userOne, userTwo, user3);
userOne.name = 'Simon';
userOne.age = 27;

console.log(userOne, userTwo, user3);


const users = [
  {id: 1, name: 'Daniel', age: 29},
  {id: 2, name: 'Simon', age: 27},
  {id: 3, name: 'Jonatan', age: 22},
]

console.log(users);

// const simon = users.find(user => user.name === 'Simon');
// console.log(simon);

// simon.age = 100;

// console.log(users)
// console.log(simon)

// users.map(user => {
//   if(user.id === 1) {
//     user.age = 200000
//   }
// })

const users2 = [...users]
const users3 = users

console.log(users, users2, users3)

users[0] = {id: 7, name: 'Hejsan'}