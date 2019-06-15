import React from 'react';
import DinosaurItem from '../DinosaurItem/DinosaurItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';
import SearchField from 'react-search-field';


class Dinosaur extends React.Component {
  state = {
    products: [],
    filteredDinosaurs: [],
  }

  getAllDinosaurs = () => {
    productTypeRequests.getDinoRequest().then((products) => {
      this.setState({ products });
      this.setState({ filteredDinosaurs: products });
    })
    .catch(err => console.error(err));
  }

  componentDidMount = () => {
    this.getAllDinosaurs();
  }

  onChange = (value, e) => {
    const { products } = this.state;
    const filteredDinosaurs = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredDinosaurs: products });
    } else {
      products.forEach((product) => {
        if (product.title.toLowerCase().includes(value.toLowerCase())
          || product.size.toLowerCase().includes(value.toLowerCase())
        ) {
          filteredDinosaurs.push(product);
        }
        this.setState({ filteredDinosaurs });
      });
    }
  }

  render() {
    const { filteredDinosaurs } = this.state;


    
    const dinosaurItemComponent = filteredDinosaurs.map(product => (
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