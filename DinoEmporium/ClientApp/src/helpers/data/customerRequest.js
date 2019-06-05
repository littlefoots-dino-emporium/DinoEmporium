import axios from 'axios';
import apiKeys from '../../firebaseRequests/apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
// const getCustomerProfile = () => new Promise((resolve, reject) => {
//   axios
//     .get(`https://localhost:50312/api/customer/allCustomers`)
//     .then((res) => {
//       console.log(res);

//       // let customer = '';
//       // if (res.data !== null) {
//       //   Object.keys(res.data).forEach((key) => {
//       //     res.data[key].id = key;
//       //     customer = res.data[key];
//       //   });
//       // }
//       // resolve(customer);
//     })
//     .catch(err => reject(err));
// });

const getCustomerProfile = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:50312/api/customer/1`)
      .then(res => {
        const customers = [];
        resolve(customers);
      })
      .catch(err => {
        reject(err);
      });
  });
}

const postCustomerRequest = (customerEmail, customerName, customerUid) => axios.post(`${firebaseUrl}/customer.json`, customerEmail,customerName,customerUid);

export default {
  postCustomerRequest,
  getCustomerProfile
}