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
          
        </Modal>
      {paymentInfo}
  </div>
  )};
}

export default PaymentInformation;