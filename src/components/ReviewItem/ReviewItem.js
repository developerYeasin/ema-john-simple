import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const viewStyle ={
        borderBottom: "1px solid lightgray",
        marginBottm: "5px",
        paddingBottom: "5px",
        marginLeft: "200px"
    }
    return (
        <div style={viewStyle}>
            <h2 className='product-name'>{name}</h2>
            <p>Price : {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.removeProduct(key)} className='AddToCartBtn'>Remove</button>
            </div>
    );
};

export default ReviewItem;