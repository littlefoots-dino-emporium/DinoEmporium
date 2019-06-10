import React from 'react';
import getCustomerInfo from '../../helpers/data/customerRequest';
<<<<<<< HEAD
import autheRequests from '../../firebaseRequests/auth'
=======
>>>>>>> master
import './CustomerProfile.scss';
import autheRequests from '../../firebaseRequests/auth';

 

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
        <h1>{customer.firstName}</h1>
        <h1>{customer.lastName}</h1>
        <h3>{customer.email}</h3>
      </div>
    )
  }
}

export default CustomerProfile
