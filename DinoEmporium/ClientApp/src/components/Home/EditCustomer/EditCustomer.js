import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import authRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';
import firebase from 'firebase';


import './Register.scss';

const customerInformation = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: '',
}

class EditCustomer extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
    newCustomerInformation: customerInformation
  }
  // state = {
  //     newCustomerInformation: customerInformation,    
  // };

  // signUp = ( newCustomerInformation) => {
  //   firebase.auth().createUserWithEmailAndPassword(newCustomerInformation.email, newCustomerInformation.password).then((res) => {
  //     newCustomerInformation.uid = authRequests.getUid();
  //     const customerInformation = { firstName: newCustomerInformation.firstName,
  //                       lastName: newCustomerInformation.lastName,
  //                       email: newCustomerInformation.email,
  //                       customerUid: newCustomerInformation.uid
  //                       }
  //     postCustomer.postCustomerRequest(customerInformation);
  //     this.props.history.push('/');
  //   }).catch(err => console.error('there was an error with auth', err));
  // }

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
    const {onSubmit } = this.props
    const userInformation = { ...this.state.newCustomerInformation };
    userInformation.uid = authRequests.getCurrentUid();
    onSubmit(userInformation)
    this.setState({ newCustomerInformation:customerInformation });
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      customerRequest.getSingleCustomer(editId)
        .then((customer) => {
          this.setState({ newCustomerInformation: customer.data });
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render () {
    const { newCustomerInformation, isEditing } = this.props;
    
    const title = () => {
      if (isEditing) {
        return <form onSubmit={this.formSubmit}>
        <h2>Edit Your Lineup Here</h2>
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
        </form>;
      }
      return <form className="lineupAddition" onSubmit={this.formSubmit}>
          <h2>Add New Lineup Here</h2> 
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
        </form>;
    };
    return (
      <div className="editCustomer">
        {title()}
      </div>
    );
  }
}

export default EditCustomer;