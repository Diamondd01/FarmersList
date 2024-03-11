class Customer {
    constructor(name,email,shippingAddress){
        this.name=name;
        this.shippingAddress=shippingAddress;
        this.email=email;
        this.orderHistory=[];
    }
    addToOrderHistory(cart){
        this.orderHistory.push(cart);
    }
}
module.exports=Customer