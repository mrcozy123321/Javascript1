function Product(name, price, desc) {

  this.productName = name
  this.price = price
  this.description = desc

  this.summary = function() {
    return `The product ${this.productName} costs ${this.price} kr.`
  }

}

function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year

  this.summary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }
}

// insans av ett objekt
const product1 = new Product('Product1', 100, 'this is a product description.');
const product2 = new Product('Product2', 200, 'this is a product description.');

const book1 = new Book('Book1', 'Daniel', '2021')

console.log(book1.summary());
console.log(product1);
