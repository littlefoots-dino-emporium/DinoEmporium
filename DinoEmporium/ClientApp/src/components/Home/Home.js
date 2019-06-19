import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Home.scss';

class Home extends React.Component {

  state = {
    products: [],
  }

  componentDidMount() {
    this.allProducts();
  }

  allProducts = () => {
    productRequests.getRequest().then((products) => {
      this.setState({ products });
    })
  }

  render() {
    const { products } = this.state;
    const productItemComponent =
      <ProductItem
        product={products}
        key={products.id}
      />

    return (
        <div className='productLinks row'>

          <Link to="/dinosaurs" className="link"><Button className="btn dinosaurLinkToPge" color="info"> Dinosaurs</Button></Link>

          <Link to="/sweaters" className="link"><Button className="btn sweaterLinkToPge" color="info">Sweaters</Button></Link>

          <Link to="/fences" className="link"><Button className="btn fenceLinkToPge" color="info">Fences</Button></Link>

        </div>
    );
  }
}


export default Home;
