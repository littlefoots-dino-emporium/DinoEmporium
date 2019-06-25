import React from 'react';
import Modal from '../../helpers/modal/Modal';
import { Button } from 'reactstrap';
import customerProduct from '../../helpers/data/customerProductRequest';
import customerRequest from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';


import './FenceItem.scss';

class FenceItem extends React.Component {

    state = {
        showModal: false,
        customer: '',
        buttonTextChange: "Add To Cart"
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
        <div className="anotherDivForFences">
            <div className="fenceModal">
                <Button className="modal_opener" onClick={this.toggleModal}>
                    <img className='fence-image' src={product.image} alt='product' />
                    <p className='fence-title'><i>{product.title}</i></p>
                    
                </Button>

                <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="custom_modal_class"
                >
                    <React.Fragment>
                        <div className='productCard'>
                            <li className='fence-price'><i>${product.price} per foot.</i></li>
                            <li className='fence-description'>{product.description}</li>
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

export default FenceItem;