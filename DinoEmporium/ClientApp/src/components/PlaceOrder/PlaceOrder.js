import React from 'react';
import orderRequest from '../../helpers/data/orderRequest';

class PlaceOrder extends React.Component {

    addTotal = () => {
        const { customerProducts } = this.props;
    let add = 0;
    customerProducts.forEach((customerProduct) => {
      add = parseInt(add) + parseInt(customerProduct.price);
    });
    return (
      add
    )
  }
  
    addOrder = () => {
        const { paymentInfo, customer } = this.props;
    //   const orderInfo = {
    //     price: addTotal(),
    //     paymentInformationId: paymentInfo.id,
    //     customerId: customer.id
    //   }
    //   orderRequest.postOrderRequest(orderInfo);
      }

    render() {
        return (
            <div>
                <h5> ${this.addTotal()}</h5> 
                <button class="btn btn-primary" onClick={this.addOrder}>Place Your Order</button>
            </div>
        )
    }
}

export default PlaceOrder;