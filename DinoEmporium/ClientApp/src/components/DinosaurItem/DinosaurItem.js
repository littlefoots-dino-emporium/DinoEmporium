import React from 'react';
import Modal from '../../helpers/modal/Modal';
import customerProduct from '../../helpers/data/customerProductRequest';
import wishList from '../../helpers/data/wishListRequest';
import customerRequest from '../../helpers/data/customerRequest';
import autheRequests from '../../firebaseRequests/auth';
import { Button } from 'reactstrap';

import './DinosaurItem.scss';

class DinosaurItem extends React.Component {

    state = {
        showModal: false,
        customer: '',
        buttonTextChange: " Add To Cart",
        wishListButtonChange: " Add To Wish List"
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
        const { customer, inWishList } = this.state;
        const { product } = this.props;
        this.setState({ buttonTextChange: "In Cart", inCart: true });
        const CustomerProductInfo = {
            productId: product.id,
            customerId: customer.id
        }
        console.log(CustomerProductInfo)
        customerProduct.postCustomerProductRequest(CustomerProductInfo);
        wishList.deleteSingleProduct(product.id)
    }

    addToWishlist = () => {
        const { customer, inCart } = this.state;
        const { product } = this.props;
        if (inCart === true) {
            alert("This item is already in your cart")
        } else {
        this.setState({ wishListButtonChange: "In Wish List", inWishList: true });
        const CustomerProductInfo = {
            productId: product.id,
            customerId: customer.id
        }
        wishList.postWishListRequest(CustomerProductInfo);
      }   
    }

    render() {
        const { product } = this.props;

        return (
            <div className="anotherDivForDinosaurs">
                <div className="dinosaurModal">
                    <div className='productCard'>
                        <img className='dino-image' src={product.image} alt='product' />
                        <p className="all">
                            <h2 className='dino-title'><i>{product.title}</i></h2>
                            <p className='dino-price'><i>${product.price}</i></p>
                            <p className='dino-quantity'>We have <b>{product.quantity}</b> in stock.</p>
                            <Button className="addToCart btn-sm" onClick={this.addToCart}><i class="fas fa-luggage-cart"></i> 
                                {this.state.buttonTextChange}
                            </Button>
                            <Button className="addToWishList btn-sm" onClick={this.addToWishlist}><i class="fas fa-magic mr-1"></i> 
                                {this.state.wishListButtonChange}
                            </Button>
                            <Button className="modal_opener btn-sm" onClick={this.toggleModal}>
                            <i class="far fa-question-circle"></i>
                                </Button>
                            <Modal
                                show={this.state.showModal}
                                closeCallback={this.toggleModal}
                                customClass="custom_modal_class w-500"
                            >
                                <React.Fragment>

                                    <li className='dino-description'>{product.description}</li>

                                </React.Fragment>
                            </Modal>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DinosaurItem;
