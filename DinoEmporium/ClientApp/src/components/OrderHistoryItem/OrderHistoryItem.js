import React from 'react';
import './OrderHistoryItem.scss';

class OrderHistoryItem extends React.Component {
    render() {
        const { orderHistory } = this.props;

        return(

            <div className="info">
                <div className="customer-info">
                    <h5>Name on card: {orderHistory.price}</h5>
                </div>



            </div>
        )};

}      

export default OrderHistoryItem