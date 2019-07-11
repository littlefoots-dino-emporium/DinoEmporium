import axios from 'axios';

const PostOrderRequest = (orderInfo) => axios.post(`http://localhost:50319/api/order`, orderInfo);

export default { PostOrderRequest };