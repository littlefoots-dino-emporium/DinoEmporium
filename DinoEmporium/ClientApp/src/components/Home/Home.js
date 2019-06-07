import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import Modal from 'react-responsive-modal';
import { Button } from 'react';


class Home extends React.Component {

  state = {
    product: [],
    open: false,
  }

  componentDidMount() {
    this.allProducts();
  }

  allProducts = () => {
    productRequests.getRequest().then((product) => {
      this.setState({ product });
      console.log(product);
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

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
      <div className='productStuff'>{productItemComponent}</div>


      
        <Modal className="modal" open={open} onClose={this.onCloseModal} center>
        <img className='product-image' src={product.image} alt='product' />
        <li className='product-title'>{product.title}</li>
        <li className='plant-price'><i>${product.price}</i></li>
        <li className='plant-description'>{product.description}</li>
        <li className='plant-quantity'>We have <b>{product.quantity}</b> in stock.</li>
        </Modal>
        <ModalFooter>
    )
  }
}


export default Home;
