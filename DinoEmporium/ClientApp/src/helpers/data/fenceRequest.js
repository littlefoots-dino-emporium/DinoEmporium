import axios from 'axios';
import apiKeys from '../../firebaseRequests/apiKeys';

const url = 'http://localhost:50312/api/product';
const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${url}/getAllProducts`)
    .then((res) => {
      const fences = res.data;
     resolve(fences);
    })
    .catch(err => reject(err));
});

const getSingleFence = id => axios.get(`${url}/getSingleProduct/${id}`);

export default {
  getRequest,
  getSingleFence,
};