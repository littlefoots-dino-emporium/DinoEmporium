import React from 'react';
import autheRequests from '../../firebaseRequests/auth';
//import customerRequest from '../../helpers/data/customerRequest';
import customerProductRequest from '../../helpers/data/customerProductRequest';
import CartItem from '../CartItem/CartItem';
import './ShoppingCart.scss';
import getCustomerInfo from '../../helpers/data/customerRequest';
import { Redirect } from 'react-router';

class ShoppingCart extends React.Component {

    state = {
        customerProducts: [],
        customer: '',
        checkout: false
    }

componentDidMount() {
    let uid = autheRequests.getUid();
    this.customerInfo();
        getCustomerInfo.getCustomerProfile(uid).then((customer) => {
          this.setState({ customer })
          console.log(customer);

    });
}

customerInfo = () => {
    let uid = autheRequests.getUid();
    customerProductRequest.getCustomerProductsRequest(uid).then((customerProducts) => {
        this.setState({ customerProducts });
        console.log(customerProducts);
    });
}

deleteOneProduct = (productId) => {
    customerProductRequest.deleteSingleProduct(productId)
      .then(() => {
        this.customerInfo();
      })
      .catch(err => console.error('error with delte single', err));
  }
  checkout = () => {
    this.setState({ checkout: true })
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
          
          if (this.state.checkout === true) {
            return <Redirect to={{
                pathname: '/checkout',
                state: { customer: customer , 
                          customerProducts: customerProducts
                        }
            }}
    />
          }

        return(
            <div className="card all-in-cart">
            <div><h1 className="cart">Shopping Cart</h1></div>
            <div><button className="btn btn-primary" onClick={this.checkout}>Proceed to checkout</button></div>
            <div>
            { customerProductItem } 
            </div>    
            </div>
        )

    }
}

export default ShoppingCart
