class Cart {
    constructor() {
      this.products = []; // Array to store Product instances
      this.total = 0; // Total cost of all products
    }
  
    addProduct(product) {
      this.products.push(product); // Adds product to the products array
      this.total += product.price; // Updates the total property
    }
  
    removeProduct(product) {
      const index = this.products.findIndex(p => p === product);
      if (index > -1) {
        this.total -= this.products[index].price; // Updates the total property
        this.products.splice(index, 1); // Removes product from the products array
      }
    }
  }
  
  module.exports = Cart;