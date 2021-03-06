import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import './CheckoutItem.scss';


class CheckoutItem extends React.Component {

    // formFieldStringState = (name,e) => {
    //     e.preventDefault();
    //     const tempInfo = { ...this.state.addNewPayment};
    //     tempInfo[name] = e.target.value;
    //     this.setState({ addNewPayment: tempInfo});
    //   }

    //   paymentTypeChange = e => {
    //     this.formFieldStringState('paymentType', e);
    //   };


    render() {
        const { item, payment } = this.props;
        const paymentType = () => {
            if (item.paymentType == 0) {
                return (
                    "Master Card"
                )
            }
            if (item.paymentType == 1) {
                return (
                    "Visa"
                )
            }
            if (item.paymentType == 2) {
                return (
                    "American Express"
                )
            }
        }

        const lastFour = () => {
            var card = item.accountNumber;
            return (
                card.toString().slice(-4)
            )
        }
        if (item.price != null) {
            return (
                <div class="products-in-checkout">

                    <img class="product-img" src={item.image} alt="cart items" />
                    <div>
                        <h5>{item.title}</h5>
                        <h5>Price: ${item.price}</h5>
                    </div>

                </div>
            )
        }
        if (item.expirationDate != null && item.nameOnCard != null && item.accountNumber != null) {
            return (
                <div class="checkout-item">
                    <div>
                        <Input className="radioButton" type="radio" name="radio1" value={payment} onClick={this.props.selectedCheckoutPayment} />
                    </div>
                    <div>
                        <h5 className="nameOnCard"><u>NAME ON CARD:</u> {item.nameOnCard}</h5>
                        <h5 className="billingAddress"><u>BILLING ADDRESS:</u> {item.address}</h5>
                        <h5 className="cardUsed"><span class="payment-type"><b>{paymentType()}</b></span> ENDING IN <b className="lastFour">{lastFour()}</b></h5>
                    </div>
                </div>
            )
        }

    };

}

export default CheckoutItem;