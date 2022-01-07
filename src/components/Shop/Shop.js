import React, { useEffect, useState } from "react";
import fakePd from "../../fakeData/index";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = fakePd.slice(25, 35);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getStoredCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map((key) => {
      const product = fakePd.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(previousCart); 
  }, []);

  const handleAddProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let newCart;
    let count = 1;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  return (
    <div className="twin-container">
      <div className="products">
        {products.map((product) => (
          <Product
            showAddToCart={true}
            key={product.key}
            handleAddProduct={handleAddProduct}
            product={product}
          >
            {product.name}
          </Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <Link to="/review"><button className="AddToCartBtn">Review Order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
