import React from 'react'
import linkedin from './components/pictures/linkedin.png';
import styled from 'styled-components';
// import { Link } from 'react-router;

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
  .block-example1 {
    position: absolute; 
    width: 22rem;
    height: 17rem;
    margin: 0.5rem;
    background-color: #eee;
    display: inline-block;
    top: 720px;
    left: 300px;
  }
  .block-example2 {
    position: absolute; 
    width: 22rem;
    height: 27rem;
    margin: 0.5rem;
    background-color: #eee;
    display: inline-block;
    top: 720px;
    left: 800px;
  }
  .block-example3 {
    position: absolute; 
    width: 22rem;
    height: 5rem;
    margin: 0.5rem;
    background-color: #eee;
    display: inline-block;
    top: 1220px;
    left: 550px;
  }
  .header1 {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 20px;
    left: 20px;
  }
  .location {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 80px;
    left: 20px;
  }
  .phone {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 140px;
    left: 20px;
  }
  .email {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 200px;
    left: 20px;
  }
  .textarea {
    width: 20rem;
    height: 7rem;
    top: 300px;
    left: 0px;
  }
  .pic {
    position: absolute; 
    width: 4rem;
    height: 4rem;
    top: 10px;
    left: 20px;
  }
`;

export const Contact = () => (
  <div>
    <Styles>
      <h2 class='contactTest1'>Contact Us</h2>
      <span className="block-example1 border border-dark">
        <h3 class='header1'>Contact Details:</h3>
        <h4 class='location'>Location: US, Asia, and Europe</h4>
        <h4 class='phone'>Phone: +1 609.379.2764</h4>
        <h4 class='email'>Email: info@contentsonata.com</h4>
      </span>
      <span className="block-example2 border border-dark">
        <form>
          <h4>Your Name:</h4>
          <input type="text" name="name" />
          <h4>Your Email:</h4>
          <input type="text" name="email" />
          <h4>Phone or Subject:</h4>
          <input type="text" name="subject" />
          <h4>Message:</h4>
          <textarea type='text' name='info' class='textarea' />
          <br />
          <button type='submit' value="Create" >Submit</button>
        </form>
      </span>
      <span className="block-example3 border border-dark">
        <img src={linkedin} class="rounded float-left" alt=" " class="pic" />
      </span>
      
    </Styles>
  </div>
)
