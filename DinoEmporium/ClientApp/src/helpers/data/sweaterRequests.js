import axios from 'axios';
import apiKeys from '../../apiKeys';

const firebaseURL = apiKeys.firebaseConfig.databaseURL;

const getSweaterRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/product/getAllProducts`)
    .then((res) => {
      const sweaters = res.data;
      resolve(sweaters);
    })
    .catch(err => reject(err));
});


const createSweater = sweater => axios.post(`${firebaseURL}/sweaters.json`, sweater);

const getAllSweaters = sweaterId => axios.get(`${firebaseURL}/sweaters/${sweaterId}.json`);

export default {
  getSweaterRequest,
  createSweater,
  getAllSweaters
};