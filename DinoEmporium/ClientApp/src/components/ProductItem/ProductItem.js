import React from 'react';
//import Modal from 'react-responsive-modal';
import { Button } from 'react';
import './ProductItem.scss';

class ProductItem extends React.Component {

    render() {
        //const { product } = this.props;
         const infoButtons = () => (
             <div>
                 <span className="openForInfo col">
                     <Button outline color="info" onClick={this.openForInfo}>
                         Information
                 </Button>
                 </span>
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
                    
                    {infoButtons()}
                </div>
            </div>
        )
    }
}

export default ProductItem;
//<span className='col-3' onClick={this.addToCart}>{cartButton()}</span>
//<span className='col-3' onClick={this.openForInfo}>{infoButton()}</span>