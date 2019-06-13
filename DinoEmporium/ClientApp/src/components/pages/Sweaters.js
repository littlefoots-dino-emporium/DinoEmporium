// import React from 'react';
// import SweaterItem from '../SweaterItem/SweaterItem';
// import productTypeRequests from '../../helpers/data/productTypeRequest';


// class Sweaters extends React.Component {
//   props = {
//     productType: [],
//   }

//   componentDidMount() {
//     this.allSweaters();
//   }

//   allSweaters = () => {
//     productTypeRequests.getSweaterRequest().then((productType) => {
//       this.setState({ productType });
//       console.log(productType);
//     })
//   }

//   render() {
//     const { productType } = this.state;
//     const sweaterItemComponent = productType && productType.map(productType => (
//       <SweaterItem
//         productType={productType}
//         key={productType.id}
//       />
//     ));

//     return (
//       <div className='sweaters'>
//         {sweaterItemComponent}
//       </div>
//     );
//   }
// }

// export default Sweaters;