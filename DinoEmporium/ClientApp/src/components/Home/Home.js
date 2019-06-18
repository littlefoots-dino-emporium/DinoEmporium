import React from 'react';
import productRequests from '../../helpers/data/productRequest';
//import productTypeRequests from '../../helpers/data/productTypeRequest';
import ProductItem from '../ProductItem/ProductItem';
//import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
      console.log(product);
    })
  } 

  render() {
    const { product } = this.state;
    const productItemComponent = 
      <ProductItem
        product={product}
        key={product.id}
      />
    // ));

      return (
        <div className='productLinks'>
          <li><Link to="/dinosaurs">See More Dinosaurs</Link></li>
          <li><Link to="/sweaters">See More Sweaters</Link></li>
          <li><Link to="/fences">See More Fences</Link></li>
        <p>{productItemComponent}</p>
        </div>
    );
  }
}


export default Home;
