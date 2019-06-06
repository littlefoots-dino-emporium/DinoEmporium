import React from 'react';
import './FenceItem.scss';
 
class FenceItem extends React.Component {


    render() {
        const { fence } = this.props;
        return (
            <div>
                <h1>
                {fence.price}
                </h1>
                
            </div>
        )
    }
}

export default FenceItem;