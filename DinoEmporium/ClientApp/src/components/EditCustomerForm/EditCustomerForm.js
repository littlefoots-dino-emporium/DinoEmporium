import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import './EditCustomerForm.scss';

const defaultCustomerInformation = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: '',
  uid: '',
}

class EditCustomerForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
    toDashboard: false,
  }

  state = {
    updatedCustomerInformation: defaultCustomerInformation,
    customer: this.props.customer,
  };

  // getCustomer = () => {
  //   let uid = authRequests.getUid();
  //   customerRequest.getCustomerProfile(uid).then((customer) => {
  //     this.setState({ customer })
  //   });
  // }

  // componentDidMount() {
  //   this.getCustomer();
  // }

  updateCustomer = (updatedCustomerInformation) => {
    updatedCustomerInformation.uid = authRequests.getUid();
    const defaultCustomerInformation = {
      firstName: updatedCustomerInformation.firstName,
      lastName: updatedCustomerInformation.lastName,
      email: updatedCustomerInformation.email,
      customerUid: updatedCustomerInformation.uid,
      address: updatedCustomerInformation.address,
      address2: updatedCustomerInformation.address2,
      city: updatedCustomerInformation.city,
      state: updatedCustomerInformation.state,
      zip: updatedCustomerInformation.zip,
    }
    customerRequest.updateCustomerRequest(defaultCustomerInformation);
    // this.props.history.push('/');
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.updatedCustomerInformation };
    tempInfo[name] = e.target.value;
    this.setState({ updatedCustomerInformation: tempInfo });
  }

  firstNameChange = e => {
    this.formFieldStringState('firstName', e);
  };

  lastNameChange = e => {
    this.formFieldStringState('lastName', e);
  };

  emailChange = e => {
    this.formFieldStringState('email', e);
  }

  addressChange = e => {
    this.formFieldStringState('address', e);
  }

  address2Change = e => {
    this.formFieldStringState('address2', e);
  }

  cityChange = e => {
    this.formFieldStringState('city', e);
  }

  stateChange = e => {
    this.formFieldStringState('state', e);
  }

  zipChange = e => {
    this.formFieldStringState('zip', e);
  }


  formSubmit = (e) => {
    e.preventDefault();
    const userInformation = { ...this.state.updatedCustomerInformation };
    this.updateCustomer(userInformation);
    this.setState({ updatedCustomerInformation: defaultCustomerInformation, toDashboard: true })
    // this.componentDidMount();
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      customerRequest.getCustomerProfile(editId)
        .then((customer) => {
          this.setState({ updatedCustomerInformation: customer });
          // this.componentDidMount();
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render() {
    const { updatedCustomerInformation } = this.state;
    const { isEditing } = this.props;
    if (this.state.toDashboard === true) {
      return <Redirect to='/accounthome' />
    }

    const title = () => {
      if (isEditing) {
        return (
          <div className="updateCustomer">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input type="firstName" className="form-control" id="inputFirstName" placeholder="First Name" value={updatedCustomerInformation.firstName} onChange={this.firstNameChange}></input>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName">Last Name</label>
                  <input type="lastName" className="form-control" id="inputLastName" placeholder="Last Name" value={updatedCustomerInformation.lastName} onChange={this.lastNameChange}></input>
                </div>
              </div>
              <div class="form-row">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={updatedCustomerInformation.email} onChange={this.emailChange}></input>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={updatedCustomerInformation.address} onChange={this.addressChange}></input>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={updatedCustomerInformation.address2} onChange={this.address2Change}></input>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" value={updatedCustomerInformation.city} onChange={this.cityChange}></input>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <input type="text" class="form-control" id="inputCity" value={updatedCustomerInformation.state} onChange={this.stateChange}></input>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" value={updatedCustomerInformation.zip} onChange={this.zipChange}></input>
                </div>
              </div>
              {/* <button type="submit" class="btn btn-primary">Sign in</button> */}
                  <button
                    class="btn btn-primary"
                    type="submit"
                    className="btn btn-info col-xs-12"
                    onClick={this.formSubmit}
                  >
                    Update Information
                      </button>
            </form>
          </div>
        )
      } return (
        <div className="Hide form">

        </div>
      )
    };
    return (
      <div className="editCustomer">
        <h1 className="text-center">Update Profile Information</h1>
        {title()}
      </div>

    );
  }
}

export default EditCustomerForm;