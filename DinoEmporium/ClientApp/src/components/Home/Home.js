import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import { Button } from 'reactstrap';


class Home extends React.Component {

  state = {
    product: [],
  }

  componentDidMount() {
    this.allProducts();
  }

  allProducts = () => {
    productRequests.getRequest().then((product) => {
      this.setState({ product });
    })
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
        <div>
        <Button className='btn btn seeDinosaurs' onClick={this.passToDinoPage}>See All Dinosaurs</Button>
        <p>{productItemComponent}</p>
        </div>
    );
  }
}


export default Home;
