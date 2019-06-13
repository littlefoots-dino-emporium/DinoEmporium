import React from 'react';
import getCustomerInfo from '../../helpers/data/customerRequest';
import './CustomerProfile.scss';
import autheRequests from '../../firebaseRequests/auth';
import './CustomerProfile.scss';



export class CustomerProfile extends React.Component {

  state = {
    customer: {},
  }

  componentDidMount() {
  let uid = autheRequests.getUid();
  getCustomerInfo.getCustomerProfile(uid).then((customer) => { 
    this.setState({ customer })
  });
}

  render() {
    const { customer } = this.state;

    return (
      <div>
        <div className="profile">
          <h1>Your Account</h1>
          <h3>Name: {customer.firstName} {customer.lastName}  <span className="edit-name"><i class="fas fa-pencil-alt"></i></span></h3>
          <h3>Email: {customer.email}</h3>
        </div>
      </div>
    )
  }
}

export default CustomerProfile
