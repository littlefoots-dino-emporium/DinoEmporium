import React from 'react';
import {Link} from 'react-router-dom';

import authRequests from  '../../firebaseRequests/auth';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';

class MyNavbar extends React.Component {
  render () {
    const {authed, runAway} = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runAway();
    };

    return (
      <div className="Navbar">
         <Navbar color="dark" dark expand="md">
        <NavbarBrand  to="/" className="navbar-brand">Littlefoot's Dino Emporium</NavbarBrand>
        <NavbarToggler/>



            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              { authed ? ( <NavLink
                        onClick={logoutClickEvent}
                        className="btn btn-danger"
                      >
                        Logout
                      </NavLink>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/login">Login</Link>
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