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
                <div className="anotherCartItem">
                <div className="cart-img">
                    <img className="cartProduct" src={customerProduct.image} alt="cart items"/>
                </div>
                <div className="product-description">
                    <h5 className="titleForProduct">{customerProduct.title}</h5>
                    <h5 className="price">${customerProduct.price}</h5> 
                    <button className="btn-sm delete-button" id="deleteButtonCart" onClick={this.deleteProductEvent}><i class="fas fa-trash-restore">delete</i></button>
                </div>
                </div>
                </div>
            </div>
        )};

}      

export default CartItem
            
            
            
            
            
            
            
            
          