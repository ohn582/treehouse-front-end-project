import React from 'react'

import styled from 'styled-components';

const Styles = styled.div`
  .contactTest1 {
    position: absolute; 
    top: 590px; 
    right: 0; 
    width: 100%; 
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  .contactTest2 {
    position: absolute; 
    top: 650px; 
    right: 0; 
    width: 100%; 
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  .contactTest3 {
    position: absolute; 
    top: 650px; 
    right: 0; 
    width: 100%; 
    font-family: Arial, Helvetica, sans-serif;
  }
  .form {
    position: absolute; 
    top: 670px;

  }

  .link {
    position: absolute; 
    top: 910px; 
  }
`;

export const Login = () => (
    <div class='contactTest3'>
        <Styles>
            <h2 class='contactTest1'>Login</h2>
            <form class="px-4 py-3" className="form">
                <div class="form-group">
                    <label for="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleDropdownFormPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                        </label>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
            <div class='link'>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">New around here? Sign up</a>
                <a class="dropdown-item" href="#">Forgot password?</a>
            </div>
        </Styles>
    </div>
)