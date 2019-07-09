import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import Ducky from '../../Images/Duckyxcf.png';
import PackageOne from '../../Images/PackageOne.png';
import PackageTwo from '../../Images/PackageTwo.png'
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
        <div className="whole-links">
          <div className='productLinks'>
            <Link to="/dinosaurs" className="dinosaurLink">
              <div className='v-align' id="align-links">
                <div className='hero-btn'>
                  <button className='btn' id="btnsdinosaurs" onClick={this.specialButton}>
                    Shop Dinosaurs
                  </button>
                </div>
              </div>
            </Link>
            <Link to="/sweaters" className="sweaterLink">
            <div className='v-align' id="align-links">
              <div className='hero-btn'>
                <button className='btn' id="btnsweaters" onClick={this.specialButton}>
                  Shop Sweaters
                  </button>
              </div>
              </div>
            </Link>
            <Link to="/fences" className="fencesLink">
            <div className='v-align' id="align-links">
              <div className='hero-btn'>
                <button className='btn' id="btnsfence" onClick={this.specialButton}>
                  Shop Fences
                  </button>
              </div>
              </div>
            </Link>
          </div>
          </div>
          <img className="deal-image" src={Ducky} alt="ducky"></img>
          <div className="packageImages">
          <img className="package-one" src={PackageOne} alt="packageOne"></img>
          <img className="package-two" src={PackageTwo} alt="packageTwo"></img>
          </div>
          <div className='v-align1' id="buyMe">
            <div className='hero-btn'>
              <div className="first">
                <button className="btn" id="dealOfMonth2" onClick={this.specialButton}>Buy Me!</button>
                <button className="btn" id="dealOfMonth1" onClick={this.specialButton}>Buy Me!</button>
              </div>
            </div>
          </div>
          <div className="background">
            <div className="whole-container">
              
              <div className="animated slideInLeft delay-.5s"><img className="slideInLeftDino" src="http://i65.tinypic.com/149w6k2.jpg" alt="dinosaur in deal"></img></div>
              <div className="animated slideInLeft delay-1s"><img className="slide" src="http://i68.tinypic.com/xgktgj.jpg" alt="gate in deal"></img></div>
              <div className="animated slideInLeft delay-2s"><img className="slideLeft" src="http://i66.tinypic.com/2z6uwpx.jpg" alt="sweater in deal"></img></div>
              
              <div className='v-align'>
                <div className='hero-btn'>
                  {/* /*please do not remove this empty div, it needs to stay here*/}
                </div>
              </div>

              <div className="animated bounceInDown delay-.5s"><img className="bouncedownDino" src="http://i68.tinypic.com/e9zyc6.jpg" alt="dinosaur in deal"></img></div>
              <div className="animated bounceInDown delay-1s"><img className="bouncedownGate" src="http://i65.tinypic.com/20kzjmd.jpg" alt="gate in deal"></img></div>
              <div className="animated bounceInDown delay-2s"><img className="bouncedownSweater" src="http://i68.tinypic.com/2vsnoec.jpg" alt="sweater in deal"></img></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
