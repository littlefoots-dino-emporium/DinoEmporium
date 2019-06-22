import React, { Component } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom';
import  { Button }  from 'reactstrap';
import { Redirect } from 'react-router';
import customerRequest from '../../helpers/data/customerRequest';
import PaymentInformation from '../PaymentInformation/PaymentInformation';
import authRequests from '../../firebaseRequests/auth';
import './AccountHome.scss';
export class AccountHome extends Component {
  state = {
    customer: {},
    toUpdateCustomer: false,
    orderHistory: false,
    wishList: false,
    paymentInformation: false,
  }

  getCustomer = () => {
    let uid = authRequests.getUid();
    customerRequest.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
    });
  }

  editCustomer = (e) => {
    this.setState({ toUpdateCustomer: true })
  }

  orderHistory = (e) => {
    this.setState({ orderHistory: true })
  }

  wishList = (e) => {
    this.setState({ wishList: true })
  }

  paymentInformation = (e) => {
    this.setState({ paymentInformation: true })
  }

  componentDidMount() {
    this.getCustomer();
  }

  render() {
    const { customer } = this.state;
    if (this.state.toUpdateCustomer === true) {
      return <Redirect to='/customerprofile' />
    }
    if (this.state.orderHistory === true) {
      return <Redirect to='/orderhistory' />
    }
    if (this.state.wishList === true) {
      return <Redirect to='/wishlist' />
    }
    if (this.state.paymentInformation === true) {
      return <Redirect to='/paymentInformation' />
    }


    return (
      <div className="container accountHome">
          <div class="welcome text-center">
            <h3>{customer.firstName} {customer.lastName}</h3>
            <div class="card-body">
              <p>email: {customer.email}</p>
              <p>
                address: 
                {customer.address}
                {customer.city}
                {customer.state}
                {customer.zip}
              </p>
              
            </div>
        <div className="customerNav text-right">
          <Button className="customerNavBtn outline color=secondary" onClick={this.editCustomer}  color="info">
            Update Profile Information
        </Button>
          <Button className="customerNavBtn outline-secondary"  onClick={this.wishList} color="info">
            Wish List
        </Button>
          <Button className="customerNavBtn variant=outline-secondary"  onClick={this.orderHistory} color="info">
            Order History
        </Button>
          <Button className="customerNavBtn variant=outline-secondary"  onClick={this.paymentInformation} color="info" text="center">
            Payment Information
        </Button>
        </div>
        </div>
      </div>
    )
  }
}

export default AccountHome
