class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.revised = false
  }

  summary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }
  
  bookAge() {
    const years = new Date().getFullYear() - this.year
  
    switch(years) {
      case 0 :
        return `${this.title} is less then a year old.`
      case 1 :
        return `${this.title} is 1 year old.`
      default:
        return `${this.title} is ${years} years old.`
    }
  }
  
  revise(year) {
    this.year = year
    this.revised = true
  }
}

const book1 = new Book('Drömmar', 'Daniel', '2019')

console.log(book1.summary());
console.log(book1);
