import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getProfileByCustomerId = customerId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/customers.json?orderBy="customerId"&equalTo="${customerId}"`)
    .then((result) => {
      const customerObject = result.data;
      const customerArray = [];
      if (customerObject != null) {
        Object.keys(customerObject).forEach((customerId) => {
          customerObject[customerId].id = customerId;
          customerArray.push(customerObject[customerId]);
        });
      }
      resolve(customerArray);
    })
    .catch((error) => {
      reject(error);
    });
});

const postCustomerRequest = newCustomer => axios.post(`${firebaseUrl}/customers.json`, newCustomer);

export default {
  getProfileByCustomerId,
  postCustomerRequest
}
