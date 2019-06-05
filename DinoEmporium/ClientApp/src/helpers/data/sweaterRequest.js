import axios from 'axios';
import apiKeys from '../../apiKeys';

const firebaseURL = apiKeys.firebaseConfig.databaseURL;

const getSweaterRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseURL}/sweaters.json`)
    .then((res) => {
      const sweaters = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          sweaters.push(res.data[key]);
        });
      }
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