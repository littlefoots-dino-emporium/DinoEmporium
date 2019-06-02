import React, { Component } from 'react';
import fencingShape from '../../../helpers/propz/fencingShape';



 class FenceItem extends React.Component {
   static propTypes = {
     fence: fencingShape.fencingShape,
   }
 }

  render () {
    return (
      <div className="Home-Product card-group">
      </div>
    );
  }


export default FenceItem;
