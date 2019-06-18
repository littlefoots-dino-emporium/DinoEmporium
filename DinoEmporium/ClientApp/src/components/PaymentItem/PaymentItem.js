import React from 'react';
//import './PaymentItem.scss';

class PaymentItem extends React.Component {


    render() {
        const { paymentInfo } = this.props;
        console.log(paymentInfo);

        return(
            <div>

            <div className="product-info">
                <h2>Name on card:{paymentInfo.nameOnCard}</h2>
                <h2>AccountNumber:{paymentInfo.accountNumber}</h2>
                <h2>PaymentType:{paymentInfo.paymentType}</h2> 
                </div>
            </div>
        )};

}      

export default PaymentItem