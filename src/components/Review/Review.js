import React, { useEffect, useState } from 'react';
import { getStoredCart, deleteFromDb, clearTheCart } from '../../utilities/fakedb';
import fakePd from '../../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import happy from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false)

    const removeProduct = (productKey)=>{
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        deleteFromDb(productKey);
    }

    useEffect(() =>{
        // cart
        const savedCart = getStoredCart();
        const productsKeys = Object.keys(savedCart);
        const fakeData = fakePd.slice(25, 35);
        const count = productsKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(count);
    }, [])

    const placeOrder = () =>{
        setCart([]);
        setOrderPlace(true);
        clearTheCart();
    }
    let thankYou;
    if(orderPlace){
        thankYou = <img src={happy} alt="" />
    }
 
    return (
        <div className='twin-container'>
            <div className="products">
            {
                cart.map(pd => <ReviewItem 
                    removeProduct={removeProduct}
                    key={pd.key} product={pd}></ReviewItem>)
            }
            {
                thankYou
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
                <Link to="/login"><button onClick={placeOrder} className="AddToCartBtn">Place order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;