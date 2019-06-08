import React from 'react';
import { Button } from 'reactstrap';
//import getCustomerInfo from '../../helpers/data/customerRequest';
import getCustomerInfo from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';
import EditCustomerForm from '../EditCustomerForm/EditCustomerForm';
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
    const makeButtons = () => (
      <div>
        <span className="editLineup col">
          <Button outline color="info" onClick={this.editCustomer}>
            Edit
              </Button>
        </span>
      </div>
    );

    return (
      <div>
        <h1>{customer.firstName}</h1>
        <h1>{customer.lastName}</h1>
        <h3>{customer.email}</h3>
        {makeButtons()}
        <div className='lineupForm'>
        <EditCustomerForm
          onSubmit={this.formSubmitLineup}
          // isEditing={isEditing}
          // editId={editId}
        />
      </div>
      </div>
    )
  }
}

export default CustomerProfile
