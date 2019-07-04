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

  // handleSelect(selectedIndex, e) {
  //   this.setState({
  //     index: selectedIndex,
  //     direction: e.direction,
  //   });
  // }

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
            
            <div className="whole-container"></div>
            <div><img className="slide" src="http://i65.tinypic.com/149w6k2.jpg" alt="this one"></img></div>
           </div>
           </div>
        
        );
      }
    }
    
    
    export default Home;
