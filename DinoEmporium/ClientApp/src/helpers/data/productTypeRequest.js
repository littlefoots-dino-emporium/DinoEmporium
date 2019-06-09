import axios from 'axios';
//import apiKeys from '../../firebaseRequests/apiKeys';

//const firebaseURL = apiKeys.firebaseConfig.databaseURL;

 const getSweaterRequest = () => new Promise((resolve, reject) => {
   axios
     .get(`http://localhost:50312/api/productType/getSingleType/1`)
     .then((res) => {
        const productType = res.data;
       resolve(productType);
     })
     .catch(err => reject(err));
 });

 const getDinoRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/productType/getAllTypes`)
    .then((res) => {
       const productType = res.data;
       console.log(productType, 'dinos');
      resolve(productType);
      
    })
    .catch(err => reject(err));
});

const getFenceRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/productType/getSingleType/3`)
    .then((res) => {
       const productType = res.data;
      resolve(productType);
    })
    .catch(err => reject(err));
});

export default {
  getSweaterRequest,
  getDinoRequest,
  getFenceRequest
};