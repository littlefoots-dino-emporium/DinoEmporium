import React from 'react';
import { Button } from 'reactstrap';
import customerShape from '../../helpers/propz/customerShape'
import PropTypes from 'prop-types';
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
    // const makeButtons = () => (
    //   <div>
    //     <span className="editLineup col">
    //       <Button outline color="info" onClick={this.editCustomer}>
    //         Edit
    //           </Button>
    //     </span>
    //   </div>
    // );

    return (
      <div className="customerProfile">
        {/* {makeButtons()} */}
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
