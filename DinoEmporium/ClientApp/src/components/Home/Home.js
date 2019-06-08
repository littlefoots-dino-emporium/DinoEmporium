import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import Modal from '../../helpers/modal/Modal';


class Home extends React.Component {

  state = {
    product: [],
    showModal: false
  }

  componentDidMount() {
    this.allProducts();
  }

  allProducts = () => {
    productRequests.getRequest().then((product) => {
      this.setState({ product });
    })
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { product } = this.state;
    const productItemComponent = product.map(product => (
      <ProductItem
        product={product}
        key={product.id}
      />
    ));

      return (
      <div className="app">
        <button className="modal_opener" onClick={this.toggleModal}>
          Click Me! I Do Not Bite... <span role="img" aria-label="emoji">😛</span>
        </button>

        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>
            <h2>Told Ya!</h2>
            <p>{productItemComponent}</p>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}


export default Home;
