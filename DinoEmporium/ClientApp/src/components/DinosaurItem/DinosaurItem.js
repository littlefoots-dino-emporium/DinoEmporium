import React from 'react';
import Modal from '../../helpers/modal/Modal';
import customerProduct from '../../helpers/data/customerProductRequest';
import customerRequest from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';
import { Button } from 'reactstrap';

import './DinosaurItem.scss';

class DinosaurItem extends React.Component {

    state = {
        showModal: false,
        customer: '',
        buttonTextChange: "Add To Cart"
    }

    componentDidMount() {
        let uid = autheRequests.getUid();
        customerRequest.getCustomerProfile(uid).then((customer) => {
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
        this.setState({ buttonTextChange: "In Cart" });
        const CustomerProductInfo = {
            productId: product.id,
            customerId: customer.id
        }
        customerProduct.postCustomerProductRequest(CustomerProductInfo);
    }


    render() {
        const { product } = this.props;

        return (
        <div className="anotherDivForDinosaurs">
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
                            <Button onClick = {this.addToCart}>
                                {this.state.buttonTextChange}
                            </Button>
                        </div>
                    </React.Fragment>
                </Modal>
            </div>
        </div>
        )
    }
}

export default DinosaurItem;