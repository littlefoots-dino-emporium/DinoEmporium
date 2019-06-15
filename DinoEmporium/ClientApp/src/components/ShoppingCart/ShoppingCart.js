
import React from 'react';
import autheRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';
import customerProductRequest from '../../helpers/data/customerProductRequest';
import CartItem from '../CartItem/CartItem';
import './ShoppingCart.scss';

class ShoppingCart extends React.Component {

    state = {
        customerProducts: []
    }

componentDidMount() {
    let uid = autheRequests.getUid();
    customerProductRequest.getCustomerProductsRequest(uid).then((customerProducts) => {
        this.setState({ customerProducts });
        console.log(customerProducts);

    });
}


    render() {
        const { customerProducts } = this.state;
        console.log(customerProducts);

        const customerProductItem = customerProducts.map(customerProducts => (
            <CartItem
            customerProduct={customerProducts}
              key={customerProducts.id}
            />
          ));
          
        return(
            <div>
            <h1 className="cart">Shopping Cart</h1>
            <div>
            { customerProductItem } 
            </div>
            </div>
        )

    }
}

export default ShoppingCart
