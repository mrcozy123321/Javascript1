const btn = document.querySelector('#btn-alert');
const square = document.querySelector('#square');
const loginForm = document.querySelector('#loginForm');
const firstName = document.querySelector('#firstName');

// const alert1 = () => {
//   alert('Warning')
// }

// btn.addEventListener('click', alert1)
// btn.removeEventListener('click', alert1)

// btn.addEventListener('click', () => {
//   console.log('klickade på knappen')
// })

// btn.removeEventListener('click', () => {
//   console.log('klickade på knappen')
// })
// btn.addEventListener('mousedown', () => {
//   console.log('eventet kördes')
// })
// btn.addEventListener('mouseup', () => {
//   console.log('eventet kördes')
// })
// btn.addEventListener('mouseenter', () => {
//   console.log('eventet kördes')
// })
// btn.addEventListener('mouseleave', () => {
//   console.log('eventet kördes')
// })
btn.addEventListener('mouseover', (e) => {
  console.log('eventet kördes')
})
square.addEventListener('mousemove', event => {
  // console.log(event.offsetX, event.offsetY)
  square.style.background = `rgb(${event.offsetX}, ${event.offsetY}, 0)`
})




// firstName.addEventListener('keyup', (e) => {
//   console.log(e.key)
// })
// firstName.addEventListener('keydown', (e) => {
//   console.log(e.key)
// })
// firstName.addEventListener('focus', (e) => {
//   console.log(this)
//   firstName.classList.add('focus-red')
// })
// firstName.addEventListener('blur', (e) => {
//   firstName.classList.remove('focus-red')
// })
// firstName.addEventListener('blur', function(e){
//   console.log(this)
//   this.classList.remove('focus-red')
// })

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(firstName.value.trim() === '')
    return;

    console.log(firstName.value)

    console.log('validerar formulär')
    console.log('validering klar! skickar till databasen')
})