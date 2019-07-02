import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Ducky from '../../Images/Ducky.png';
import $ from 'jQuery';
import './Home.scss';

class Home extends React.Component {

  state = {
    products: [],
    index: 0,
    direction: null
  }



  componentDidMount() {
    this.allProducts();
  }

  allProducts = () => {
    productRequests.getRequest().then((products) => {
      this.setState({ products });
    })
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  specialButton = () => {
    $('.hero-btn').click(function(){
      if(!$('.hero-btn').parent().hasClass('active')){
        $(this).parent().stop().addClass('active');
        setTimeout(function(){  
          $('.hero-btn').parent().removeClass('active'); 
        }, 2000);
      }
    });
  }

specialButton = () => {

}

  render() {
    const { products } = this.state;
    const productItemComponent =
      <ProductItem
        product={products}
        key={products.id}
      />

    return (
      <div className="container">
        <div className="homePage">

          <div className='productLinks row'>
            <Link to="/dinosaurs" className="dinosaurLink">
              <div className='v-align'>
                <div className='hero-btn'>
                  <button className='btn' onClick={this.specialButton}>
                    Shop Dinosaurs
                  </button>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                  <span className='particles-circle'></span>
                </div>
              </div>
            </Link>
            <Link to="/sweaters" className="sweaterLink">Shop Sweaters</Link>

            <Link to="/fences" className="fencesLink">Shop Fences</Link>
          </div>

          <img className="deal-image" src={Ducky} alt="ducky"></img>
          <div className="whole-container-caurosel">
            <div className="caurosel-container1">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="http://i68.tinypic.com/xgktgj.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="http://i66.tinypic.com/2z6uwpx.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="http://i64.tinypic.com/73ecr4.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>


            <div className="caurosel-container2">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="http://i66.tinypic.com/141jsjd.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="http://i68.tinypic.com/kcjcw0.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="http://i68.tinypic.com/2vsnoec.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
