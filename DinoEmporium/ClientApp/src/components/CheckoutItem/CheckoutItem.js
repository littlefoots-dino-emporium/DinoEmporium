import React from 'react';
import './CheckoutItem.scss'; 


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

    const lastFour = () => {
        var card = item.accountNumber;
        return (
            card.toString().slice(-4)
            )
    }
    if(item.price != null){
        return(
           <div class="products-in-checkout"> 
               
                <img class="product-img" src={item.image} alt="cart items"/>
                <div>
                    <h5>{item.title}</h5>
                    <h5>Price: ${item.price}</h5> 
                </div>

            </div> 
        )
    }
    if (item.expirationDate != null && item.nameOnCard != null && item.accountNumber != null)
    {
        return(
            <div class="checkout-item">
                <h5>Name on card: {item.nameOnCard}</h5>
                <h5>Billing Address: {item.address}</h5>
                <h5><span class="payment-type">{paymentType()}</span> ending in {lastFour()}</h5>             
            </div>
           
        
        )
    }
    };

}   

export default CheckoutItem;
