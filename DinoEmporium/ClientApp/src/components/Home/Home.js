import React, { Component } from 'react';
import fencingShape from '../../../helpers/propz/fencingShape';
import fenceRequests from '../../../helpers/data/fenceRequest'


 class FenceItem extends React.Component {
   static propTypes = {
     fence: fencingShape.fencingShape,
   }
 

  render () {
    const { fence } = this.props;
    const fenceId = fenceRequests.getRequest();
    console.log(fenceId);
    return (
      <div className="Home-Product card-group">
        <span className='fence-image'>{fence.image}</span>
        <span className='fence-structure'>{fence.structure}</span>
        <span className='fence-price'>{fence.price}</span>
        <span className='fence-description'>{fence.description}</span>
      </div>
    );
  }
 }

export default FenceItem;
