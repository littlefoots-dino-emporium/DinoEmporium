import React from 'react';
import PropTypes from 'prop-types';
import HomeItem from '../HomeItem/HomeItem';
import fencingShape from '../../helpers/propz/fencingShape';
import './HomeList.scss';

class HomeList extends React.Component {
  static propTypes = {
    fences: PropTypes.arrayOf(fencingShape)
  }

  render() {
    const {
      fences,
    } = this.props;

    const homeItemComponent = fences && fences.map(fences => (
      <HomeItem
        fences={fences}
        key={fences.id}
      />
    ));

    return (
      <span className='col'>
        <li>{homeItemComponent}</li>
      </span>
    );
  }
}

export default HomeList;