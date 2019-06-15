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
        customerProduct.postCustomerProductRequest(CustomerProductInfo);
    }


    render() {
        const { product } = this.props;
        return (
            <div className="dinosaurs">
                <div className="app">
                    <Button className="modal_opener btn-light" onClick={this.toggleModal}>
                        <img className='product-image' src="http://i64.tinypic.com/rh5r2s.jpg" alt='product' />
                        <p className='product-title'><i>Muttaburrasaurus</i></p>
                    </Button>

                    <Modal
                        show={this.state.showModal}
                        closeCallback={this.toggleModal}
                        customClass="custom_modal_class" npm
                    >
                        <React.Fragment>
                            <div className='productCard'>
                                <li className='product-price'><i>$235,000</i></li>
                                <li className='product-description'>The Muttaburrasaurus is a dinosaur from Australia.</li>
                                <li className='product-quantity'>We have <b>16</b> in stock.</li>
                                <button onClick={this.addToCart}>Add To Cart </button>
                            </div>
                        </React.Fragment>
                    </Modal>
                </div>

                <div className="app">
                    <Button className="modal_opener" onClick={this.toggleModal}>
                        <img className='product-image' src="http://i63.tinypic.com/20891dj.jpg" alt='product' />
                        <p className='product-title'><i>Spinosaurus</i></p>
                    </Button>

                    <Modal
                        show={this.state.showModal}
                        closeCallback={this.toggleModal}
                        customClass="custom_modal_class" npm
                    >
                        <React.Fragment>
                            <div className='productCard'>
                                <li className='product-price'><i>$235,000</i></li>
                                <li className='product-description'>The Muttaburrasaurus is a dinosaur from Australia.</li>
                                <li className='product-quantity'>We have <b>16</b> in stock.</li>
                                <button onClick={this.addToCart}>Add To Cart </button>
                            </div>
                        </React.Fragment>
                    </Modal>
                </div>

                <div className="app">
                    <Button className="modal_opener" onClick={this.toggleModal}>
                        <img className='product-image' src="http://i68.tinypic.com/idw41h.jpg" alt='product' />
                        <p className='product-title'><i>Apatosaurus</i></p>
                    </Button>

                    <Modal
                        show={this.state.showModal}
                        closeCallback={this.toggleModal}
                        customClass="custom_modal_class" npm
                    >
                        <React.Fragment>
                            <div className='productCard'>
                                <li className='product-price'><i>$235,000</i></li>
                                <li className='product-description'>The Muttaburrasaurus is a dinosaur from Australia.</li>
                                <li className='product-quantity'>We have <b>16</b> in stock.</li>
                                <button onClick={this.addToCart}>Add To Cart </button>
                            </div>
                        </React.Fragment>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ProductItem;



