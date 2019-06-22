import axios from 'axios';


const getPaymentInformation = customerId => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:50312/api/paymentInformation/allpaymentsOfCustomer/${customerId}`)
    .then((res) => {
      let customer = res.data;
      if(!customer)
      {
          resolve("Please add payment information!")
      }
      console.log(customer);
      resolve(customer);
    })
    .catch(err => reject(err));
});

const postPaymentInformation = (paymentInformation) => axios.post(`http://localhost:50312/api/PaymentInformation/register`, paymentInformation);

const deleteSinglePaymentInformation = paymentId => axios.delete(`http://localhost:50312/api/paymentInformation/deletePayment/${paymentId}`);

export default {
    getPaymentInformation,
    postPaymentInformation,
    deleteSinglePaymentInformation
}