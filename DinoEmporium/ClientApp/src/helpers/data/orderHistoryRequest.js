import axios from 'axios';


const getOrderHistory = (customerId) => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50319/api/order/allorders/${customerId}`)
    .then((res) => {
      let order = res.data;
      console.log(order);
      resolve(order);
    })
    .catch(err => reject(err));
});

// const postCustomerRequest = (customerInfo) => axios.post(`http://localhost:50319/api/customer/register`, customerInfo);

// const updateCustomerRequest = (customer) => axios.put(`http://localhost:50319/api/customer/${customer}`, customer);

export default {
  // postCustomerRequest,
  getOrderHistory,
  // updateCustomerRequest
}