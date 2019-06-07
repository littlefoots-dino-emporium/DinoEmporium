import React from 'react';
//import Modal from 'react-responsive-modal';
import { Button } from 'react';
import './ProductItem.scss';

class ProductItem extends React.Component {


    render() {
        //const { products } = this.props;
        const infoButton = () => (
            <div>
                <span className="openForInfo col">
                    <Button outline color="info" onClick={this.openForInfo}>
                        Information
                </Button>
                </span>
            </div>
        );
        const cartButton = () => (
            <div>
                <span className="addToCart col">
                    <Button outline color="danger" onClick={this.addToCart}>
                        Add To Cart
                </Button>
                </span>
            </div>
        );
        return (
            <div className='productCard card'>
                <div className='text-center card-header'>
                    <span className='col-3' onClick={this.addToCart}>{cartButton()}</span>
                    <span className='col-3' onClick={this.openForInfo}>{infoButton()}</span>
                </div>
            </div>
        )
    }
}

export default ProductItem;