import React from 'react';
import Modal from '../../helpers/modal/Modal';
import { Button } from 'reactstrap';
import customerRequest from '../../helpers/data/customerRequest';
import customerProduct from '../../helpers/data/customerProductRequest';
import autheRequests from '../../firebaseRequests/auth';
import PropTypes from 'prop-types';
import './DinosaurItem.scss';

class DinosaurItem extends React.Component {

    state = {
        showModal: false,
        customer: '',
        inWishList: false,
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

    addToWishList = () => {
        // const { customer } = this.state;
        // const { product } = this.props;
        this.setState({
            inWishList: true
        })
    }

    render() {
        const { product } = this.props;
        return (
            <div className="dinosaurModal">
                <Button className="modal_opener" onClick={this.toggleModal}>
                    <img className='dino-image' src={product.image} alt='product' />
                    <p className='dino-title'><i>{product.title}</i></p>
                </Button>

                <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="custom_modal_class"
                >
                    <React.Fragment>
                        <div className='productCard'>
                            <li className='dino-price'><i>${product.price}</i></li>
                            <li className='dino-description'>{product.description}</li>
                            <li className='dino-quantity'>We have <b>{product.quantity}</b> in stock.</li>
                            <Button onClick={this.addToCart}>Add To Cart </Button>
                            <Button onClick={this.addToWishList}>Add To Wish List</Button>
                        </div>
                    </React.Fragment>
                </Modal>
            </div>
        )
    }
}

export default DinosaurItem;