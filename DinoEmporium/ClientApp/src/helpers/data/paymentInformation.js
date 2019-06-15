import axios from 'axios';


const getPaymentInformation = uid => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/paymentInformation/${uid}`)
    .then((res) => {
      let customer = res.data;
      resolve(customer);
    })
    .catch(err => reject(err));
});

const postPaymentInformation = (paymentInformation) => axios.post(`http://localhost:50312/api/paymentInformation/register`, paymentInformation);

export default {
    getPaymentInformation,
    postPaymentInformation
}