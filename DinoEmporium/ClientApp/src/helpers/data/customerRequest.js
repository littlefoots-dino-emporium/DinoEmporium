import axios from 'axios';

<<<<<<< HEAD
const getCustomerProfile = () => new Promise((resolve, reject) => {
=======

const getCustomerProfile = uid => new Promise((resolve, reject) => {
>>>>>>> master
  axios
    .get(`http://localhost:50312/api/customer/${uid}`)
    .then((res) => {
      let customer = res.data;
      resolve(customer);
    })
    .catch(err => reject(err));
});

const postCustomerRequest = (customerInfo) => axios.post(`http://localhost:50312/api/customer/register`, customerInfo);

export default {
  postCustomerRequest,
  getCustomerProfile
}