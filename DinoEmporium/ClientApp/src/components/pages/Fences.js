import React from 'react';
import FenceItem from '../FenceItem/FenceItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';
import SearchField from 'react-search-field';
import './Fences.scss';

class Sweaters extends React.Component {
  state = {
    products: [],
    filteredFences: [],
  }

  getallFences = () => {
    productTypeRequests.getFenceRequest().then((products) => {
      this.setState({ products });
      this.setState({ filteredFences: products })
    })
    .catch(err => console.error(err));
  }

  componentDidMount = () => {
    this.getallFences();
  }

  onChange = (value, e) => {
    const { products } = this.state;
    const filteredFences = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredFences: products });
    } else {
      products.forEach((product) => {
        if (product.title.toLowerCase().includes(value.toLowerCase())
          || product.description.toLowerCase().includes(value.toLowerCase())
          || product.size.toLowerCase().includes(value.toLowerCase())
        ) {
          filteredFences.push(product);
        }
        this.setState({ filteredFences });
      });
    }
  }

  render() {
    const { filteredFences } = this.state;


    const fenceItemComponent = filteredFences.map(product => (
      <div>
      <FenceItem
        product={product}
        key={product.id}
      />
      </div>
    ));

    return (
      <div className = "searchField">
      <SearchField
      placeholder="Search Fences..."
      onChange={this.onChange}
      searchText=""
      classNames="test-class w-50 mt-auto"
    />
      <div className='fencesComponentDiv'>
        {fenceItemComponent}
      </div>
      </div>
    );
  }
}

export default Sweaters;