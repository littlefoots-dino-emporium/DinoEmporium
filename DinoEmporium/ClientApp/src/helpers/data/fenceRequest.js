import axios from 'axios';
import apiKeys from '../../firebaseRequests/apiKeys';

 const firebaseURL = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`api/product/getAllProducts`)
    .then((res) => {
      console.log(res);
      //const fences = [];
      // if (res.data !== null) {
      //   Object.keys(res.data).forEach((key) => {
      //     res.data[key].id = key;
      //     fences.push(res.data[key]);
      //   });
      // }
      console.log(res.data);
     // resolve(res);
    })
    .catch(err => reject(err));
});
// const getRequest = () => new Promise((resolve, reject) => {
//   axios
//     .get(`${firebaseURL}/fences.json`)
//     .then((res) => {
//       const fences = [];
//       if (res.data !== null) {
//         Object.keys(res.data).forEach((key) => {
//           res.data[key].id = key;
//           fences.push(res.data[key]);
//         });
//       }
//       resolve(fences);
//     })
//     .catch(err => reject(err));
// });

const getSingleFence = fenceId => axios.get(`${firebaseURL}/fences/${fenceId}.json`);

export default {
  getRequest,
  getSingleFence,
};