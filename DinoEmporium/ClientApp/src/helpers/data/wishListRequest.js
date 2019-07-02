import axios from 'axios';

const postWishListRequest = (customerProductInfo) => axios.post(`http://localhost:50312/api/customerWishList/register`, customerProductInfo);

const getWishListRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/customerWishList/getCustomerWishList/${uid}`)
    .then((res) => {
      let customerProducts = res.data;
      console.log(customerProducts);
      resolve(customerProducts);
    })
    .catch(err => reject(err));
});

const deleteSingleProduct = productId => axios.delete(`http://localhost:50312/api/customerWishList/deleteWishListItem/${productId}`);

export default {
  getWishListRequest,
  postWishListRequest,
  deleteSingleProduct
}