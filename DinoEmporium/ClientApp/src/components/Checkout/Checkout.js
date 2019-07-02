
import React from 'react';
import autheRequests from '../../firebaseRequests/auth';
import './Checkout.scss';
import paymentRequest from '../../helpers/data/paymentInformationRequest';


import CheckoutItem from '../CheckoutItem/CheckoutItem';

class Checkout extends React.Component {

    state = {
        //customer: '',
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
     

        return(
            <div className="card all-in-cart">
            <div><h1 className="cart">Checkout</h1>
            <h1>{customer.firstName}</h1>
            <h2>Payment Information</h2>
            {checkoutItem}
            {checkoutProducts}
            <h4></h4>
            </div>
            </div>
        )

    }
}

export default Checkout;
