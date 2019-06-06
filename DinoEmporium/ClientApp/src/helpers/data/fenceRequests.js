import axios from 'axios';
//import apiKeys from '../../apiKeys';
import apiKeys from '../../firebaseRequests/apiKeys';

const firebaseURL = apiKeys.firebaseConfig.databaseURL;

 const getRequest = () => new Promise((resolve, reject) => {
   axios
     .get(`http://localhost:50312/api/product/getAllProducts`)
     .then((res) => {
        const fences = res.data;
       resolve(fences);
     })
     .catch(err => reject(err));
 });

const getSingleFence = fenceId => axios.get(`${firebaseURL}/fences/${fenceId}.json`);

export default {
  getRequest,
  getSingleFence,
};