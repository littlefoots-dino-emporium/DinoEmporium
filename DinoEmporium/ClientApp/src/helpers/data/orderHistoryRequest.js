import axios from 'axios';


const getOrderHistory = (customerId) => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/order/${customerId}`)
    .then((res) => {
      let order = res.data;
      console.log(order);
      resolve(order);
    })
    .catch(err => reject(err));
});

// const postCustomerRequest = (customerInfo) => axios.post(`http://localhost:50312/api/customer/register`, customerInfo);

// const updateCustomerRequest = (customer) => axios.put(`http://localhost:50312/api/customer/${customer}`, customer);

export default {
  // postCustomerRequest,
  getOrderHistory,
  // updateCustomerRequest
}