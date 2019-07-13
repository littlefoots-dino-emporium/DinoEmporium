import React from 'react';
// import autheRequests from '../../firebaseRequests/auth';
import './Checkout.scss';
import paymentRequest from '../../helpers/data/paymentInformationRequest';
import customerProductRequest from '../../helpers/data/customerProductRequest';
import orderRequest from '../../helpers/data/orderRequest';

import CheckoutItem from '../CheckoutItem/CheckoutItem';

class Checkout extends React.Component {

    state = {
        paymentInfo: [],
        checkout: false,
        paymentId: '',
        price: ''
    }

componentDidMount() {
    const { customer } = this.props.location.state;
paymentRequest.getPaymentInformation(customer.id).then((paymentInfo) => {
this.setState({ paymentInfo })
this.addTotal()
})
}

addTotal = () => {
  const { customerProducts } = this.props.location.state;
let add = 0;
customerProducts.forEach((customerProduct) => {
add = parseInt(add) + parseInt(customerProduct.price);
});
// return (
// add
// )
this.setState({ price: add })
}

selectedCheckoutPayment = (e) => {
  const value = e.target.value;
  this.setState({ paymentId: value })
 
  }

addOrderToDatabase = () => {
  const { customer, customerProducts } =  this.props.location.state;
const orderInfo = {
  price: this.state.price,
  paymentInformationId: this.state.paymentId,
  customerId: customer.id
}
orderRequest.postOrderRequest(orderInfo);
customerProductRequest.deleteAllProduct();
}

    render() {
        const { customer, customerProducts } =  this.props.location.state;
        const { paymentInfo } = this.state;


        const checkoutItem = paymentInfo.map(payment => (
            <CheckoutItem
            item={payment}
              key={payment.id}
              payment={payment.id}
              selectedCheckoutPayment={this.selectedCheckoutPayment}
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
          <div class="checkout container">
              <div className="card all-in-cart">
              <div><h1 className="cart">Checkout</h1>
              <div class="shipping">
                <h3>Shipping Information</h3>
                <h4 class="shipping-item">Name: {customer.firstName} {customer.lastName}</h4>
                <h4 class="shipping-item">Shipping address: <span class="address">{address()} {customer.city}, {customer.state} {customer.zip}</span></h4>
              </div>
              <hr></hr>
              <h3>Payment Method</h3>
              <div className="paymentMethod">
              {checkoutItem}
              </div>
              <hr></hr>
              <div className="checkout-products">
              {checkoutProducts}
              </div>
              <h4 class="order-text">Order Total</h4>
                <div>
                <h5> ${this.state.price}</h5> 
                <button class="btn btn-info checkout-button" onClick={this.addOrderToDatabase}>Place Your Order</button>
            </div>
              </div>
              </div>
          </div>
        )

    }
}

export default Checkout;
