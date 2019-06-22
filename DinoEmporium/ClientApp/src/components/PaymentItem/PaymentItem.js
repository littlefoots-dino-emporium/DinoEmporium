import React from 'react';
import './PaymentItem.scss';

class PaymentItem extends React.Component {


    render() {
        const { paymentInfo } = this.props;
        console.log(paymentInfo);

        return(

            <div className="product-info card">
                <h4>Name on card: {paymentInfo.nameOnCard}</h4>
                <h4>Account Number: {paymentInfo.accountNumber}</h4>
                <h4>Expiration Date: {paymentInfo.expirationDate}</h4>
                {/* <h3>PaymentType:{paymentInfo.paymentType}</h3>  */}
                <button className="btn btn-danger delete-button" ><i class="fas fa-trash-restore"></i></button>
                {/* <button className="btn btn-primary edit-button"><i class="fas fa-pencil-alt"></i></button> */}

            </div>
        )};

}      

export default PaymentItem