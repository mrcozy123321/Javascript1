const product1 = {
  productName: 'Product 1',
  description: 'This is a product',
  price: 100,

  summary: function() {
    return `The product ${this.productName} costs ${this.price}`
  }
}

const product2 = {
  productName: 'Product 2',
  description: 'This is a product',
  price: 200,

  summary: function() {
    return `The product ${this.productName} costs ${this.price}`
  }
}

console.log(product1.summary());
