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
            </div>
        )};

}      

export default PaymentItem