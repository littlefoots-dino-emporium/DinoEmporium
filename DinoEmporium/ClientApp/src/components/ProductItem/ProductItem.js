import React from 'react';
import Modal from '../../helpers/modal/Modal';
import { Button } from 'reactstrap';
import './ProductItem.scss';
import customerProduct from '../../helpers/data/customerProductRequest';
import customerRequest from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';

class ProductItem extends React.Component {

    state = {
        showModal: false,
        customer: ''
    }

    componentDidMount() {
        let uid = autheRequests.getUid();
        const { product } = this.props;
        customerRequest.getCustomerProfile(uid).then((customer) => {
            console.log(customer.id, product.id);
            this.setState({ customer });
          })
    }
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    addToCart = () => {
        const { customer } = this.state;
        const { product } = this.props;
        const CustomerProductInfo = {
            productId: product.id,
            customerId: customer.id
        }
        customerProduct(CustomerProductInfo);
    }


    render() {
        const { product } = this.props;
        return (
            <div className="app">
                <Button className="modal_opener" onClick={this.toggleModal}>
                    <img className='product-image' src={product.image} alt='product' />
                    <p className='product-title'><i>{product.title}</i></p>
                </Button>

                <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="custom_modal_class"
                >
                    <React.Fragment>
                        <div className='productCard'>
                            <li className='product-price'><i></i></li>
                            <li className='product-description'></li>
                            <li className='product-quantity'>We have <b>12</b> in stock.</li>
                            <button onClick= {this.addToCart}>Add To Cart </button>
                        </div>
                    </React.Fragment>
                </Modal>
            </div>
        )
    }
}

export default ProductItem;