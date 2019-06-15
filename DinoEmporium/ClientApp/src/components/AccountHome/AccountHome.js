import React, { Component } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
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

  editCustomer = (e) => {
    e.preventDefault();
    let uid = authRequests.getUid();
    this.setState({ isEditing: true, editId: uid })
    this.onOpenModal();
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
        <h1>{customer.firstName}</h1>
        <h1>{customer.lastName}</h1>
        <h3>{customer.email}</h3>
        </div>
        <div className="customerNav">
        <Button className="customerNavBtn outline color=secondary" tag={RRNavLink} to='/customerprofile'> 
        Profile Information
        </Button>   
        <Button className="customerNavBtn outline-secondary">
        Payment Information
        </Button>
        <Button className="customerNavBtn variant=outline-secondary">
        Order History
        </Button>
        <Button className="customerNavBtn variant=outline-secondary">
        Reset Password
        </Button>
        </div>
      </div>
    )
  }
}

export default AccountHome
