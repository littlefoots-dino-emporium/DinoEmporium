import React from 'react';
import productRequests from '../../helpers/data/productRequest';
//import productShape from '../../helpers/propz/productShape';
import ProductItem from '../ProductItem/ProductItem';
import Modal from 'react-responsive-modal';
import { ModalFooter } from 'reactstrap';
//import { Button } from 'react';


class Home extends React.Component {

  state = {
    product: [],
    open: false,
  }

  componentDidMount() {
    this.allProducts();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  allProducts = () => {
    productRequests.getRequest().then((product) => {
      this.setState({ product });
    })
  }

  render() {
    const { product, open } = this.state;
    const productItemComponent = product.map(product => (
      <ProductItem
        product={product}
        key={product.id}
        onOpenModal={this.onOpenModal}
      />
    ));

    return (
      <div className='product'>
        <div className='productStuff'>{productItemComponent}</div>
        <div className='whatwhat'>
          <Modal className="modal" open={open} onClose={this.onCloseModal} center>
            <img className='product-image' src={product.image} alt='product' />
            <li className='product-title'>{product.title}</li>
            <li className='plant-price'><i>${product.price}</i></li>
            <li className='plant-description'>{product.description}</li>
            <li className='plant-quantity'>We have <b>{product.quantity}</b> in stock.</li>
          </Modal>
        </div>
        <ModalFooter></ModalFooter>
      </div>
    )
  }
}


export default Home;
