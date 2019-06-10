import axios from 'axios';

const postCustomerProductRequest = (customerProductInfo) => axios.post(`http://localhost:50312/api/customerProduct/register`, customerProductInfo);

export default postCustomerProductRequest