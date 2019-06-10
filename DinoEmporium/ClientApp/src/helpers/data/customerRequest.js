import axios from 'axios';


const getCustomerProfile = uid => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/customer/${uid}`)
    .then((res) => {
      let customer = res.data;
      resolve(customer);
    })
    .catch(err => reject(err));
});

const postCustomerRequest = (customerInfo) => axios.post(`http://localhost:50312/api/customer/register`, customerInfo);

const updateCustomerRequest = (uid, customer) => axios.put(`http://localhost:50312/api/customer/${uid}`, customer);

export default {
  postCustomerRequest,
  getCustomerProfile,
  updateCustomerRequest
}