import React from 'react';
import DinosaurItem from '../DinosaurItem/DinosaurItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';


class Dinosaur extends React.Component {
  state = {
    productType: [],
  }

  componentDidMount() {
    this.allDinos();
  }

  allDinos = () => {
    productTypeRequests.getDinoRequest().then((productType) => {
      this.setState({ productType });
    })
  }

  render() {
    const { productType } = this.state;
    const dinosaurItemComponent = productType.map(productType => (
      <DinosaurItem
        product={productType}
        key={productType.id}
      />
    ));

    return (
      <div className='dinosaurs'>
        {dinosaurItemComponent}
      </div>
    );
  }
}

export default Dinosaur;