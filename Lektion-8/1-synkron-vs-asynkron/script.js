const timer = (time, cb) => {
  setTimeout(() => {
    cb()
  }, time)
}

console.log(1);
console.log(2);

// synkron kod, blockerar så koden inte kör innan det är klart
for(let i = 0; i < 3; i++) {
  console.log('blocking ' + i)
}



// asynkron kod, blokerar inte utan den körs när den är klar
timer(2000, () => {
  console.log('timer klar')
});

console.log(3);
console.log(4);