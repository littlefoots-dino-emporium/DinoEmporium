import axios from 'axios';
import apiKeys from './apiKeys';

const firebaseURL = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseURL}/fences.json`)
    .then((res) => {
      const fences = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          fences.push(res.data[key]);
        });
      }
      resolve(fences);
    })
    .catch(err => reject(err));
});

const getSingleFence = fenceId => axios.get(`${firebaseURL}/fences/${fenceId}.json`);

export default {
  getRequest,
  getSingleFence,
};