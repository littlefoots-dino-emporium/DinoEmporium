import axios from 'axios';

const getWishListRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/customerWishList/getCustomerProducts/${uid}`)
    .then((res) => {
      let customerProducts = res.data;
      console.log(customerProducts);
      resolve(customerProducts);
    })
    .catch(err => reject(err));
});