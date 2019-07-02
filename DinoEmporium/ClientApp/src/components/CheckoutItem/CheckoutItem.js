import React from 'react';
import CartItem from '../CartItem/CartItem';
 


class CheckoutItem extends React.Component {


render() {
    const { payment } = this.props;
    console.log(payment);

    const paymentType =() => {
        console.log(payment);
        if(payment.paymentType == 0)
        {
            return(
            "Master Card"
            )
        }
        if(payment.paymentType == 1)
        {
            return(
            "Visa"
            )
        }
        if(payment.paymentType == 2)
        {
            return(
            "American Express"
            )
        }
    }

    return(

        <div className="info">
            <div className="customer-info">
                <h5>Name on card: {payment.nameOnCard}</h5>
                <h5>Address: {payment.address}</h5>
                <h5>Account Number: {payment.accountNumber}</h5>
                <h5>Expiration Date: {payment.expirationDate}</h5>
                <h5>PaymentType:{paymentType()}</h5> 
            </div>
            <div className="delete-button" onClick={this.deletePaymentEvent}><button className="btn btn-danger delete-button" ><i class="fas fa-trash-restore"></i></button></div>
            {/* <button className="btn btn-primary edit-button"><i class="fas fa-pencil-alt"></i></button> */}


        </div>
    )};

}   

export default CheckoutItem;

