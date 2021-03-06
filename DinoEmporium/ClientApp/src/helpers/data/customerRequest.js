import axios from 'axios';


const getCustomerProfile = uid => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50319/api/customer/${uid}`)
    .then((res) => {
      let customer = res.data;
      resolve(customer);
    })
    .catch(err => reject(err));
});

const postCustomerRequest = (customerInfo) => axios.post(`http://localhost:50319/api/customer/register`, customerInfo);

const updateCustomerRequest = (customer) => axios.put(`http://localhost:50319/api/customer/${customer}`, customer);

export default {
  postCustomerRequest,
  getCustomerProfile,
  updateCustomerRequest
}