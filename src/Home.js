import React from 'react';
import Toggle from './Toggle';
import Page from './Page';
import {addition} from './Click';
import Header from './layout/Header'
import Footer from './layout/Footer'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function handleClick (event) {
  addition(1); 
}

var pageContainer = {
  position: "relative",
  minHeight: "100vh",
}

var contentWrapper = {
  paddingBottom: "2.5rem",
}

export const Home = () => (
  <div>
      
      <div id="page-container" style={pageContainer}>
        <Header />
        <div id="content-wrap" style={contentWrapper}>
          <Welcome name="test1" />
          <Welcome name="test2" />
          <Welcome name="test3" />
          <Toggle id="2"/>
          <button onClick={handleClick}>
            Click me
          </button>
          <Page />
        </div>
        <Footer />
      </div>
      
    </div>
)