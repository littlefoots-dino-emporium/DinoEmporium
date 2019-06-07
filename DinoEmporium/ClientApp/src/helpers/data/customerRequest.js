import axios from 'axios';

const getCustomerProfile = () => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/customer/3`)
    .then((res) => {
      console.log(res.data);

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