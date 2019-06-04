import React from 'react';
//import fencingShape from '../../helpers/propz/fencingShape';
import fenceRequests from '../../helpers/data/fenceRequest';
import FenceItem from '../FenceItem/FenceItem';
import SweaterItem from '../SweaterItem/SweaterItem';



class Home extends React.Component {
  state = {
    fence: [],
    sweater: [],
  }

  componentDidMount() {
    //const uid = authRequests.getCurrentUid();
    //  fenceRequests.getRequest().then((fence) => {
    //      this.setState({ fence });
    //  });

  }

  //  allFences = () => {
  //      fenceRequests.getRequest().then((fence) => {
  //          this.setState({ fence });
  //      })
  //  }
  // this.allFences();
}

allFences = () => {
  fenceRequests.getRequest().then((fence) => {
    this.setState({ fence });
    console.log(fence);
  })
}


render() {
  const { fence } = this.state;
  const fenceItemComponent = fence.map(fence => (
    <FenceItem
      fence={fence}
      key={fence.id}
    />
  ));


  const { sweater } = this.state;
  const sweaterItemComponent = sweater.map(sweater => (
    <SweaterItem
      sweater={sweater}
      key={sweater.id}
    />
  ));


  return (
    <div>
      <div className="all-card">
        {fenceItemComponent}

        {sweaterItemComponent}

      </div>
    </div>
  )
}




export default Home;
