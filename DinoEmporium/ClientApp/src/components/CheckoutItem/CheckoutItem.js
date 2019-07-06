import React from 'react';
import CartItem from '../CartItem/CartItem';
 


class CheckoutItem extends React.Component {


render() {
    const { item } = this.props;
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
    if(item.price != null){
        return(
           <div> 
                <img src={item.image} alt="cart items"/>
               <h5>Price: ${item.price}</h5> 

            </div> 
        )
    }
    if (item.expirationDate != null && item.nameOnCard != null && item.accountNumber != null)
    {
        return(
            <div>
                 <h5>Name on card: {item.nameOnCard}</h5>
            <h5>Address: {item.address}</h5>
            <h5>Account Number: {item.accountNumber}</h5>
            <h5>Expiration Date: {item.expirationDate}</h5>
            <h5>PaymentType:{paymentType()}</h5>             
            </div>
           
        
        )
    }
    };

}   

export default CheckoutItem;

