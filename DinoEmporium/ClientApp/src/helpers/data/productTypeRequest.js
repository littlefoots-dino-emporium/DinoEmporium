import axios from 'axios';
//import apiKeys from '../../firebaseRequests/apiKeys';

//const firebaseURL = apiKeys.firebaseConfig.databaseURL;

 const getSweaterRequest = () => new Promise((resolve, reject) => {
   axios
     .get(`http://localhost:50319/api/productType/sweaterTypes`)
     .then((res) => {
        const productType = res.data;
        console.log(productType, 'sweaters');
       resolve(productType);
     })
     .catch(err => reject(err));
 });

 const getDinoRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50319/api/productType/dinosaurTypes`)
    .then((res) => {
       const productType = res.data;
       console.log(productType, 'dinos');
      resolve(productType);
      
    })
    .catch(err => reject(err));
});

const getFenceRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50319/api/productType/fenceTypes`)
    .then((res) => {
       const productType = res.data;
       console.log(productType, 'fences');
      resolve(productType);
    })
    .catch(err => reject(err));
});

export default {
  getSweaterRequest,
  getDinoRequest,
  getFenceRequest
};