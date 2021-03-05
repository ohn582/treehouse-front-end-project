import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Agency from './components/pictures/Agency.png';
import Supplier from './components/pictures/Supplier.png';
import client from './components/pictures/client.png';

const Styles = styled.div`
  .text_overlay1 {
    position: absolute; 
    top: 590px; 
    right: 0; 
    width: 100%; 
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 400%;
  }

  .text_overlay2 {
    position: absolute; 
    top: 690px; 
    right: 0; 
    width: 100%; 
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 200%;
  }

  .text_overlay3 {
    position: absolute; 
    top: 1500px; 
    right: 0; 
    width: 100%; 
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 400%;
  }

  .portrait1 { 
    top: 750px; 
    float: left;
    margin-left: -30px;
    position: relative;
    left: 100px;
    box-shadow: 10px 5px 5px rgb(0, 0, 0);
  }
  .portrait1:hover { 
    background-color: yellow;
  }

  .portrait2 { 
    top: 750px; 
    float: left;
    margin-left: 40px;
    position: relative;
    left: 400px;
    box-shadow: 10px 5px 5px rgb(0, 0, 0);
  }
`;

export const Home = () => (
  <div>
    <Styles>
      <div>
        <Helmet>
          <style>{'body { height:1400px; background: linear-gradient(#3FBDFE 40%, #5EFE69 50%); }'}</style>
        </Helmet>
        <h1 class="text_overlay1">Title Info</h1>
        <h2 class="text_overlay2">Description: Write anything below!!!</h2>
      </div>
      <div class="portrait1">
        <img src={client} class="rounded float-left" alt=" " />
      </div>
      <div class="portrait2">
        <img src={Supplier} class="rounded float-left" alt=" " />
      </div>
      <br />
      <h1 class="text_overlay3">About</h1>   
    </Styles>
    
  </div>
)
