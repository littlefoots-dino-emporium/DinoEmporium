import React from 'react';
import { Button } from 'reactstrap';
import customerShape from '../../helpers/propz/customerShape'
//import getCustomerInfo from '../../helpers/data/customerRequest';
import getCustomerInfo from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';
import EditCustomerForm from '../EditCustomerForm/EditCustomerForm';
import Modal from 'react-responsive-modal';
import './CustomerProfile.scss';
import authRequests from '../../firebaseRequests/auth';

 

export class CustomerProfile extends React.Component {

  state = {
    customer: {},
    isEditing: false,
    editId: '-1',
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  getCustomer = () => {
    let uid = authRequests.getUid();
    getCustomerInfo.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
    });
  }

  componentDidMount() {
    this.getCustomer();
  }

  editCustomer = (e) => {
    e.preventDefault();
    let uid = autheRequests.getUid();
    this.setState({ isEditing: true, editId: uid })
    this.onOpenModal();
  }

  render() {
    const { customer, isEditing, editId } = this.state;
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
      <div className="customerProfile">
        <h1>{customer.firstName}</h1>
        <h1>{customer.lastName}</h1>
        <h3>{customer.email}</h3>
        {makeButtons()}
        <div className='lineupForm'>
        <EditCustomerForm
          customer={this.state.customer}
          isEditing={isEditing}
          editId={editId}
          open={this.state.open}
          onCloseModal={this.onCloseModal}
        />
      </div>
      </div>
    )
  }
}

export default CustomerProfile
