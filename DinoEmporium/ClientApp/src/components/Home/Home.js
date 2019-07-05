import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
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

          <div className="whole-container">
            <div className="animated slideInLeft delay-.5s"><img className="slideInLeft" src="http://i65.tinypic.com/149w6k2.jpg" alt="dinosaur in deal"></img></div>
            <div className="animated slideInLeft delay-1s"><img className="slide" src="http://i68.tinypic.com/xgktgj.jpg" alt="gate in deal"></img></div>
            <div className="animated slideInLeft delay-2s"><img className="slideLeft" src="http://i66.tinypic.com/2z6uwpx.jpg" alt="sweater in deal"></img></div>
            <div className='v-align'>
              <div className='hero-btn'>
                <button className="btn dealOfMonth1" onClick={this.specialButton}>Buy Me!</button>
              </div>
            </div>
            <div className="animated bounceInDown delay-.5s"><img className="bouncedownDino" src="http://i68.tinypic.com/e9zyc6.jpg" alt="dinosaur in deal"></img></div>
            <div className="animated bounceInDown delay-1s"><img className="bouncedownGate" src="http://i65.tinypic.com/20kzjmd.jpg" alt="gate in deal"></img></div>
            <div className="animated bounceInDown delay-2s"><img className="bouncedownSweater" src="http://i68.tinypic.com/2vsnoec.jpg" alt="sweater in deal"></img></div>
            <div className='v-align1'>
              <div className='hero-btn'>
                <button className="btn dealOfMonth2" onClick={this.specialButton}>Buy Me!</button>
              </div>
            </div>
              </div>
            </div>
          </div>
          );
        }
      }
      
      
      export default Home;
