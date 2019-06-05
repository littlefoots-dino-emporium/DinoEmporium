import axios from 'axios';
import apiKeys from '../../firebaseRequests/apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getCustomerProfile = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/customer.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      // let customer = '';
      // if (res.data !== null) {
      //   Object.keys(res.data).forEach((key) => {
      //     res.data[key].id = key;
      //     customer = res.data[key];
      //   });
      // }
      // resolve(customer);
    })
    .catch(err => reject(err));
});

const postCustomerRequest = (customerInfo) => axios.post(`http://localhost:50312/api/customer/register`, customerInfo);

export default {
  postCustomerRequest,
  getCustomerProfile
}