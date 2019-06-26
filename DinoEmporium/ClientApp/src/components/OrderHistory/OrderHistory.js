import React, { Component } from 'react';
import authRequests from '../../firebaseRequests/auth';
import getCustomerInfo from '../../helpers/data/customerRequest';
import getOrderHistory from '../../helpers/data/orderHistoryRequest';
import PropTypes from 'prop-types';

export class OrderHistory extends Component {
  state = {
     customer: [],
     orderHistory: []
  }

  getCustomer = () => {
    let uid = authRequests.getUid();
    getCustomerInfo.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
    });
    getOrderHistory.getOrderHistory().then((orderHistory) => {
      this.setState(orderHistory);
    })
  }

  getCustomerOrder = () => {
    const { customer } = this.state;
    
getOrderHistory.getOrderHistory(customer.id).then((orderHistory) => {
    this.setState({ orderHistory })
    console.log(customer.id);
})
}

  componentDidMount() {
    this.getCustomer();
    this.getCustomerOrder();
  }
  

  render() {
    const { customer, orderHistory } = this.state
    return (
      <div>
        <h1>Order History</h1>
        <h2>{customer.firstName}</h2>
      </div>
    )
  }
}

export default OrderHistory
