import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export class AccountHome extends Component {
  render() {
    return (
      <div>
        <Button outline color="info" tag={RRNavLink} to='/customerprofile'>
        Profile
        </Button>   
        <Button outline color="info">
        PaymentInformation
        </Button>
        <Button outline color="info">
        Reset Password
        </Button>
      </div>
    )
  }
}

export default AccountHome
