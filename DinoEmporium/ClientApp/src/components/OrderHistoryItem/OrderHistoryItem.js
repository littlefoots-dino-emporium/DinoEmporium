import React from 'react';
import './OrderHistoryItem.scss';

class OrderHistoryItem extends React.Component {
    render() {
        const { orderHistory } = this.props;
        // const paymentType = () => {
        //     if (orderHistory.paymentType == 0) {
        //         return (
        //             "Master Card"
        //         )
        //     }
        //     if (orderHistory.paymentType == 1) {
        //         return (
        //             "Visa"
        //         )
        //     }
        //     if (orderHistory.paymentType == 2) {
        //         return (
        //             "American Express"
        //         )
        //     }
        // }
      
        // const lastFour = () => {
        //     var card = orderHistory.accountNumber;
        //     return (
        //         card
        //     )
        // }

        return(

            <div className="card orderCard">
                <div className="card-body">
                    <h5>Order Number: {orderHistory.id}</h5>
                    <h5>Total Price: ${orderHistory.price}</h5>
                </div>
            </div>
        )};

}      

export default OrderHistoryItem