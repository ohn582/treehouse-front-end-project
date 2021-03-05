import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    width: 1440px;
    position: absolute;
    z-index: -2;
    top: 900;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .titleMain {
    text-align: center;
    margin-top: 50px;
    font-family: Arial;
    font-size: 500%;
  }

  .caption{
  text-align: center;
  margin-top: 50px;
  font-family: Helvetica;
}
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 class="titleMain">Content Transformer</h1>
        <h2 class="caption">The next generation, AI-powered content transformation and workflow automation platform</h2>
      </Container>
    </Jumbo>
  </Styles>
)
