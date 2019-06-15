import React, { Component } from 'react'
import button from 'bootstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import customerRequest from '../../helpers/data/customerRequest';
import authRequests from '../../firebaseRequests/auth';
import './AccountHome.scss';
export class AccountHome extends Component {
  state = {
    customer: {},
  }

  getCustomer = () => {
    let uid = authRequests.getUid();
    customerRequest.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
    });
  }

  componentDidMount() {
    this.getCustomer();
  }

  render() {
    const { customer } = this.state;

    return (
      <div className="accountHome">
        <div className="welcome">
        <h1>Hello {customer.firstName}!</h1>
        </div>
        <div className="customerNav">
        <button type="button" class="customerNavBtn btn btn-outline-info" tag={RRNavLink} to='/customerprofile'>
        Profile Information
        </button>   
        <button type="button" class="customerNavBtn btn btn-outline-info">
        Payment Information
        </button>
        <button type="button" className="customerNavBtn btn btn-outline-info">
        Reset Password
        </button>
        </div>
      </div>
    )
  }
}

export default AccountHome
