/*
  4 pelare inom Objektorienterat programmering (OOP)

  *Encapsulation
  *Inheritance
  *Polymorphism
  *Abstraction

  <= ES5
  *Inheritance

  => ES6
  *Encapsulation
  *Polymorphism

*/

// Inheritance - Arv mellan klasser

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  displayName() {
    // return `${this.firstName} ${this.lastName}`
    console.log(`${this.firstName} ${this.lastName}`);
  }

}

class Teacher extends Person {
  constructor(firstName, lastName, skills) {
    super(firstName, lastName)
    this.skills = skills
    this.teacherId = Date.now().toString()
  }

  displaySkills() {
    this.skills.forEach(skill => {
      console.log(skill);
    })
  }

}

class Student extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName)
    this.studentId = Date.now().toString()
  }

  displayName() {
    console.log('Student - ');
    super.displayName();
  }

}


const t1 = new Teacher ('Joakim', 'Wahlström', ['Javascript', 'HTML', 'CSS', 'React'])
// console.log(t1.displayName());
// t1.displaySkills()

const person = new Person('Simon', 'Mrkoci')
// console.log(person.displayName());
// console.log(person.displaySkills());

const s1 = new Student('Daniel', 'Mrkoci')
// console.log(s1.displayName());
// console.log(s1);

s1.displayName()