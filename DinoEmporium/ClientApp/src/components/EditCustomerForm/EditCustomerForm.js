import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Redirect } from 'react-router'


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

  getCustomer = () => {
    let uid = authRequests.getUid();
    customerRequest.getCustomerProfile(uid).then((customer) => {
      this.setState({ customer })
    });
  }

  componentDidMount() {
    this.getCustomer();
  }

  updateCustomer = ( updatedCustomerInformation ) => {
    updatedCustomerInformation.uid = authRequests.getUid();
      const defaultCustomerInformation = { firstName: updatedCustomerInformation.firstName,
                        lastName: updatedCustomerInformation.lastName,
                        email: updatedCustomerInformation.email,
                        customerUid: updatedCustomerInformation.uid
                        }
      customerRequest.updateCustomerRequest(defaultCustomerInformation);
      // this.props.history.push('/');
  }

  formFieldStringState = (name,e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.updatedCustomerInformation};
    tempInfo[name] = e.target.value;
    this.setState({ updatedCustomerInformation: tempInfo});
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

  formSubmit = (e) => {
    e.preventDefault();
    const userInformation = { ...this.state.updatedCustomerInformation };
    this.updateCustomer(userInformation);
    this.setState({ updatedCustomerInformation:defaultCustomerInformation, toDashboard: true })
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      customerRequest.getCustomerProfile(editId)
        .then((customer) => {
          this.setState({ updatedCustomerInformation: customer });
          this.getCustomer();
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render () {
    const { updatedCustomerInformation, customer } = this.state; 
    const { isEditing } = this.props;
    if (this.state.toDashboard === true) {
      return <Redirect to='/accounthome' />
    }

      const title = () => {
        if(isEditing) {
          return (
            <div className="Register">
              <div id="login-form">
                <h1 className="text-center">Update Customer</h1>
                <form className="form-horizontal col-sm-6 col-sm-offset-3">
                  <div className="form-group">
                    <label htmlFor="inputName" className="col-sm-4 control-label">
                      First Name:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="inputEmail"
                        placeholder="First Name"
                        value={updatedCustomerInformation.firstName}
                        onChange={this.firstNameChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputLastName" className="col-sm-4 control-label">
                      Last Name:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Last Name"
                        value={updatedCustomerInformation.lastName}
                        onChange={this.lastNameChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail" className="col-sm-4 control-label">
                      Email:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        value={updatedCustomerInformation.email}
                        onChange={this.emailChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button
                        type="submit"
                        className="btn btn-default col-xs-12"
                        onClick={this.formSubmit}
                        tag={RRNavLink} to='/accounthome'
                      >
                        Update Info
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )} return (
            <div className="Hide form">

            </div>
          )
        };
      return (
        <div className="editCustomer">
        {title()}
      </div>
    );
  }
}

export default EditCustomerForm;