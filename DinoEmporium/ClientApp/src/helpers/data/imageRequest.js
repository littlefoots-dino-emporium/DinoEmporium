import axios from 'axios';
import apiKeys from '../../firebaseRequests/apiKeys';

const firebaseURL = apiKeys.firebaseConfig.databaseURL;

 const getRequest = () => new Promise((resolve, reject) => {
   axios
     .get(`${firebaseURL}/images.json`)
     .then((res) => {
        const products = res.data;
       resolve(products);
     })
     .catch(err => reject(err));
 });

const getImage = imageId => axios.get(`${firebaseURL}/images/${imageId}.json`);

export default {
  getRequest,
  getImage
};