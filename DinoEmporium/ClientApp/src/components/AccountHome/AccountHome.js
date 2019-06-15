import React, { Component } from 'react'
import { Button } from 'reactstrap';
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
        <div>
        <Button className="customerNav" outline color="info" tag={RRNavLink} to='/customerprofile'>
        Profile
        </Button>   
        <Button className="customerNav" outline color="info" tag={RRNavLink} to='/PaymentInformation'>
        PaymentInformation
        </Button>
        <Button className="customerNav" outline color="info">
        Reset Password
        </Button>
        </div>
      </div>
    )
  }
}

export default AccountHome
