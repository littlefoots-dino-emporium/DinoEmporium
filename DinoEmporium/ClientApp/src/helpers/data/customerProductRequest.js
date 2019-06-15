import axios from 'axios';

const postCustomerProductRequest = (customerProductInfo) => axios.post(`http://localhost:50312/api/customerProduct/register`, customerProductInfo);

//const getCustomerProductsRequest = uid => axios.get(`http://localhost:50312/api/customerProduct/getCustomerProducts/${uid}`);

const getCustomerProductsRequest = uid => new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:50312/api/customerProduct/getCustomerProducts/${uid}`)
      .then((res) => {
        let customerProducts = res.data;
        console.log(customerProducts);
        resolve(customerProducts);
      })
      .catch(err => reject(err));
  });


export default {
    postCustomerProductRequest,
    getCustomerProductsRequest
}