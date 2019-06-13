
import React from 'react';
import autheRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';
import customerProductRequest from '../../helpers/data/customerProductRequest';
import CartItem from '../CartItem/CartItem';

class ShoppingCart extends React.Component {

    state = {
        customerProduct: []
    }

componentDidMount() {
    let uid = autheRequests.getUid();
   // const { product } = this.props;
    // customerRequest.getCustomerProfile(uid).then((customer) => {
    //     //console.log(customer.id, product.id);
    //     this.setState({ customer });
    //   })
    customerProductRequest.getCustomerProductsRequest(uid).then((customerProduct) => {
        this.setState({ customerProduct });
        console.log(customerProduct);

    });
}

// addProductsToCart = () => {
//     //const { customer } = this.state;
//     let uid = autheRequests.getUid();

//     customerProductRequest.getCustomerProductsRequest(uid).then((customerProduct) => {
//         this.setState({ customerProduct });
//         console.log(customerProduct);

//     });
// }

    render() {
        const { customerProduct } = this.state;
        console.log(customerProduct);

        const customerProductItem = customerProduct.map(customerProduct => (
            <CartItem
              customerProduct={customerProduct}
              key={customerProduct.id}
            />
          ));
          
        return(
        <div>
            <h1> { customerProductItem } </h1>
        </div>
        )

    }
}

export default ShoppingCart
