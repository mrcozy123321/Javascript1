import User from './models/UserModel.js'

const form = document.querySelector('#form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const output = document.querySelector('#output')

let users = [];

const newUser = user => {
  return `
  <div id=user${user.id} class="card text-center p-3 mb-3 animate">
    <h3>${user.firstName} ${user.lastName}</h3>
    <small>${user.email}</small>
  </div>
  `
}

const addRemoveOnClick = (user) => {
  document.querySelector(`#user${user.id}`).addEventListener('click', function() {
    this.classList.add('slideout')
    this.addEventListener('animationend', function() {
      users.splice(users.indexOf(user), 1)
      this.remove()
      localStorage.setItem('usersArray', JSON.stringify(users))
    })
  })
}

const loadUsersOnStart = () => {
  const _users = JSON.parse(localStorage.getItem('usersArray'))
  if(_users) {
    users = _users
    users.forEach(user => {
      output.insertAdjacentHTML('beforeend', newUser(user));
      addRemoveOnClick(user);
    })
  }
}
loadUsersOnStart();

const createUser = (firstName, lastName, email) => {
  const user = new User(firstName, lastName, email);
  users.push(user);
  localStorage.setItem('usersArray', JSON.stringify(users));

  output.insertAdjacentHTML('beforeend', newUser(user));
  addRemoveOnClick(user);
}




form.addEventListener('submit', e => {
  e.preventDefault();

  if(firstName.value.trim() !== '' && lastName.value.trim() !== '' && email.value.trim() !== '') {
    createUser(firstName.value, lastName.value, email.value);
    form.reset();
  }
})