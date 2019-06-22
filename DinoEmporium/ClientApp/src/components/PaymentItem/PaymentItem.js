import React from 'react';
import './PaymentItem.scss';

class PaymentItem extends React.Component {


    render() {
        const { paymentInfo } = this.props;
        console.log(paymentInfo);

        return(

            <div className="product-info card">
                <h3>Name on card:{paymentInfo.nameOnCard}</h3>
                <h3>Account Number:{paymentInfo.accountNumber}</h3>
                <h3>Expiration Date:{paymentInfo.expirationDate}</h3>
                {/* <h3>PaymentType:{paymentInfo.paymentType}</h3>  */}
            </div>
        )};

}      

export default PaymentItem