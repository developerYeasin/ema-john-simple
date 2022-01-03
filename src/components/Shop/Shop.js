import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.JSON';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch(fakeData)
    .then(res => res.json())
    .then(data => setProducts(data.slice(25, 35)));
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
           <div className="products">
                {
                    products.map(product => <Product 
                        handleAddProduct={handleAddProduct}
                        product={product
                        }>{product.name}</Product>)
                }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;