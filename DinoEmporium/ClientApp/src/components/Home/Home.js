import React from 'react';
//import fencingShape from '../../helpers/propz/fencingShape';
import fenceRequests from '../../helpers/data/fenceRequest';
import FenceItem from '../FenceItem/FenceItem';


 class Home extends React.Component {
     state = {
         fence: [], 
         singleFence: ''
     }
     componentDidMount() {
         //const uid = authRequests.getCurrentUid();
        //  fenceRequests.getRequest().then((fence) => {
        //      this.setState({ fence });
        //  });
        this.allFences();
        }

         allFences = () => {
             fenceRequests.getRequest().then((fence) => {
                 this.setState({ fence });
                 console.log(fence);
             })
         }

         singleFence = () => {
            fenceRequests.getSingleFence().then((fence) => {
                this.setState({ fence });
                console.log(fence);
            })
        }

         render() {
             const { fence } = this.state;
             const fenceItemComponent = fence.map(fence => (
                 <FenceItem
                 fence = {fence}
                 key = {fence.id}
                 />
             ));

             return (
                 <div>
                     <div className="all-card">
                         {fenceItemComponent} 
                     </div>
                 </div>
             )
         }
     }
 


export default Home;
