import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor(){
    super();
    this.state = {
      image_url: '',
      productName: '',
      price: 0,
      inventory: []
    }
  }

handleImageChange( value ) {
  this.setState({image_url:value})

}
handleProductChange( value ) {
  this.setState({productName:value})

}
handlePriceChange( value ) {
  this.setState({price:value})
  console.log(this.state.price);
}

  cancelInputs = () => {
    this.setState({
      image_url : this.state,
      productName: '',
      price: this.state
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard/>
        <Form/>
        <Header/>
      <input onChange = {(e) => this.handleImageChange( e.target.value)} type = "text" placeholder = "Image URL here"></input>
      <input onChange = {(e) => this.handleProductChange( e.target.value)} type = "text" placeholder = "Product Name"></input>
      <input onChange = {(e) => this.handlePriceChange( e.target.value)} type = "text" placeholder = {this.state.price}></input>
      <button onClick = {() => this.cancelInputs()}>Cancel</button>
      <button>Add to Inventory</button>
      </div>
      
    );
  }
}

export default App;
