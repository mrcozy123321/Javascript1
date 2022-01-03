const regForm = document.querySelector('#regForm');

const validateFirstName = () => {
  const firstName = document.querySelector('#firstName');
  const firstNameError = document.querySelector('#firstName-error');
  if(firstName.value === '') {
    firstNameError.innerText = 'You must enter a first name.'
  }
  else if(firstName.value.length < 2) {
    firstNameError.innerText = 'You have to enter at least two letters'
  }
  else {
    firstNameError.innerText = ''
  }
}
const validateLastName = () => {
  const lastName = document.querySelector('#lastName');
  const lastNameError = document.querySelector('#lastName-error');
  if(lastName.value === '') {
    lastNameError.innerText = 'You must enter a last name.'
  }
  else if(lastName.value.length < 2) {
    lastNameError.innerText = 'You have to enter at least two letters'
  }
  else {
    lastNameError.innerText = ''
  }
}

const validate = (id) => {

  const input = document.querySelector(id);
  const error = document.querySelector(id + '-error');

  if(input.value === '') {
    error.innerText = 'You have to enter a name'
  }
  else if(input.value.length < 2) {
    error.innerText = 'You have to enter at least two letters'
  }
  else {
    error.innerText = '';
  }
}


regForm.addEventListener('submit', e => {
  e.preventDefault();

  // validateFirstName();
  // validateLastName();

  validate('#firstName');
  validate('#lastName');
})