import axios from 'axios';

const PostOrderRequest = (orderInfo) => axios.post(`http://localhost:50312/api/order/register`, orderInfo);

export default PostOrderRequest;