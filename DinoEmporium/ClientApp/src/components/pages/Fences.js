import React from 'react';
import FenceItem from '../FenceItem/FenceItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';


class Sweaters extends React.Component {
  state = {
    product: [],
  }

  componentDidMount() {
    this.allFences();
  }

  allFences = () => {
    productTypeRequests.getFenceRequest().then((product) => {
      this.setState({ product });
      console.log(product);
    })
  }

  render() {
    const { product } = this.state;
    const fenceItemComponent = product.map(product => (
      <FenceItem
        product={product}
        key={product.id}
      />
    ));

    return (
      <div className='fences'>
        {fenceItemComponent}
      </div>
    );
  }
}

export default Sweaters;