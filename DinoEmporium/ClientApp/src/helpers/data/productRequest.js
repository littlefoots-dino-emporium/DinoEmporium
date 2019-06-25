import axios from 'axios';
import apiKeys from '../../firebaseRequests/apiKeys';

const firebaseURL = apiKeys.firebaseConfig.databaseURL;

 const getRequest = () => new Promise((resolve, reject) => {
   axios
     .get(`http://localhost:50312/api/product/getAllProducts`)
     .then((res) => {
        const products = res.data;
       resolve(products);
     })
     .catch(err => reject(err));
 });

 
const getSingleProduct = productId => axios.get(`${firebaseURL}/products/${productId}.json`);

export default {
  getRequest,
  getSingleProduct,
};