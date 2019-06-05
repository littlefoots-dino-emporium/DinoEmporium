import React from 'react';
//import fencingShape from '../../helpers/propz/fencingShape';
import fenceRequests from '../../helpers/data/fenceRequest';
import FenceItem from '../FenceItem/FenceItem';
import SweaterItem from '../SweaterItem/SweaterItem';
import sweaterRequest from '../../helpers/data/sweaterRequest';



 class Home extends React.Component {
     state = {
         fences: [], 
         sweater: [],
     }

     //componentDidMount() {
         //const uid = authRequests.getCurrentUid();
        //  fenceRequests.getRequest().then((fence) => {
        //      this.setState({ fence });
        //  });

        //}

        //  allFences = () => {
        //      fenceRequests.getRequest().then((fence) => {
        //          this.setState({ fence });
        //      })
        //  }
       // this.allFences();

       componentDidMount() {
         sweaterRequest.getAllSweaters()
         .then((sweaters) => {
          this.setState({ sweaters });
         })
         .catch(err => console.error('error with componentDidMount getSweater request'));
       }

         allFences = () => {
             fenceRequests.getRequest().then((fences) => {
                 this.setState({ fences });
                 console.log(fences);
             })
         }

         allSweaters = () => {
           sweaterRequest.getRequest().then((sweaters) => {
             this.setState({ sweaters });
             console.log(sweaters);
           })
         }


         render() {
             const { 
               fences,
             } = this.state;


             const fenceItemComponent = fences.map(fence => (
                 <FenceItem
                 fence = {fences}
                 key = {fences.id}
                 />
             ));
             

             const { sweater } = this.state;
             const sweaterItemComponent = sweater.map(sweater => (
               <SweaterItem
               sweater = {sweater}
               key = {sweater.id}
               />
             ))


             return (
                 <div>
                     <div className="card-body">
                         {fenceItemComponent}

                         {sweaterItemComponent}

                     </div>
                 </div>
             )
         }
        }
 


export default Home;
