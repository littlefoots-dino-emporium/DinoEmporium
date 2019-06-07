import React from 'react';
import productRequests from '../../helpers/data/productRequest';
import ProductItem from '../ProductItem/ProductItem';



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
             const productItemComponent = product.map(product => (
                 <ProductItem
                 product = {product}
                 key = {product.id}
                 />
             ));

             return (
                 <div>
                     <div className="productCards">
                         {productItemComponent}
                     </div>
                 </div>
             )
         }
     }


export default Home;
