import React from 'react';
import Modal from '../../helpers/modal/Modal';
import './ProductItem.scss';

class ProductItem extends React.Component {

    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        const { product } = this.props;
        return (
            <div className="app">
                <button className="modal_opener" onClick={this.toggleModal}>
                    <img className='product-image' src={product.image} alt='product' />
                    <li className='product-title'>{product.title}</li>
                </button>

                <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="custom_modal_class"
                >
                    <React.Fragment>
                        <div className='card-body productCard'>
                            <li className='plant-price'><i>${product.price}</i></li>
                            <li className='plant-description'>{product.description}</li>
                            <li className='plant-quantity'>We have <b>{product.quantity}</b> in stock.</li>
                        </div>
                    </React.Fragment>
                </Modal>
            </div>

        )
    }
}

export default ProductItem;