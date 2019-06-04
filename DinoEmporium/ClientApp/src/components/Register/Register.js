import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';

import './Register.scss';

const customerInformation = {
  email: '',
  firstName: '',
  lastName: '',
  date: '',
  email: ''
}
class Register extends React.Component {
  state = {
      newCustomerInformation: customerInformation,    
  };

  formFieldStringState = (name,e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.newCustomerInformation};
    tempInfo[name] = e.target.value;
    this.setState({ newCustomerInformation: tempInfo});
  }
  
  emailChange = e => {
    // const tempUser = { ...this.state.user };
    // tempUser.email = e.target.value;
    // this.setState({ user: tempUser });
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

  registerClickEvent = e => {
    const { newCustomerInformation } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(newCustomerInformation.e)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.error('there was an error in registering', error);
      });
  };

  render () {
    const { newCustomerInformation } = this.state;
    return (
      <div className="Register">
        <div id="login-form">
          <h1 className="text-center">Register</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                First Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={newCustomerInformation.firstName}
                  onChange={this.firstNameChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Last Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
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
                Date:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={newCustomerInformation.Date}
                  onChange={this.dateChange}
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
                  onClick={this.registerClickEvent}
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