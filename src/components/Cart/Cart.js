import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    cart.forEach(product => total = (total + product.price));

    let shipping = 0;
    if(total > 30){
        shipping = 0;
    } else if(total > 15){
        shipping = 5;
    } else if(total > 0){
        shipping = 15;
    }
    let tax = total / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summery</h3>
               <h4>Items order: {props.cart.length}</h4>
               <p>Product price: {total.toFixed(2)}</p>
               <p>Shipping cost: {shipping}</p>
               <p>Tax + vat: {tax.toFixed(2)}</p>
               <h3>Total price: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;