import React from 'react';
import { NavLink as RRNavLink, Redirect } from 'react-router-dom';
import authRequests from '../../firebaseRequests/auth';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavItem
} from 'reactstrap';
import Banner from '../../Images/Banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';

class MyNavbar extends React.Component {
  render() {
    const { authed, runAway } = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runAway();
      return <Redirect to='/login' />
    };

    return (
      <div className="Navbar">
        <div className="container">
          <Navbar expand="md">
            <NavbarBrand to="/" className="navbar-brand">
            <img className='littlefoot-image' src={Banner} alt='product' /></NavbarBrand>
            <NavbarToggler />
            <div className="yes">
              {authed ? (
                <Nav className="secondary-navbar-links">
                  <NavItem className="container1">
                    <NavLink tag={RRNavLink} to='/home'>
                      HOME
                      </NavLink>
                  </NavItem>
                  <NavItem className="container2">
                    <NavLink tag={RRNavLink} to='/ShoppingCart'>
                      SHOPPING CART
                      </NavLink>
                  </NavItem>
                  <NavItem className="container3">
                    <NavLink tag={RRNavLink} to='/accounthome'>
                      USER ACCOUNT
                      </NavLink>
                  </NavItem>

                  <NavLink className="btn btn container4"
                    onClick={logoutClickEvent}
                    tag={RRNavLink} to='/login'>
                    LOGOUT
                  </NavLink>
                </Nav>

              )
                :
                (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                    </li>
                  </ul>
                )
              }
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default MyNavbar;