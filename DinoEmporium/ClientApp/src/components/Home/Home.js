import React from 'react';
import productRequests from '../../helpers/data/productRequest';
//import productTypeRequests from '../../helpers/data/productTypeRequest';
import ProductItem from '../ProductItem/ProductItem';
//import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends React.Component {

  state = {
    product: [],
    productType: [],
  }

  componentDidMount() {
    this.allProducts();
  }

  allProducts = () => {
    productRequests.getRequest().then((product) => {
      this.setState({ product });
    })
  } 
  
  passToDinos = productTypeId => this.props.history.push(`/home/${productTypeId}`);

  render() {
    const { product } = this.state;
    const productItemComponent = product.map(product => (
      <ProductItem
        product={product}
        key={product.id}
      />
    ));

      return (
        <div className='productLinks'>
        <p>{productItemComponent}</p>
        </div>
    );
  }
}


export default Home;
