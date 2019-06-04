import React from 'react';
import PropTypes from 'prop-types';
import sweaterShape from '../../helpers/propz/sweaterShape';

import './SweaterItem.scss';

const defaultValue = {
  sweaterId: '',
};

class SweaterItem extends React.Component {
  static propTypes = {
    sweater: sweaterShape,
    updateSweaterState: PropTypes.func,
  }

  state = {
    sweaterObject: defaultValue,
  }

  helloSweaters = () => {
    const sweaterObject = { ...this.state.sweaterObject };
    const { sweater, updateSweaterState } = this.props;
    sweaterObject.sweaterId = sweater.id;
    updateSweaterState('create', 'none', sweaterObject);
  }

  render() {
    const { sweater } = this.props;
  

  return (
    <div className="card-group">
      <ul className="card bg-transparent">
        <ul className='card-body'>
          <li className='sweater-name'>{sweater.name}</li>
        </ul>
      </ul>
    </div>
  );
  }
}

export default SweaterItem;
