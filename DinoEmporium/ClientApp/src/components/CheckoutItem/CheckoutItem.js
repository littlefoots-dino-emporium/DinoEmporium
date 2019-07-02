import React from 'react';
import CartItem from '../CartItem/CartItem';
 


class CheckoutItem extends React.Component {


render() {
    const { item } = this.props;
    console.log(item);
    let render;
    if(item.nameOnCard != null)
    {
        render = item.nameOnCard;
    }
    else if (item.expirationDate != null){
        render = item.expirationDate;
    }
    else if (item.address != null){
        render = item.address;
    }
    else if (item.accountNumber != null){
        render= item.accountNumber;
    }
    else if (item.price != null){
        render= item.price;
    }
    const paymentType =() => {
        if(item.paymentType == 0)
        {
            return(
            "Master Card"
            )
        }
        if(item.paymentType == 1)
        {
            return(
            "Visa"
            )
        }
        if(item.paymentType == 2)
        {
            return(
            "American Express"
            )
        }
    }

    return(
        
        <div className="info">
            <div className="customer-info">
                <h5>Name on card: {render}</h5>
                <h5>Address: {render}</h5>
                <h5>Account Number: {render}</h5>
                <h5>Expiration Date: {render}</h5>
                <h5>PaymentType:{paymentType()}</h5> 
                <h5>Price{render}</h5>
            </div>
            <div className="delete-button" onClick={this.deletePaymentEvent}><button className="btn btn-danger delete-button" ><i class="fas fa-trash-restore"></i></button></div>
            {/* <button className="btn btn-primary edit-button"><i class="fas fa-pencil-alt"></i></button> */}


        </div>
    )
    };

}   

export default CheckoutItem;

