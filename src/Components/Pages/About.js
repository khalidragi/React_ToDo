import React from 'react';
import logo from '../UI/Logo.jpg';

const About = () => {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>This is a Simple Todo List app v1.0.0</p>
      <p>
        Created By Khalid Ragi <br />
        <img src={logo} alt='logo' />
      </p>
    </React.Fragment>
  );
};

export default About;
