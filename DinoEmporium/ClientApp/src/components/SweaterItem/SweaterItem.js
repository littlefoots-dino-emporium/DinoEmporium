import React from 'react';
import Modal from '../../helpers/modal/Modal';
import { Button } from 'reactstrap';
import customerProduct from '../../helpers/data/customerProductRequest';
import autheRequests from '../../firebaseRequests/auth';
import customerRequest from '../../helpers/data/customerRequest';



import './SweaterItem.scss';

class SweaterItem extends React.Component {

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
            <div className="sweaterModal">
                <Button className="modal_opener" onClick={this.toggleModal}>
                    <img className='sweater-image' src={product.image} alt='product' />
                    <p className='sweater-title'><i>{product.title}</i></p>
                </Button>

                <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="custom_modal_class"
                >
                    <React.Fragment>
                        <div className='productCard'>
                            <li className='sweater-price'><i>${product.price}</i></li>
                            <li className='sweater-description'>{product.description}</li>
                            <li className='sweater-quantity'>We have <b>{product.quantity}</b> in stock.</li>
                            <Button onClick= {this.addToCart}>Add To Cart </Button>
                        </div>
                    </React.Fragment>
                </Modal>
            </div>
        )
    }
}

export default SweaterItem;