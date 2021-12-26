// console.log(window);
// console.log(document);


let p1 = document.getElementsByTagName('p');
console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
console.log(p2);

let p3 = document.getElementById('para')
console.log(p3);



// med query selector

let q1 = document.querySelector('p');
console.log(q1);
let q2 = document.querySelectorAll('p');
console.log(q2);

let q3 = document.querySelector('.paragraph');
console.log(q3);
let q4 = document.querySelectorAll('.paragraph');
console.log(q4);

let q5 = document.querySelector('#para');
console.log(q5);

// q2.forEach(node => [
//   console.log(node)
// ])