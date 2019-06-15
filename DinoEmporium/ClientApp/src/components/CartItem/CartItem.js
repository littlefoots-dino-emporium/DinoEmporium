import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {


    render() {
        const { customerProduct } = this.props;
        console.log(customerProduct);

        return(
            <div>

            <div className="product-info">
                <h2>Title:{customerProduct.title}</h2>
                <h2>{customerProduct.image}</h2>
                <h2>Size:{customerProduct.size}</h2>
                <h2>Price:{customerProduct.price}</h2> 
                </div>
            </div>
        )};

}      

export default CartItem
            
            
            
            
            
            
            
            
          