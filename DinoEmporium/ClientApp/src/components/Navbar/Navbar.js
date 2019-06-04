import React from 'react';
// import {Link} from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
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
    };

    return (
      <div className="Navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand to="/" className="navbar-brand">Littlefoot's Dino Emporium</NavbarBrand>
          <NavbarToggler />



          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {authed ? (
              <Nav>
                <NavItem>
                  <NavLink tag={RRNavLink} to='/{customerId}/home'>
                    Home
              </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to='/{customerId}/customerprofile'>
                    Profile
              </NavLink>
                </NavItem>
                <NavLink
                  onClick={logoutClickEvent}
                  className="btn btn-danger"
                >
                  Logout
              </NavLink>
              </Nav>
            ) : (
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