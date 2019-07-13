import React from 'react';
import './CartItem.scss';
import { Button } from 'reactstrap';

class CartItem extends React.Component {

    deleteProductEvent = (e) => {
        e.preventDefault();
        const { deleteOneProduct, customerProduct } = this.props;
        deleteOneProduct(customerProduct.productId);
      }
    render() {
        const { customerProduct } = this.props;

        return(
            <div>

            <div className="cart-item">
                <div className="cart-img">
                    <img className="cartProduct" src={customerProduct.image} alt="cart items"/>
                </div>
                <div className="product-description">
                    <h5>{customerProduct.title}</h5>
                    <h5>${customerProduct.price}</h5> 
                    <button className="btn-sm delete-button" id="deleteButton2" onClick={this.deleteProductEvent}><i class="fas fa-trash-restore">delete</i></button>
                </div>
                </div>
            </div>
        )};

}      

export default CartItem
            
            
            
            
            
            
            
            
          