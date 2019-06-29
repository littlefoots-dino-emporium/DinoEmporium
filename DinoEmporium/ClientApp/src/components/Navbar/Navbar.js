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
       
        <Navbar color="dark" dark expand="md">
          <NavbarBrand to="/" className="navbar-brand">Littlefoot's Dino Emporium</NavbarBrand>
          <NavbarToggler />
          <div className="collapse navbar-collapse navar-buttons" id="bs-example-navbar-collapse-1">
            {authed ? (
              <Nav>

                <NavItem>
                          <NavLink tag={RRNavLink} to='/home'>
                          <i className="fas fa-home"></i>
                          </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to='/ShoppingCart'>
                  <i className="fas fa-cart-arrow-down"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                          <NavLink tag={RRNavLink} to='/accounthome'>
                          <i className="fas fa-user"></i>
                          </NavLink>
                </NavItem>

                          <NavLink
                                onClick={logoutClickEvent}
                                className="btn btn-danger"
                                tag={RRNavLink} to='/login'
                                
                          >
                                Logout
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
    );
  }
}

export default MyNavbar;