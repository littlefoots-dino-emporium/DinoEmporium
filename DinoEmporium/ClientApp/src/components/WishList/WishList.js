import React, { Component } from 'react'
import authRequests from '../../firebaseRequests/auth';
import getWishList from '../../helpers/data/wishListRequest';
import getCustomerInfo from '../../helpers/data/customerRequest';
import WishListItem from '../WishListItem/WishListItem';
import './WishList.scss';

export class WishList extends Component {
  state = {
    customerProducts: [],
    customer: ''
}

componentDidMount() {
  let uid = authRequests.getUid();
  this.customerInfo();
      getCustomerInfo.getCustomerProfile(uid).then((customer) => {
        this.setState({ customer })
        console.log(customer);
});
}

customerInfo = () => {
let uid = authRequests.getUid();
getWishList.getWishListRequest(uid).then((customerProducts) => {
    this.setState({ customerProducts });
    console.log(customerProducts);
});
}

deleteOneProduct = (productId) => {
  getWishList.deleteSingleProduct(productId)
    .then(() => {
      this.customerInfo();
    })
    .catch(err => console.error('error with delte single', err));
}

render() {
    const { customerProducts, customer } = this.state;
    console.log(customerProducts);

    const customerWishListItem = customerProducts.map(customerProducts => (
        <WishListItem
        customerProduct={customerProducts}
          key={customerProducts.id}
          customer={customer}
          deleteOneProduct={this.deleteOneProduct}
        />
      ));
      
    return(
        <div className="container">
        <div className="all-in-wishlist">
        <div><h1 className="cart">Wish List</h1></div>
        <div>
        { customerWishListItem } 
        </div>
        </div>
        </div>
    )

}
}

export default WishList
