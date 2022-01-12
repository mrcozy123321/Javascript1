// fetch('user.json')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


const users = [];

fetch('user.json')
  .then(res => res.json())
  .then(data => {
    users.push(data)
    console.log(users)
  })
  .catch(err => console.log(err.message))

console.log(users)


// fetch('user.json')
//   .then(res => res.json())
//   .then(user => {
//     console.log(user);
//     return fetch('todos.json')
//   })
//   .then(res => res.json())
//   .then(todos => {
//     console.log(todos);
//   })
//   .catch(err => console.log(err))