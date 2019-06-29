import React from 'react';
import './PaymentItem.scss';

class PaymentItem extends React.Component {

    deletePaymentEvent = (e) => {
        e.preventDefault();
        const { deleteOnePaymentInformation, paymentInfo } = this.props;
        deleteOnePaymentInformation(paymentInfo.id);
      }

    render() {
        const { paymentInfo } = this.props;
        console.log(paymentInfo);

        const paymentType =() => {
            const { paymentInfo } = this.props;
            console.log(paymentInfo);
            if(paymentInfo.paymentType === 0)
            {
                return(
                "Master Card"
                )
            }
            if(paymentInfo.paymentType === 1)
            {
                return(
                "Visa"
                )
            }
            if(paymentInfo.paymentType === 2)
            {
                return(
                "American Express"
                )
            }
        }

        return(

            <div className="info">
                <div className="customer-info">
                    <h5>Name on card: {paymentInfo.nameOnCard}</h5>
                    <h5>Address: {paymentInfo.address}</h5>
                    <h5>Account Number: {paymentInfo.accountNumber}</h5>
                    <h5>Expiration Date: {paymentInfo.expirationDate}</h5>
                    <h5>PaymentType:{paymentType()}</h5> 
                </div>
                <div className="delete-button" onClick={this.deletePaymentEvent}><button className="btn btn-danger delete-button" ><i class="fas fa-trash-restore"></i></button></div>
                {/* <button className="btn btn-primary edit-button"><i class="fas fa-pencil-alt"></i></button> */}


            </div>
        )};

}      

export default PaymentItem