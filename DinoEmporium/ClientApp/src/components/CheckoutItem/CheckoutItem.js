import React from 'react';
import CartItem from '../CartItem/CartItem';
 


class CheckoutItem extends React.Component {


render() {
    const { item } = this.props;
    console.log(item);
    let productPrice = 0 + item.price;

    // let render;
    // if(item.nameOnCard != null)
    // {
    //     render = item.nameOnCard;
    // }
    // if (item.expirationDate != null){
    //     render = item.expirationDate;
    // }
    // if (item.address){
    //     render = item.address;
    // }
    // if (item.accountNumber){
    //     render= item.accountNumber;
    // }
    // if (item.price){
    //     render= item.price;
    // }
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
               Total: ${productPrice}

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

    // return(
        
    //     <div className="info">
    //         <div className="customer-info">
    //             <h2>gghghf</h2>
    //         </div>
    //         <div className="delete-button" onClick={this.deletePaymentEvent}><button className="btn btn-danger delete-button" ><i class="fas fa-trash-restore"></i></button></div>
    //         {/* <button className="btn btn-primary edit-button"><i class="fas fa-pencil-alt"></i></button> */}


    //     </div>
    // )
    };

}   

export default CheckoutItem;

