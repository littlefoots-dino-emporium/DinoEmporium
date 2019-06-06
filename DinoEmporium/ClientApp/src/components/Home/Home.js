import React from 'react';
//import fencingShape from '../../helpers/propz/fencingShape';
import fenceRequests from '../../helpers/data/fenceRequests';
import FenceItem from '../FenceItem/FenceItem';
import SweaterItem from '../SweaterItem/SweaterItem';
import sweaterRequests from '../../helpers/data/sweaterRequests';



class Home extends React.Component {
  state = {
    fence: [],
    sweater: [],
  }

  componentDidMount() {
    this.allFences();
    this.allSweaters();
  }

  allFences = () => {
    fenceRequests.getRequest().then((fence) => {
      this.setState({ fence });
    })
  }

  allSweaters = () => {
    sweaterRequests.getSweaterRequest().then((sweater) => {
      this.setState({ sweater });
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
}


export default Home;
