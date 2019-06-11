import React from 'react';
import SweaterItem from '../SweaterItem/SweaterItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';


class Sweaters extends React.Component {
  state = {
    product: [],
  }

  componentDidMount() {
    this.allSweaters();
  }

  allSweaters = () => {
    productTypeRequests.getSweaterRequest().then((product) => {
      this.setState({ product });
      console.log(product);
    })
  }

  render() {
    const { product } = this.state;
    const sweaterItemComponent = product.map(product => (
      <SweaterItem
        product={product}
        key={product.id}
      />
    ));

    return (
      <div className='sweaters'>
        {sweaterItemComponent}
      </div>
    );
  }
}

export default Sweaters;