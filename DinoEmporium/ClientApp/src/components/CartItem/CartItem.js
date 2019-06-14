import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {


    render() {
        const { customerProduct } = this.props;

        return(
            <div className="product-info">
                <h2>{customerProduct.title}</h2>
                <h2>{customerProduct.size}</h2>
                <h2>{customerProduct.image}</h2>
                <h2>{customerProduct.price}</h2> 
            </div>
        )};

}      

export default CartItem
            
            
            
            
            
            
            
            
          