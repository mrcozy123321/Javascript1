const form = document.querySelector('#form');
const input = document.querySelector('#input');
const feedback = document.querySelector('#feedback');

const randomNr = Math.ceil(Math.random() * 100);
let counter = 0;



const printFeedbackToDOM = (string, correct) => {
  if(!correct)
    return  feedback.innerText = string;
  
  feedback.innerText = string + ' Number off guesses: ' + counter
}

const checkGuess = () => {
  if(randomNr > input.value) {
    printFeedbackToDOM('Too Low', false);
  }
  else if(randomNr < input.value) {
    printFeedbackToDOM('Too High', false);
  }
  else {
    printFeedbackToDOM('You guessed correctly!!', true);
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  counter ++;
  checkGuess(input.value);
})