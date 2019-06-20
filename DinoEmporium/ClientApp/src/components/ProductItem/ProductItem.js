import React from 'react';
import Modal from '../../helpers/modal/Modal';
import { Button } from 'reactstrap';
import customerProduct from '../../helpers/data/customerProductRequest';
import customerRequest from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';
import './ProductItem.scss';

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
        customerProduct.postCustomerProductRequest(CustomerProductInfo);
    }


    render() {
        const { product } = this.props;
        return (
            <div className="modalProduct">
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
                            <li className='plant-price'><i>${product.price}</i></li>
                            <li className='plant-description'>{product.description}</li>
                            <li className='plant-quantity'>We have <b>{product.quantity}</b> in stock.</li>
                            <Button onClick= {this.addToCart}>Add To Cart</Button>
                        </div>
                    </React.Fragment>
                </Modal>
            </div>
        )
    }
}

export default ProductItem;