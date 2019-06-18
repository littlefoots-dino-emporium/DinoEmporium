import React from 'react';
import Modal from 'react-responsive-modal';
import { Button } from 'reactstrap';
import paymentRequest from '../../helpers/data/paymentInformation';
import authRequest from '../../firebaseRequests/auth';


class PaymentInformation extends React.Component {

    state = {
        paymentInfo: [],
        open: false
    }
    componentDidMount() {
        const uid = authRequest.getUid();
        
    paymentRequest.getPaymentInformation(uid).then((paymentInfo) => {
        this.setState({ paymentInfo })
        console.log(paymentInfo);
    })
}

addPayment = () => {
paymentRequest.postPaymentInformation().then((customerInfo) => {
    
})
}

onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


render(){
    const { open } = this.state;
  const { paymentInfo } = this.state;
  return (
  <div>
      <Button onClick={this.onOpenModal}>Add Payment Information</Button>
      <Modal open={open} onClose={this.onCloseModal} center>
      <div className="Register">
              <div id="login-form">
                <h1 className="text-center">Add Card</h1>
                <form className="form-horizontal col-sm-6 col-sm-offset-3">
                  <div className="form-group">
                    <label htmlFor="inputName" className="col-sm-4 control-label">
                      Name on card:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="inputEmail"
                        placeholder="First Name"
                    //     value={updatedCustomerInformation.firstName}
                    //     onChange={this.firstNameChange}
                       />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputLastName" className="col-sm-4 control-label">
                      Card Number:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Last Name"
                        // value={updatedCustomerInformation.lastName}
                        // onChange={this.lastNameChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputLastName" className="col-sm-4 control-label">
                      Expiration Date
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="date"
                        className="form-control"
                        id="inputDate"
                        placeholder="01/2019"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </Modal>
      {paymentInfo}
  </div>
  )};
}

export default PaymentInformation;