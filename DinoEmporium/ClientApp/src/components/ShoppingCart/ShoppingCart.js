
import React from 'react';
import autheRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';
import customerProductRequest from '../../helpers/data/customerProductRequest';
import CartItem from '../CartItem/CartItem';
import './ShoppingCart.scss';
import getCustomerInfo from '../../helpers/data/customerRequest';


class ShoppingCart extends React.Component {

    state = {
        customerProducts: [],
        customer: ''
    }

componentDidMount() {
    let uid = autheRequests.getUid();
    customerProductRequest.getCustomerProductsRequest(uid).then((customerProducts) => {
        this.setState({ customerProducts });
        console.log(customerProducts);
    });
        getCustomerInfo.getCustomerProfile(uid).then((customer) => {
          this.setState({ customer })
          console.log(customer);

    });
}

deleteOneProduct = (productId) => {
    const uid = autheRequests.getUid();
    customerProductRequest.deleteSingleProduct(productId)
      .then(() => {
        customerProductRequest.getCustomerProductsRequest(uid)
          .then((customerProducts) => {
            this.setState({ customerProducts });
          });
      })
      .catch(err => console.error('error with delte single', err));
  }

    render() {
        const { customerProducts, customer } = this.state;
        console.log(customerProducts);

        const customerProductItem = customerProducts.map(customerProducts => (
            <CartItem
            customerProduct={customerProducts}
              key={customerProducts.id}
              customer={customer}
              deleteOneProduct={this.deleteOneProduct}
            />
          ));
          
        return(
            <div className="card">
            <h1 className="cart">Shopping Cart</h1>
            <div>
            { customerProductItem } 
            </div>
            </div>
        )

    }
}

export default ShoppingCart
