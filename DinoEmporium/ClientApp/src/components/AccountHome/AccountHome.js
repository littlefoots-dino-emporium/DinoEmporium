import React, { Component } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom';
import  { Button }  from 'reactstrap';
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
          <div class="welcome card text-center">
            <div class="card-header">
            <h3>{customer.firstName} {customer.lastName}</h3>
          </div>
            <div class="card-body">
              <p>email: {customer.email}</p>
            </div>
          </div>
        <div className="customerNav">
          <Button className="customerNavBtn outline color=secondary" tag={RRNavLink} to='/customerprofile' variant="outline-primary">
            Update Profile Information
        </Button>
          <Button className="customerNavBtn outline-secondary" variant="outline-success">
            Payment Information
        </Button>
          <Button className="customerNavBtn variant=outline-secondary" variant="outline-secondary">
            Order History
        </Button>
          <Button className="customerNavBtn variant=outline-secondary" variant="outline-danger">
            Reset Password
        </Button>
        </div>
      </div>
    )
  }
}

export default AccountHome
