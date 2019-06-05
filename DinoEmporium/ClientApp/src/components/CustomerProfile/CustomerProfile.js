import React from 'react';

import './CustomerProfile.scss';
import autheRequests from '../../firebaseRequests/auth';
import getCustomerInfo from '../../helpers/data/customerRequest';

export class UserProfile extends React.Component {

  state = {
    customer: []
  }

  componentDidMount() {
  //   const uid = autheRequests.getUid();
  // getCustomerInfo.getCustomerProfile(uid).then((profile) => { 
  //   this.setState({profile})
  // });
}

  render() {
    const { customer } = this.state;

    return (
      <div>
        <h1>{customer.firstName}</h1>
      </div>
    )
  }
}

export default UserProfile
