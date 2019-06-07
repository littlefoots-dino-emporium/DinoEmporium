import React from 'react';
import './ProductItem.scss';

class ProductItem extends React.Component {


    render() {
        const { product } = this.props;
        return (

            <div className='card-body productCard'>
            <img className='product-image' src={product.image} alt='product' />
            <li className='product-title'>{product.title}</li>
            <li className='plant-price'><i>${product.price}</i></li>
            <li className='plant-description'>{product.description}</li>
            <li className='plant-quantity'>We have <b>{product.quantity}</b> in stock.</li>
            </div>
        )}
}

export default ProductItem;