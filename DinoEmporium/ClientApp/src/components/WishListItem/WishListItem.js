import React, { Component } from 'react';
import customerProductReq from '../../helpers/data/customerProductRequest';
import wishList from '../../helpers/data/wishListRequest';
import customerRequest from '../../helpers/data/customerRequest';
import productTypeRequests from '../../helpers/data/productTypeRequest';
import autheRequests from '../../firebaseRequests/auth';
import './WishListItem.scss';

export class WishListItem extends Component {

    state = {
        customer: '',
        products: [],
    }

    deleteKidEvent = (e) => {
        e.preventDefault();
        const { deleteOneProduct, customerProduct } = this.props;
        deleteOneProduct(customerProduct.productId);
      }

      componentDidMount() {
        let uid = autheRequests.getUid();
        customerRequest.getCustomerProfile(uid).then((customer) => {
            this.setState({ customer });
          })
        
          productTypeRequests.getDinoRequest().then((products) => {
            this.setState({ products });
            this.setState({ filteredDinosaurs: products });
          })

    }

      addToCart = () => {
        const { customer } = this.state;
        const {customerProduct} = this.props;

        this.setState({ buttonTextChange: "In Cart", inCart: true });
        const CustomerProductInfo = {
            productId: customerProduct.id,
            customerId: customer.id
        }
        customerProductReq.postCustomerProductRequest(CustomerProductInfo);
        wishList.deleteSingleProduct(customerProduct.id)
    }
      
  render() {
    const { customerProduct } = this.props;
    console.log(customerProduct);

    return(
        <div>

        <div className="product-info">
            <div className="product-img">
                <img className="wishlistImage" src={customerProduct.image} alt="cart items"/>
            </div>
            <div className="product-description">
                <h5>Title:{customerProduct.title}</h5>
                <h5>Size:{customerProduct.size}</h5>
                <h5>Price:${customerProduct.price}</h5> 
                <button className="btn btn-danger" onClick={this.deleteKidEvent}><i class="fas fa-trash-restore"></i></button>
                <button className="btn btn-primary" onClick={this.addToCart}><i class="fas fa-cart"></i></button>
            </div>
            
            </div>
        </div>
    )};
}

export default WishListItem
