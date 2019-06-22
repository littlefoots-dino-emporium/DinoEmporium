import React from 'react';
import './CartItem.scss';
import { Button } from 'reactstrap';

class CartItem extends React.Component {


    render() {
        const { customerProduct } = this.props;
        console.log(customerProduct);

        return(
            <div>

            <div className="product-info">
                <h2>Title:{customerProduct.title}</h2>
                <img src={customerProduct.image} alt="cart items"/>
                <h2>Size:{customerProduct.size}</h2>
                <h2>Price:{customerProduct.price}</h2> 
                <button className="btn btn-danger"><i class="fas fa-trash-restore"></i></button>
                </div>
            </div>
        )};

}      

export default CartItem
            
            
            
            
            
            
            
            
          