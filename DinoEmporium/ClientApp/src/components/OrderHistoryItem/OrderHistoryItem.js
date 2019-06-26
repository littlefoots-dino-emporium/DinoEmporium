import React from 'react';
import './OrderHistoryItem.scss';

class OrderHistoryItem extends React.Component {
    render() {
        const { orderHistory } = this.props;

        return(

            <div className="card info">
                <div className="card-body customer-info">
                    <h5>Price: {orderHistory.price}</h5>
                    <h5>Quantity: {orderHistory.productQuantity}</h5>
                </div>



            </div>
        )};

}      

export default OrderHistoryItem