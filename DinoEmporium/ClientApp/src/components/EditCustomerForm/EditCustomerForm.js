import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import authRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';
import firebase from 'firebase';


// import './Register.scss';

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
  }

  state = {
      updatedCustomerInfo: defaultCustomerInformation,
  };

  // props = {
  //   customer,
  // }

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
    const tempInfo = { ...this.state.updatedCustomerInfo};
    tempInfo[name] = e.target.value;
    this.setState({ updatedCustomerInfo: tempInfo});
  }
  
  // emailChange = e => {
  //   this.formFieldStringState('name', e);
  // };

  firstNameChange = e => {
    this.formFieldStringState('firstName', e);
  };
  
  lastNameChange = e => {
    this.formFieldStringState('lastName', e);
  };

  dateChange = e => {
    this.formFieldStringState('date', e);
  };

  emailChange = e => {
    this.formFieldStringState('email', e);
  }


  // registerClickEvent = e => {
  //   const { defaultCustomerInformation } = this.state;
  //   e.preventDefault();
  //   console.log('click');
  //   authRequests
  //     .registerUser(defaultCustomerInformation)
  //     .then(() => {
  //       this.props.history.push('/');
  //     })
  //     .catch(error => {
  //       console.error('there was an error in registering', error);
  //     });
  // };
  formSubmit = (e) => {
    e.preventDefault();
    const userInformation = { ...this.state.updatedCustomerInformation };
    this.updateCustomer(userInformation);
    this.setState({ updatedCustomerInformation:defaultCustomerInformation });
  }


  // formSubmit = (e) => {
  //   e.preventDefault();
  //   const { onSubmit } = this.props;
  //   const userInformation = { ...this.props.CustomerInfo };
  //   userInformation.uid = authRequests.Uid();
  //   onSubmit(userInformation);
  //   this.setState({ updatedCustomerInfo: defaultCustomerInformation });
  // }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      customerRequest.getCustomerProfile(editId)
        .then((customer) => {
          this.setState({ updatedCustomerInfo: customer });
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render () {
    const { updatedCustomerInfo } = this.state; 
    const { isEditing } = this.props;

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
                        value={updatedCustomerInfo.firstName}
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
                        value={updatedCustomerInfo.lastName}
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
                        value={updatedCustomerInfo.email}
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