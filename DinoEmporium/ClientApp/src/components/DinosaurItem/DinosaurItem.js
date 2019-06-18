import React from 'react';
import Modal from '../../helpers/modal/Modal';
import { Button } from 'reactstrap';

import './DinosaurItem.scss';

class DinosaurItem extends React.Component {

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
                        </div>
                    </React.Fragment>
                </Modal>
            </div>
        )
    }
}

export default DinosaurItem;