import React from 'react';
import './SweaterItem.scss';

class SweaterItem extends React.Component {


    render() {
        const { sweater } = this.props;
        return (
            <div>
                {sweater.title}
                {sweater.price}
            </div>
        )
    }
}

export default SweaterItem;
