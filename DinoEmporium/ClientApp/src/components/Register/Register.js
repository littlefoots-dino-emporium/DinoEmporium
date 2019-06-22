import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';
import postCustomer from '../../helpers/data/customerRequest';
import firebase from 'firebase';


import './Register.scss';

const customerInformation = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: '',
}
class Register extends React.Component {
  state = {
      newCustomerInformation: customerInformation,    
  };

  signUp = ( newCustomerInformation) => {
    firebase.auth().createUserWithEmailAndPassword(newCustomerInformation.email, newCustomerInformation.password).then((res) => {
      newCustomerInformation.uid = authRequests.getUid();
      const customerInformation = { firstName: newCustomerInformation.firstName,
                        lastName: newCustomerInformation.lastName,
                        email: newCustomerInformation.email,
                        customerUid: newCustomerInformation.uid
                        }
      postCustomer.postCustomerRequest(customerInformation);
      this.props.history.push('/');
    }).catch(err => console.error('there was an error with auth', err));
  }

  formFieldStringState = (name,e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.newCustomerInformation};
    tempInfo[name] = e.target.value;
    this.setState({ newCustomerInformation: tempInfo});
  }
  
  emailChange = e => {
    this.formFieldStringState('name', e);
  };

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

  passwordChange = e => {
    this.formFieldStringState('password', e);
  }

  // registerClickEvent = e => {
  //   const { newCustomerInformation } = this.state;
  //   e.preventDefault();
  //   console.log('click');
  //   authRequests
  //     .registerUser(newCustomerInformation)
  //     .then(() => {
  //       this.props.history.push('/');
  //     })
  //     .catch(error => {
  //       console.error('there was an error in registering', error);
  //     });
  // };

  formSubmit = (e) => {
    e.preventDefault();
    const userInformation = { ...this.state.newCustomerInformation };
    this.signUp(userInformation);
    this.setState({ newCustomerInformation:customerInformation });
  }

  render () {
    const { newCustomerInformation } = this.state;
    return (
      <div className="container">
        <div className="Register" id="login-form">
          <h1 className="text-center">Register</h1>
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
                  value={newCustomerInformation.firstName}
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
                  value={newCustomerInformation.lastName}
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
                  value={newCustomerInformation.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-4 control-label">
                Password:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={newCustomerInformation.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/login">Need to Login?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.formSubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;