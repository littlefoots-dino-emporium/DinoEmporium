import React from 'react';
import Modal from 'react-responsive-modal';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
  } from 'reactstrap';
  import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import paymentRequest from '../../helpers/data/paymentInformationRequest';
import authRequest from '../../firebaseRequests/auth';
import getCustomerInfo from '../../helpers/data/customerRequest';
import './AddPaymentInformation.scss';

const addPayment = {
    accountNumber: '',
    nameOnCard: '',
    expirationDate: '',
    address: ''
    }

class AddPaymentInformation extends React.Component {

    state = {
        open: false,
        addNewPayment: addPayment,
        paymentType: '',
        customer: {}
    }
    componentDidMount() {
        const uid = authRequest.getUid();
        getCustomerInfo.getCustomerProfile(uid).then((customer) => {
          this.setState({ customer })
          console.log(customer);
        });
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };


    addPayment = () => {
    const { addNewPayment , customer, paymentType} = this.state;
    const addPayment = {
        PaymentType: paymentType,
        AccountNumber: addNewPayment.accountNumber,
        NameOnCard: addNewPayment.nameOnCard,
        ExpirationDate: addNewPayment.expirationDate,
        CustomerId: customer.id,
        Address: addNewPayment.address
    }
    console.log(customer.id);
paymentRequest.postPaymentInformation(addPayment);
}

formFieldStringState = (name,e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.addNewPayment};
    tempInfo[name] = e.target.value;
    this.setState({ addNewPayment: tempInfo});
  }
  
  nameChange = e => {
    this.formFieldStringState('nameOnCard', e);
  };

  paymentTypeChange = e => {
    this.formFieldStringState('paymentType', e);
  };
  
  accountNumberChange = e => {
    this.formFieldStringState('accountNumber', e);
  };
  expirationDateChange = e => {
    this.formFieldStringState('expirationDate', e);
  };

  addressChange = e => {
    this.formFieldStringState('address', e);
  };

  formSubmit = (e) => {
    e.preventDefault();
    const userInformation = { ...this.state.addNewPayment };
    this.addPayment(userInformation);
    this.setState({ addNewPayment:addPayment });
  }

getPaymentType = (e) => {
    const { paymentType } = this.state;
const value = e.target.value;
this.setState({ paymentType: value })
}

 render() {
    const { open, addNewPayment } = this.state;
 return (
     <div className="addPayment">
         <button onClick={this.onOpenModal} className="btn" id="buttonOh">Add Payment Information</button>
      <Modal open={open} onClose={this.onCloseModal} center>
      <div className="Register">
              <div id="login-form">
                <h1 className="text-center">Add Card</h1>
                <form className="form-horizontal col-sm-6 col-sm-offset-3">
                  <div className="form-group">
                    <label htmlFor="inputName" className=" control-label">
                      Name on card:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="inputEmail"
                        placeholder="First Name"
                        value={addNewPayment.nameOnCard}
                        onChange={this.nameChange}
                       />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress" className="control-label">
                     Address:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="inputAddress"
                        placeholder="3324 Edge Moor Dr, Nashville, 37014 "
                        value={addNewPayment.address}
                        onChange={this.addressChange}
                       />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputLastName" className="control-label">
                      Card Number:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Card Number"
                        value={addNewPayment.accountNumber}
                        onChange={this.accountNumberChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputLastName" className="control-label">
                      Expiration Date
                    </label>
                    <div className="col-sm-8">
                      <input
                        //type="date"
                        className="form-control"
                        id="inputDate"
                        placeholder="01/2019"
                        value={addNewPayment.expirationDate}
                        onChange={this.expirationDateChange}
                      />
                    </div>
                  </div>
                  <FormGroup tag="fieldset">
                    <label>Payment Type</label>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio1" value="0" onClick={this.getPaymentType}/>{' '}
                        Master Card
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio1" value="1" onClick={this.getPaymentType}/>{' '}
                        Visa
                        </Label>
                    </FormGroup>
                    <FormGroup check >
                        <Label check>
                        <Input type="radio" name="radio1" value="2" onClick={this.getPaymentType}/>{' '}
                        American Express
                        </Label>
                    </FormGroup>
                    </FormGroup>                
                  <div className="form-group">
                    <div className="col-sm-12">
                      <Button
                        type="submit"
                        className="btn btn-default col-xs-12"
                        onClick={this.formSubmit}
                      >
                        Add Payment 
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </Modal>
     </div>
 )
 }

}

export default AddPaymentInformation;
