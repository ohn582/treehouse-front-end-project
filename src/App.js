import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Content Former Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse-navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  V
                </a>


                {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <form class="px-4 py-3">
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="dropdownCheck">
                        <label class="form-check-label" for="dropdownCheck">
                          Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </form>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">New around here? Sign up</a>
                  <a class="dropdown-item" href="#">Forgot password?</a>
                </div> */}w
                
              </li>
            </ul>
          </div>
        </nav>
        <Router>
          <div>
            <h1>Welcome to Game App</h1>
            <Link to="/home" className='home'>Home</Link>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
