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

            <div className="product-info">
                <div className="product-img">
                    <img className="cartProduct" src={customerProduct.image} alt="cart items"/>
                </div>
                <div className="product-description">
                    <h5>Title:{customerProduct.title}</h5>
                    <h5>Size:{customerProduct.size}</h5>
                    <h5>Price:${customerProduct.price}</h5> 
                    <button className="btn btn-danger" onClick={this.deleteProductEvent}><i class="fas fa-trash-restore"></i></button>
                </div>
                
                </div>
            </div>
        )};

}      

export default CartItem
            
            
            
            
            
            
            
            
          