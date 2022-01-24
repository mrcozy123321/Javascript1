// Polymorphism - Arv mellan klasser

class Monster {
  constructor(name) {
    this.name = name
  }
  attack() {
    console.log(`the monster ${this.name} is hitting you!`);
  }
}

class FireMonster extends Monster {
  // constructor(name) {
  //   super(name)
  // }

  attack() {
    super.attack()
    console.log(`${this.name} is also throwing a fireball at you`);
  }
}

const fm = new FireMonster('Blazor')

fm.attack()