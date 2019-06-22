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
      <div className="homePage">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="http://i68.tinypic.com/bikl5d.jpg" alt="First slide" position="center"></img>
              <h1>Hey</h1>
            </div>
            <div class="carousel-item active">
              <img class="d-block w-100" src="http://i66.tinypic.com/25qszlu.jpg" alt="Second slide"></img>
              <h1>hey</h1>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="http://i68.tinypic.com/2ikz91v.jpg" alt="Third slide"></img>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      <div className='productLinks row'>

        <Link to="/dinosaurs" className="homeLink"><Button className="btn dinosaurLinkToPge" color="info">Shop Dinosaurs</Button></Link>

        <Link to="/sweaters" className="homeLink"><Button className="btn sweaterLinkToPge" color="info">Shop Sweaters</Button></Link>

        <Link to="/fences" className="homeLink"><Button className="btn fenceLinkToPge" color="info">Shop Fences</Button></Link>

      </div>
      </div>
    );
  }
}


export default Home;
