import React, { Component } from 'react';
import Header from './Header.jsx'
import Form from './Form.jsx'
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    return (

      <div className="App">
      <Header logo={this.props.logo} title={this.props.title} slogan={this.props.slogan} />
      <Form />
      <Footer />
      </div>
    );
  }
}

export default App;
