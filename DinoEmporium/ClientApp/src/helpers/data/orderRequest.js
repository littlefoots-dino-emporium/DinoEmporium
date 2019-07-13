import axios from 'axios';

const postOrderRequest = (orderInfo) => axios.post(`http://localhost:50319/api/order`, orderInfo);

export default { postOrderRequest };