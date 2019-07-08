
import React from 'react';
import autheRequests from '../../firebaseRequests/auth';
import './Checkout.scss';
import paymentRequest from '../../helpers/data/paymentInformationRequest';


import CheckoutItem from '../CheckoutItem/CheckoutItem';

class Checkout extends React.Component {

    state = {
        paymentInfo: [],
        checkout: false
    }

componentDidMount() {
    const { customer } = this.props.location.state;
paymentRequest.getPaymentInformation(customer.id).then((paymentInfo) => {
this.setState({ paymentInfo })
})
}

// componentWillReceiveProps(props) {
//     this.setState({ paymentInfo: props.paymentInfo})
// }


    render() {
        const { customer, customerProducts } =  this.props.location.state;
        const { paymentInfo } = this.state;

        const addTotal = () => {
        let add = 0;
        customerProducts.forEach((customerProduct,i) => {
          add = parseInt(add) + parseInt(customerProduct.price);
        });
        return (
          add
        )
      }

        const checkoutItem = paymentInfo.map(payment => (
            <CheckoutItem
            item={payment}
              key={paymentInfo.id}
            />
          ));
          const checkoutProducts = customerProducts.map(customerProduct => (
            <CheckoutItem
            item={customerProduct}
              key={customerProduct.id}
            />
          ));
     
const address = () => {
  if(customer.address == '' || customer.address == null){
    return "please add your address on the profile page"
  }
  else 
  return customer.address
}
        return(
          <div class="checkout">
              <div className="card all-in-cart">
              <div><h1 className="cart">Checkout</h1>
              <div class="shipping">
                <h3>Shipping Information</h3>
                <h4 class="shipping-item">Name: {customer.firstName}</h4>
                <h4 class="shipping-item">Shipping address: <span class="address">{address()}</span></h4>
              </div>
              <h3>Payment Method</h3>
              {checkoutItem}
              {checkoutProducts}
              </div>
              </div>
              <div class="card total">
                <h4 class="order-text">Order Total</h4>
                <h5> ${addTotal()}</h5>
                <button class="btn btn-primary">Place Your Order</button>
              </div>
          </div>
        )

    }
}

export default Checkout;
