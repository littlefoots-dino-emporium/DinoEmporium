import React from 'react';
import DinosaurItem from '../DinosaurItem/DinosaurItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';


class Dinosaur extends React.Component {

  state = {
    product: [],
    productTypeId: [],
  }


  
  getDinosaurs = () => {
    productTypeRequests.getDinoRequest().then((productType) => {
      this.setState({ productType });
    })
  }

  render() {
    const { productTypeId } = this.state;
    const productTypeComponent = productTypeId.map(productTypeId => (
      <DinosaurItem
        productType={productTypeId}
        key={productTypeId.id}
      />
    ));

    return (
      <div className='producttype'>
        {productTypeComponent}
      </div>
    );
  }
}

export default Dinosaur;