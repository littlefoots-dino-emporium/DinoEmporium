import React, { Component } from 'react';
import paymentRequest from '../../helpers/data/paymentInformationRequest';
import authRequests from '../../firebaseRequests/auth';
import getCustomerInfo from '../../helpers/data/customerRequest';
import getOrderHistory from '../../helpers/data/orderHistoryRequest';
import OrderHistoryItem from '../OrderHistoryItem/OrderHistoryItem';
import './OrderHistory.scss';

export class OrderHistory extends Component {
  state = {
    customer: [],
    orderHistory: [],
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

  componentDidMount() {
    this.getCustomer();
  }


  render() {
    const { orderHistory } = this.state
   

    const orderHistoryPrint = orderHistory.map(orderHistory => (
      <OrderHistoryItem
        orderHistory={orderHistory}
        key={orderHistory.id}
      />
    ));

    if ( orderHistory.length === 0) {
      return (
        <div className="container">
        <div className="orderHistory">
        <h1><b>Order History</b></h1>
        <p>You have not made any orders yet!</p>
      </div>
      </div>
      )
    } else {
    return (
      <div className="container">
        <div className="orderHistory">
        <h1><b>Order History</b></h1>
        {orderHistoryPrint}
      </div>
      </div>
    )
    }
  }
}

export default OrderHistory
