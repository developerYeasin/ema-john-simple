import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakePd from '../../fakeData/index';
import Product from '../Product/Product';

const ProductDetails = () => {
    const fakeData = fakePd.slice(25, 35);
    console.log(fakeData)
    const {productKey} = useParams();
    let product = fakeData.find(pd => pd.key === productKey);

    return (
        <div>
            <h1> {productKey} this product details</h1>
           
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
    
};

export default ProductDetails;