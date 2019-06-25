import React, { Component } from 'react';
import authRequests from '../../firebaseRequests/auth';
import getCustomerInfo from '../../helpers/data/customerRequest';
import PropTypes from 'prop-types';

export class OrderHistory extends Component {
  state = {
     customer: []
  }

  getCustomer = () => {
    let uid = authRequests.getUid();
    getCustomerInfo.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
    });
  }

  componentDidMount() {
    this.getCustomer();
  }
  

  render() {
    const { customer } = this.state
    return (
      <div>
        <h1>Order History</h1>
        <h2>{customer.firstName}</h2>
      </div>
    )
  }
}

export default OrderHistory
