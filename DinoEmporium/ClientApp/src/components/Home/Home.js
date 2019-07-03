import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Ducky from '../../Images/Duckyxcf.png';
import './Home.scss';

class Home extends React.Component {

  state = {
    products: [],
    index: 0,
    direction: null,
    btn: true,
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

  // specialButton = () => {
  //   $('.hero-btn').click(function(){
  //     if(!$('.hero-btn').parent().hasClass('active')){
  //       $(this).parent().stop().addClass('active');
  //       setTimeout(function(){  
  //         $('.hero-btn').parent().removeClass('active'); 
  //       }, 2000);
  //     }
  //   });
  // }

  // specialButton = () => {
  //   this.setState({
  //     btn: !this.state.btn,
  //     if(btn =! 'true'){
  //       this.parent.stop.addClass('true')
  //     },
  //     setTimeout () {
  //       this.parent.removeCLass('true', 2000)
  //     }
  //   })
  // }

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
            <Link to="/sweaters" className="sweaterLink">
              <div className='hero-btn'>
                <button className='btn' onClick={this.specialButton}>
                  Shop Sweaters
                  </button>
                  </div>
                  </Link>
              <Link to="/fences" className="fencesLink">
              <div className='hero-btn'>
                <button className='btn' onClick={this.specialButton}>
                  Shop Fences
                  </button>
                  </div>
                  </Link>
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
                      <h3>Gate</h3>
                      <p className="description">Necessary for all pens.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="http://i66.tinypic.com/2z6uwpx.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Will Smith's Face</h3>
                      <p className="description">Your dinosaur will be legit in this.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="http://i64.tinypic.com/73ecr4.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Huayangosaurus</h3>
                      <p className="description">I'm a super cool dino, but I need a pack. So don't buy this deal if you can't provide.</p>
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
                      <h3>Dilophosaurus</h3>
                      <p className="description">I'm a great by myself or with others of my kind. Just watch out, I spit!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="http://i68.tinypic.com/kcjcw0.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Cement Wall</h3>
                      <p className="description">I'm better than steel, but I'd be even better with.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="http://i68.tinypic.com/2vsnoec.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Pink Fluffy Sweater</h3>
                      <p className="description">Fuzzy and pink. Don't you just want to cuddle?</p>
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
