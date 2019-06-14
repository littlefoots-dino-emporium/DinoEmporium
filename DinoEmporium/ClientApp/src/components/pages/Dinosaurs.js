import React from 'react';
import DinosaurItem from '../DinosaurItem/DinosaurItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';
import SearchField from 'react-search-field';


class Dinosaur extends React.Component {
  state = {
    product: [],
    filteredDinosaurs: [],
  }

  allDinosComponentDidMount = () => {
    productTypeRequests.getDinoRequest().then((product) => {
      this.setState({ product });
      this.setState({ filteredDinosaurs: product });
    })
  }

  onChange = (value, e) => {
    const { product } = this.state;
    const filteredDinosaurs = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredDinosaurs: product });
    } else {
      product.forEach((product) => {
        if (product.title.toLowerCase().includes(value.toLowerCase())
          || product.price.toLowerCase().includes(value.toLowerCase())
          || product.size.toLowerCase().includes(value.toLowerCase())
        ) {
          filteredDinosaurs.push(product);
        }
        this.setState({ filteredDinosaurs });
      });
    }
  }

  render() {
    const { product } = this.state;
    const dinosaurItemComponent = product.map(product => (
      <div>
        <DinosaurItem 
          product={product}
          key={product.id}
        />
        </div>
    ));

    return (
      <div>
      <SearchField
      placeholder="Search Dinosaurs..."
      onChange={this.onChange}
      searchText=""
      classNames="test-class w-50 mt-auto"
    />
      <div className='dinosaurs'>
        {dinosaurItemComponent}
      </div>
      </div>
    );
  }
}

export default Dinosaur;