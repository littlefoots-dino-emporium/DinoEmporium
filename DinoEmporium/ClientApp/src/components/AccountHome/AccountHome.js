import React, { Component } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom';
import  { Button }  from 'reactstrap';
import { Redirect } from 'react-router';
import customerRequest from '../../helpers/data/customerRequest';
import authRequests from '../../firebaseRequests/auth';
import './AccountHome.scss';
export class AccountHome extends Component {
  state = {
    customer: {},
    toUpdateCustomer: false,
  }

  getCustomer = () => {
    let uid = authRequests.getUid();
    customerRequest.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
    });
  }

  editCustomer = (e) => {
    // e.preventDefault();
    // let uid = authRequests.getUid();
    // this.setState({ isEditing: true, editId: uid })
    // this.onOpenModal();
    this.setState({ toUpdateCustomer: true })
  }

  componentDidMount() {
    this.getCustomer();
  }

  render() {
    const { customer } = this.state;
    if (this.state.toUpdateCustomer === true) {
      return <Redirect to='/customerprofile' />
    }


    return (
      <div className="accountHome">
          <div class="welcome card text-center">
            <div class="card-header">
            <h3>{customer.firstName} {customer.lastName}</h3>
          </div>
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
          </div>
        <div className="customerNav text-right">
          <Button className="customerNavBtn outline color=secondary" onClick={this.editCustomer}  color="info">
            Update Profile Information
        </Button>
          <Button className="customerNavBtn outline-secondary"  color="info">
            Payment Information
        </Button>
          <Button className="customerNavBtn variant=outline-secondary"  color="info">
            Order History
        </Button>
          <Button className="customerNavBtn variant=outline-secondary"  color="info" text="center">
            Reset Password
        </Button>
        </div>
      </div>
    )
  }
}

export default AccountHome
