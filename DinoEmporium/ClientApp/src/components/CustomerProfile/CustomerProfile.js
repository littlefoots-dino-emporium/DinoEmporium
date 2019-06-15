import React from 'react';
import PropTypes from 'prop-types';
import getCustomerInfo from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';
import './CustomerProfile.scss';
import EditCustomerForm from '../EditCustomerForm/EditCustomerForm';
import './CustomerProfile.scss';
import authRequests from '../../firebaseRequests/auth';

 

export class CustomerProfile extends React.Component {

  state = {
    customer: {},
    isEditing: false,
    editId: '-1',
    open: false,
  }

  static propTypes = {
    onSubmit: PropTypes.func,
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
    let uid = autheRequests.getUid();
    this.getCustomer();
    this.setState({ isEditing: true, editId: uid })
  }

  editCustomer = (e) => {
    e.preventDefault();
    let uid = autheRequests.getUid();
    this.setState({ isEditing: true, editId: uid })
    this.onOpenModal();
  }

  render() {
    const { customer, isEditing, editId } = this.state;

    return (

      <div className="customerProfile">
        <div className='lineupForm'>
        <EditCustomerForm
          customer={customer}
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
