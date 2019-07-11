import React from 'react';
import SweaterItem from '../SweaterItem/SweaterItem';
import productTypeRequests from '../../helpers/data/productTypeRequest';
import SearchField from 'react-search-field';

import './Sweaters.scss';

class Sweaters extends React.Component {
  state = {
    products: [],
    filteredSweaters: [],
  }

  getAllSweaters = () => {
    productTypeRequests.getSweaterRequest().then((products) => {
      this.setState({ products });
      this.setState({ filteredSweaters: products })
    })
  }


  componentDidMount() {
    this.getAllSweaters();
  }

  onChange = (value, e) => {
    const { products } = this.state;
    const filteredSweaters = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredSweaters: products });
    } else {
      products.forEach((product) => {
        if (product.title.toLowerCase().includes(value.toLowerCase())
          || product.description.toLowerCase().includes(value.toLowerCase())
          || product.size.toLowerCase().includes(value.toLowerCase())
        ) {
          filteredSweaters.push(product);
        }
        this.setState({ filteredSweaters });
      });
    }
  }


  render() {
    const { filteredSweaters } = this.state;


    const sweaterItemComponent = filteredSweaters.map(product => (
      <div>
        <SweaterItem
          product={product}
          key={product.id}
        />
      </div>
    ));


    return (
      <div>
        <div className="searchbar">
          <SearchField
            placeholder="Search Sweaters..."
            onChange={this.onChange}
            searchText=""
            classNames="searchbar w-50 mt-auto rounded border-warning"
          />
        </div>
        <div className='sweatersComponentDiv'>
          {sweaterItemComponent}
        </div>
      </div>
    );
  }
}

export default Sweaters;