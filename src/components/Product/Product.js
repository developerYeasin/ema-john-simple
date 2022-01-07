import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Product = (props) => {
  // console.log(props);
  const {name, img, seller, price, stock, key} = props.product;

  return (
    <div className="product">
<div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
        {/* <br /> */}
        <p><small>by: {seller}</small></p>
        <p>&{price}</p>
        <p><small>Only {stock} left in stock - Order soon</small></p>
        {props.showAddToCart && <button 
        onClick={() => props.handleAddProduct(props.product)}
        className="AddToCartBtn"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
      </div>
    </div>
  );
};

export default Product;
