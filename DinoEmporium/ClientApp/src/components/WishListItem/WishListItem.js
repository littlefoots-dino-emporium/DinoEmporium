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
    wishList.deleteSingleProduct(customerProduct.id)
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

  addToCart = (e) => {
    const { customer } = this.state;
    const { customerProduct } = this.props;

    this.setState({ buttonTextChange: "In Cart", inCart: true });
    const CustomerProductInfo = {
      productId: customerProduct.id,
      customerId: customer.id
    }
    customerProductReq.postCustomerProductRequest(CustomerProductInfo);
    this.deleteKidEvent(e);
    alert("This item has been added to your cart")
  }

  render() {
    const { customerProduct } = this.props;
    console.log(customerProduct);

    return (
      <div>

        <div className="wishList">
          <div className="wishlist-image">
            <img className="wishlistImage" src={customerProduct.image} alt="cart items" />
          </div>
          <div className="descriptionForProducts">
          <h5 className="titleForProduct">{customerProduct.title}</h5>
                <h5 className="size">{customerProduct.size}</h5>
                <h5 className="price">${customerProduct.price}</h5> 
                <button className="btn btn-sm delete-button" onClick={this.deleteKidEvent}><i class="fas fa-trash-restore">delete</i></button>
                <button className="btn btn-sm to-cart-button" onClick={this.addToCart}><i class="fas fa-luggage-cart">Add To Cart</i></button>
          </div>
        </div>
      </div>
    )
  };
}

export default WishListItem


