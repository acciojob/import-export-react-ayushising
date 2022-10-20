import React, { Component, useState } from "react";
import '../styles/App.css';
import './Heading';
import './SubHeading';
import './InputQuery';
import './SubmitButton';


const App = () => {
  return (
    <div id="main">
      <Heading/>
      <SubHeading/>
      <InputQuery/>
      <SubmitButton/>
    </div>
  )
}

export  Heading;
export  SubHeading;
export  InputQuery;
export SubmitButton;


