//Create a simple class component in the Dashboard and Form files. For now just return a div containing the component's name from the render method.

import React, { Component } from 'react';


export default class Form extends Component {
    render() {
      return (
        <div className="Form">
          <h1>Form</h1>
        </div>
      );
    }
  }

