import React from 'react';
import './FenceItem.scss';

class FenceItem extends React.Component {


    render() {
        const { fence } = this.props;
        return (
            <div>
                {fence.price}
            </div>
        )
    }
}

export default FenceItem;