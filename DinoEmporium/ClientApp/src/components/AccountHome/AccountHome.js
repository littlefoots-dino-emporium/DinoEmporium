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
      return <Redirect to='/orderhistory'/>
      
    }
    if (this.state.wishList === true) {
      return <Redirect to='/wishlist' />
    }
    if (this.state.paymentInformation === true) {
      return <Redirect to='/paymentInformation' />
    }


    return (
      <div className="container accountHome">
          <div class="welcome">
            <h1><b>{customer.firstName} {customer.lastName}</b></h1>
            {/* <div class="card-body"> */}
                <h3>{customer.address}</h3>
                <h5>{customer.city}, {customer.state} {customer.zip}</h5>
                <p>{customer.email}</p>
            {/* </div> */}
        <div className="customerNav text-right">
          <Button className="btn" id="buttonYeah" onClick={this.editCustomer}>
            Update Profile Information
        </Button>
          <Button className="btn" id="buttonYeah"  onClick={this.wishList}>
            Wish List
        </Button>
          <Button className="btn" id="buttonYeah"   onClick={this.orderHistory}>
            Order History
        </Button>
          <Button className="btn" id="buttonYeah"  onClick={this.paymentInformation}text="center">
            Payment Information
        </Button>
        </div>
        </div>
      </div>
    )
  }
}

export default AccountHome
