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
        buttonTextChange: "Add To Cart",
        wishListButtonChange: "Add To Wish List",
        inWishList: false, 
        inCart: false,
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

    addToCart = (productId) => {
        const { customer, inWishList } = this.state;
        const { product } = this.props;

        // if (inWishList === true) {
        //     alert("This item is already in your wish list")
        // } else {
        this.setState({ buttonTextChange: "In Cart", inCart: true });
        const CustomerProductInfo = {
            productId: product.id,
            customerId: customer.id
        }
        customerProduct.postCustomerProductRequest(CustomerProductInfo);
        wishList.deleteSingleProduct(product.id)
        // }
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
                            <Button className="addToCart" onClick = {this.addToCart}>
                                {this.state.buttonTextChange}
                            </Button>
                            <Button className="addToWishList" onClick = {this.addToWishlist}>
                                {this.state.wishListButtonChange}
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