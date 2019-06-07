import React from 'react';
import './ProductItem.scss';

class ProductItem extends React.Component {


    render() {
        const { product } = this.props;
        return (
            <div>
                <div className="card-group">
                    <ul className="card bg-transparent">
                        <img className='product-image' src={product.image} alt='product' />
                        <ul className='card-body'>
                            <li className='product-title'>{product.title}</li>
                            <li className='plant-price'><i>{product.price}</i></li>
                            <li className='plant-description'>{product.description}</li>
                        </ul>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductItem;