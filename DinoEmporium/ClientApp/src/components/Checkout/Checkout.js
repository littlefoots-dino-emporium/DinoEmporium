
import React from 'react';
import autheRequests from '../../firebaseRequests/auth';
import './Checkout.scss';

import CheckoutItem from '../CheckoutItem/CheckoutItem';

class Checkout extends React.Component {

    state = {
        //customer: '',
        paymentInfo: [],
        checkout: false
    }

componentDidMount() {
    const { customer } = this.props.location.state;
    console.log(customer);
   
}
componentWillReceiveProps(props) {
    this.setState({ paymentInfo: props.paymentInfo})
}


    render() {
        const { customer } =  this.props.location.state;
        const { paymentInfo } = this.state;

        console.log(paymentInfo);
        const checkoutItem = paymentInfo.map(payment => (
            <CheckoutItem
            payment={payment}
              key={paymentInfo.id}
            />
          ));
     

        return(
            <div className="card all-in-cart">
            <div><h1 className="cart">Checkout</h1>
            <h1>{customer.firstName}</h1>
            <h2>Payment Information</h2>
            {checkoutItem}
            <h4></h4>
            </div>
            </div>
        )

    }
}

export default Checkout;
