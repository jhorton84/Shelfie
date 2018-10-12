//Create a simple class component in the Dashboard and Form files. For now just return a div containing the component's name from the render method.

import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    render() {
      return (
        <div className="Dashboard">
          <h1>Dashboard</h1>
          <Product />
        </div>
      );
    }
  }

 