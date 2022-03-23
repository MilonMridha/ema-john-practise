import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, seller, price, ratings, img} = props.product;

    
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>Name : {name}</p>
                <p>Price : {price}</p>
                <p>Manufacture : {seller}</p>
                <p>Ratting : {ratings} star</p>
            </div>
            <button onClick={()=>props.handler(props.product)} className='btn-cart'>
                <p className='paragraph'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}>

                </FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;