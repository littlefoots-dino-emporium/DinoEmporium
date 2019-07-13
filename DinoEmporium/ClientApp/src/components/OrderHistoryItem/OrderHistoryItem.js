import React from 'react';
import './OrderHistoryItem.scss';

class OrderHistoryItem extends React.Component {
    render() {
        const { orderHistory } = this.props;


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