import React from 'react';

class CartItem extends React.Component {


    render() {
        const { customerProduct } = this.props;

        return(
            <div> 
                  
            <h2>{customerProduct.title}</h2>
            {/* <h2>{customerProduct.size}</h2>
            <h2>{customerProduct.image}</h2>
            <h2>{customerProduct.price}</h2> */}

            </div>
        )};

}      

export default CartItem
            
            
            
            
            
            
            
            
          