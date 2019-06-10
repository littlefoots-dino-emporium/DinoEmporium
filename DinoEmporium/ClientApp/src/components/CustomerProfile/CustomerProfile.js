import React from 'react';
import { Button } from 'reactstrap';
import customerShape from '../../helpers/propz/customerShape'
//import getCustomerInfo from '../../helpers/data/customerRequest';
import getCustomerInfo from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';
import EditCustomerForm from '../EditCustomerForm/EditCustomerForm';
import './CustomerProfile.scss';



export class CustomerProfile extends React.Component {

  state = {
    customer: {},
    isEditing: false,
    editId: '-1',
  }

  // static propTypes = {
  //   customer: customerShape.customerShape,
  //   // passCustomerToEdit: this.PropTypes.func,
  // }

  getCustomer = () => {
    let uid = autheRequests.getUid();
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
  }

  // passCustomerToEdit = uid => this.setState({ isEditing: true, editId: uid });

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
      <div passCustomerToEdit={this.passCustomerToEdit}>
        <h1>{customer.firstName}</h1>
        <h1>{customer.lastName}</h1>
        <h3>{customer.email}</h3>
        {makeButtons()}
        <div className='lineupForm'>
        <EditCustomerForm
          onSubmit={this.formSubmitLineup}
          isEditing={isEditing}
          editId={editId}
        />
      </div>
      </div>
    )
  }
}

export default CustomerProfile
