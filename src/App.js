import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Content Former Logo</a>

          <div className="collapse-navbar-collapse" className="nav" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">How It Works</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item dropdown" className="nav2">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  V
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

                <div className="dropdown-menu dropdown-menu-right">
                  
                  <div class="dropdown-divider"></div>
                  <label for="exampleDropdownFormEmail1" href="#">Switch Supplier</label>
                  <br/>
                  <label for="exampleDropdownFormPassword1" href="#">Settings</label>
                  <br />
                  <label for="exampleDropdownFormPassword1" href="#">Log In</label>
                  
                </div>
                
              </li>
            </ul>
          </div>
        </nav>

        <Router>
          <div>
            <h1>Welcome to Game App</h1>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
