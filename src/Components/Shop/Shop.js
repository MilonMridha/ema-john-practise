import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    const addToCartHandler = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='container'>
               {
                    products.map(product => <Product 
                        product={product}
                        key={product.id} 
                        handler={addToCartHandler}
                        >
                        </Product>)
                }
            </div>
            <div className='cart-summary'>
                <h3>Order Summary:</h3>
                <p>Selected Item :{cart.length} </p>
                <p>Total Price : $</p>
                <p>Total Shipping Charge :</p>
                <p>Tax :</p>
                <p>Grand total :</p>
                <button className='clear-cart'>
                    <p>Clear Cart</p>
                </button>
                <button className='review-cart'>
                    <p>Review Order</p>
                </button>
            </div>
        </div>
    );
};

export default Shop;