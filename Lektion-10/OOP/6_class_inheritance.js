class Animal {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  makeSound() {
    return `${this.name} makes a generic sound!`
  }
}

class Dog extends Animal {
  constructor(name, gender, age) {
    super(name, gender)
    this.age = age
  }
}

class Cat extends Animal {
  
  spinning() {
    return `${this.name} spinns!`
  }
}

const dog2 = new Dog('Ace', 'Hane', 14)
console.log(dog2);


const dog = new Dog('Bob', 'Hona', 7)
const cat = new Cat('Frans')

console.log(dog);
console.log(dog.makeSound());
console.log(dog.age);

console.log(cat);
console.log(cat.spinning());
console.log(cat.makeSound());

