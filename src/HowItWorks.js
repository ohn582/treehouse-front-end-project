import React from 'react'
import styled from 'styled-components';
import logo1 from './components/pictures/download.png';

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
    height: 45rem;
    margin: 0.5rem;
    background-color: #eee;
    display: inline-block;
    top: 720px;
  }
  .block-example2 {
    position: absolute; 
    width: 22rem;
    height: 45rem;
    margin: 0.5rem;
    background-color: #eee;
    display: inline-block;
    top: 720px;
    left: 530px;
  }
  .block-example3 {
    position: absolute; 
    width: 22rem;
    height: 45rem;
    margin: 0.5rem;
    background-color: #eee;
    display: inline-block;
    top: 720px;
    left: 1000px;
  }
  .img1 {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 30px;
    left: 15px;
  }
  .img2 {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 30px;
    left: 15px;
  }
  .img3 {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 30px;
    left: 15px;
  }
  .header1 {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 270px;
    left: 80px;
  }
  .header2 {
    position: absolute; 
    width: 20rem;
    height: 13rem;
    top: 260px;
    left: 20px;
  }
  .header3 {
    position: absolute; 
    width: 23rem;
    height: 13rem;
    top: 260px;
    left: 20px;
  }
  .info {
    position: absolute; 
    width: 19rem;
    height: 13rem;
    top: 350px;
    left: 30px;
  }
`;

export const HowItWorks = () => (
  <div>
    <Styles>
      <h2 class='contactTest1'>How It Works</h2>
      <span className="block-example1 border border-dark">
        <img src={logo1} class='img1' />
        <h3 class='header1'>Instant quotes</h3>
        <p class='info'>
          * Receive instant quotes, not in days, not in hours, and not even minutes.
          <br />
          <br />
          * Most quotes are generated instantly.
        </p>
      </span>

      <span className="block-example2 border border-dark">
        <img src={logo1} class='img2' />
        <h3 class='header2'>AI-Powered Engine Finds the Best Translators</h3>
        <p class='info'>
          * Content Transformer helps you find the best translators at the most competitive price—without you having to do the work!
          <br />
          <br />
          * Content Transformer’s AI engine searches and filters thousands of translators based on criteria such as the content and industry of the document.
        </p>
      </span>

      <span className="block-example3 border border-dark">
        <img src={logo1} class='img3' />
        <h3 class='header3'>Get your work done faster, better, and cheaper</h3>
        <p class='info'>
          * Using intelligent algorithms and machine learning, Content Transformer is a smart platform that delivers efficiency no other translation companies can.
          <br />
          <br />
          * Content Transformer lets select the grade of service, the turnaround time, and lets you meet your goals without compromises.
        </p>
      </span>

      <div>
        
      </div>
    </Styles>
  </div>
)
