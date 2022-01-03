const regForm = document.querySelector('#regForm');


regForm.addEventListener('submit', function(e){
  e.preventDefault();
  // let firstName = e.currentTarget[0].value;
  // let lastName = e.currentTarget.lastName.value;
  // let address = e.currentTarget['address'].value;
  let user = {
    firstName: e.currentTarget.firstName.value,
    lastName: e.currentTarget.lastName.value,
    address: e.currentTarget.address.value,
    role: e.currentTarget.role.value
  }
})