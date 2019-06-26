import axios from 'axios';


const getOrderHistory = () => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/order/allorders/18`)
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