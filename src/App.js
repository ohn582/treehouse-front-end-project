import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import login_form from './components/login_form'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './pictures/place_holder.png';
import hb from './pictures/Hamburger_icon.svg.png';
import avatar from './pictures/place_holder2.png';
import Agency from './pictures/Agency.png';
import Supplier from './pictures/Supplier.png';
import client from './pictures/client.png';


class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={hb} class="rounded float-left" alt=" " class="hb" />
          </a>
          <div className="dropdown-menu dropdown-menu-left bg-secondary">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="dropdown-divider"></div>
            <br />
          </div>

          <a className="navbar-brand" class='brand' href="#"><h3>Content Former Logo</h3></a>

          <div className="collapse-navbar-collapse" className="nav" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item active">
                <a className="nav-link" href="#" class="navtext1">
                  <h5>How It Works</h5>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" class="navtext2">
                  <h5>Contact Us</h5>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src='https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/bell.png' class="rounded float-right" alt=" " class="bell" />
                </a>
                <div className="dropdown-menu dropdown-menu-right bg-secondary">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="dropdown-divider"></div>
                  <br />
                </div>
              </li>
              <li className="nav-item dropdown" className="nav2">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                  <img src={icon} class="rounded float-left" alt=" " />
                </a>

                {/* <div className="dropdown-menu">
                  <form class="px-4 py-3">
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                        <label class="form-check-label" for="dropdownCheck">
                          Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </form>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">New around here? Sign up</a>
                  <a class="dropdown-item" href="#">Forgot password?</a>
                </div> */}

                <div className="dropdown-menu dropdown-menu-right bg-secondary">
                  <br />
                  <img src={avatar} class="rounded float-left" alt=" " class="pic" />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="dropdown-divider"></div>
                  <br />
                  <img src={icon} class="rounded float-left" alt=" " class="pic" />
                  <label for="exampleDropdownFormEmail1" href="#" class="droptext">Switch Supplier</label>
                  <br />
                  <br />
                  <br />
                  <br />
                  <img src={icon} class="rounded float-left" alt=" " class="pic" />
                  <label for="exampleDropdownFormPassword1" href="#" class="droptext">Settings</label>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Router>
                    <img src={icon} class="rounded float-left" alt=" " class="pic" />
                    {/* <label for="exampleDropdownFormPassword1" href="#" class="droptext">Log In</label> */}
                    <Link to="/login_form" class="droptext">Log In</Link>
                  </Router>
                </div>             
              </li>
              <Router>
                    <Route path="/login_form" component={login_form} />
              </Router>
            </ul>
          </div>
        </nav>

        <div>
          <h1 class="title">Content Transformer</h1>
          <h2 class="caption">The next generation, AI-powered content transformation and workflow automation platform</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div class="text_overlay1">
          <h1>Title Info</h1>
        </div>
        <div class="text_overlay2">
          <h2>Description: Write anything below!!!</h2>
        </div>
        <div class="portrait1">
          <img src={client} class="rounded float-left" alt=" "/>
        </div>
        <div class="portrait2">
          <img src={Supplier} class="rounded float-left" alt=" "/>
        </div>
        <div class="portrait3">
          <img src={Agency} class="rounded float-left" alt=" "/>
        </div>    
      </>
    );
  }
}


export default App;
