class Product {
    constructor(name,price,description ){
        this.name=name;
        this.price=price;
        this.description=description;
        inStock=true; 
    }
    display(){
        returns `Name: ${this.name}, Price: ${this.price}, Description:${this.description}`;
    }
}
module.exports = Product;

