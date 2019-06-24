import React from 'react';
import {Route, BrowserRouter, Redirect, Switch}  from 'react-router-dom';
import firebase from 'firebase';
import connection from '../firebaseRequests/connection';
import Home from '../components/Home/Home';
import CustomerProfile from '../components/CustomerProfile/CustomerProfile';
import Login from '../components/Login/Login';
import MyNavbar from '../components/Navbar/Navbar';
import Dinosaurs from '../components/pages/Dinosaurs';
import Sweaters from '../components/pages/Sweaters';
import Fences from '../components/pages/Fences';
import AccountHome from '../components/AccountHome/AccountHome';
import Register from '../components/Register/Register';
import OrderHistory from '../components/OrderHistory/OrderHistory';
import fbConnection from '../firebaseRequests/connection';
import './App.scss';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import PaymentInformation from '../components/PaymentInformation/PaymentInformation';
import WishList from '../components/WishList/WishList';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/orders', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state={
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  runAway = () => {
    this.setState({authed: false});
  }

  render () {
    const {
      authed,
    } = this.state 

    if (!authed) {
      return (
        <div className="App">
          <MyNavbar
              authed={this.state.authed}
              runAway={this.runAway}
              component={Login}
            />
          <Route path="/" exact component={Login}/>  
          <PublicRoute
              path="/login"
              authed={this.state.authed}
              component={Login}
              />
          <PublicRoute
              path="/register"
              authed={this.state.authed}
              component={Register}
                  />
        </div>
      )
    }

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MyNavbar
              authed={this.state.authed}
              runAway={this.runAway}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <PrivateRoute path='/customerprofile' exact component={CustomerProfile} authed={this.state.authed} />
                  <PrivateRoute path='/home' exact component={Home} authed={this.state.authed} />
                  <PrivateRoute path='/shoppingCart' exact component={ShoppingCart} authed={this.state.authed} />
                  <PrivateRoute path='/dinosaurs' exact component={Dinosaurs} authed={this.state.authed} />
                  <PrivateRoute path='/sweaters' exact component={Sweaters} authed={this.state.authed} />
                  <PrivateRoute path='/fences' exact component={Fences} authed={this.state.authed} />
                  <PrivateRoute path='/accounthome' exact component={AccountHome} authed={this.state.authed} />
                  <PrivateRoute path='/paymentInformation' exact component={PaymentInformation} authed={this.state.authed} />
                  <PrivateRoute path='/orderhistory' exact component={OrderHistory} authed={this.state.authed} />
                  <PrivateRoute path='/wishlist' exact component={WishList} authed={this.state.authed} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;