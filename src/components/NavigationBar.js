import React from 'react';
import { Link as Router, Route, Link, Switch} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import icon from './pictures/place_holder.png';
import avatar from './pictures/place_holder2.png';


const Styles = styled.div`
  .navbar {
    background-color: #00BFFF;
    height: 95px;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #000;
    right: 1199;

    &:hover {
      color: white;
    }
  }

  .navtext1{
    position: relative; 
    top: 3px; 
    right: -10px;
    text-decoration: none;
    color: black;
  }

  .navtext2{
    position: relative; 
    top: 10px; 
    right: -570px;
    text-decoration: none;
    color: black;
  }

  .navtext3{
    position: relative; 
    top: 10px; 
    right: -595px;
    text-decoration: none;
    color: black;
  }

  .pic{
    // position: absolute;
    width: 40%;
    height: 60px;
    float: left;
    left: -80px;
  }

  .pic2{
    width: 5%;
    height: 70px;
    top: 12px; 
    float: right;
    position: absolute;
    right: 30px;
  }

  .bell{
    width: 50px;
    height: 50px;
    float: right;
    position: absolute;
    right: 130px;
  }

  .droptext{
    position: relative; 
    top: 10px; 
    left: 20px; 
  }

`;

export const NavigationBar = () => (
  <>
    <dev> 
      <Styles>
        <Navbar expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link">

              <li className="nav-item active">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src='https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/bell.png' class="rounded float-right" alt=" " class="bell" />
                </a>
                <div className="dropdown-menu dropdown-menu-right bg-secondary">
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="dropdown-divider"></div>
                  <br />
                </div>
              </li>

              <li className="nav-item dropdown" className="nav2" >
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={icon} class="rounded float-left" alt=" " className='pic2'/>
                </a>

                <div className="dropdown-menu dropdown-menu-right bg-secondary" >
                  <br />
                  <img src={avatar} class="rounded float-left" alt=" " class="pic" />
                  <br />
                  <br />
                  <br />
                  <div class="dropdown-divider"></div>
                  <br />
                  {/* <img src={icon} class="rounded float-left" alt=" " class="pic" />
                  <label for="exampleDropdownFormEmail1" href="#" class="droptext">Switch Supplier</label> */}
                  
                  <br />
                  <img src={icon} class="rounded float-left" alt=" " class="pic" />
                  <label  href="#" class="droptext">Settings</label>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Nav.Item>
                    <Nav.Link>
                      <img src={icon} class="rounded float-left" alt=" " class="pic" />
                      {/* <label for="exampleDropdownFormPassword1" href="#" class="droptext">Log In</label> */}
                      <Link to="/login" class="droptext">Log In</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <br />
                </div>
              </li>


              <Nav.Item>
                <Nav.Link>
                  <h2><Link to="/" className='navtext1'>Content Former Logo</Link></h2>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <h4><Link to="/HowItWorks" className='navtext2'>How It Works</Link></h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <h4><Link to="/contact" className='navtext3'>Contact Us</Link></h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        
      </Styles >
    </dev>
  </>
)
