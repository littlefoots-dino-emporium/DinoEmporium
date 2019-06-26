import React, { Component } from 'react';
import authRequests from '../../firebaseRequests/auth';
import getCustomerInfo from '../../helpers/data/customerRequest';
import getOrderHistory from '../../helpers/data/orderHistoryRequest';
import PropTypes from 'prop-types';
import OrderHistoryItem from '../OrderHistoryItem/OrderHistoryItem';

export class OrderHistory extends Component {
  state = {
    customer: [],
    orderHistory: []
  }

  getCustomer = () => {
    let uid = authRequests.getUid();
    getCustomerInfo.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
      getOrderHistory.getOrderHistory(customer.id).then((orderHistory) => {
        this.setState({ orderHistory });
      });
    })
  }

  //   getCustomerOrder = () => {
  //     const { customer } = this.state;
  //     console.log(customer.id);

  // getOrderHistory.getOrderHistory(customer.id).then((orderHistory) => {
  //     this.setState({ orderHistory })
  //     console.log(customer.id);
  // })
  // }

  componentDidMount() {
    this.getCustomer();
    // this.getCustomerOrder();
  }


  render() {
    const { customer, orderHistory } = this.state

    const orderHistoryPrint = orderHistory.map(orderHistory => (
      <OrderHistoryItem
        orderHistory={orderHistory}
        key={orderHistory.id}
      />
    ));

    return (
      <div>
        <h1>Order History</h1>
        <h2>{customer.firstName}</h2>
        {orderHistoryPrint}
      </div>
    )
  }
}

export default OrderHistory
