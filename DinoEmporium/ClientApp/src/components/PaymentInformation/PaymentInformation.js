import React from 'react';
import Modal from 'react-responsive-modal';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
  } from 'reactstrap';
import paymentRequest from '../../helpers/data/paymentInformationRequest';
import authRequest from '../../firebaseRequests/auth';
import getCustomerInfo from '../../helpers/data/customerRequest';
import PaymentItem from '../PaymentItem/PaymentItem';
import AddPaymentInformation from '../AddPaymentInformation/AddPaymentInformation';
import './PaymentInformation.scss';

 class PaymentInformation extends React.Component {

    state = {
        
        customer: {},
        //open: false,
        paymentInfo: []
    }

    componentDidMount() {
        const uid = authRequest.getUid();
        getCustomerInfo.getCustomerProfile(uid).then((customer) => {
          this.setState({ customer })
          console.log(customer);
          this.getCustomerPayment();
        })
}
getCustomerPayment = () => {
    const { customer } = this.state;
    
paymentRequest.getPaymentInformation(customer.id).then((paymentInfo) => {
    this.setState({ paymentInfo})
    console.log(customer.id);
})
}

render(){
    // const { open } = this.state;
  const { paymentInfo } = this.state;
  console.log(paymentInfo);

  const paymentInfoItem = paymentInfo.map(paymentInfo => (
    <PaymentItem
    paymentInfo={paymentInfo}
      key={paymentInfo.id}
    />
  ));

  return (
  <div>
      <AddPaymentInformation />
      <div className="payment">
      {paymentInfoItem}
      </div>
  </div>
  )};
}

export default PaymentInformation;
