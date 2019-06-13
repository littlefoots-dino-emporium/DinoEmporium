import React from 'react';
import customerShape from '../../helpers/propz/customerShape';
import PropTypes from 'prop-types';
import Button from 'reactstrap';
import './CustomerItem.scss';

class CustomerItem extends React.Component {
  static propTypes = {
    customer: customerShape.customerShape,
    passCustomerToEdit: PropTypes.func,
  }

  editCustomer = (e) => {
    e.preventDefault();
    const { passCustomerToEdit, customer } = this.props;
    passCustomerToEdit(customer.uid);
  }

  render() {
    const { customer } = this.props;

    return (
      <div className="playerFormat container">
        <div className="individualPlayer row">
          <div className="col">
            {customer.firstName}
          </div>
          <div className="col">
            {customer.lastName}
          </div>
          <div className="col">
            {customer.email}
          </div>
          <Button outline color="info" onClick={this.editCustomer}>Edit</Button>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default CustomerItem;