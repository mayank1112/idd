import React from 'react';
import Form from './Form.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Login extends React.Component {
   render() {
      return (
      	<div> 
	      	<Header title={this.props.title} logo={this.props.logo} slogan={this.props.slogan} user={this.props.user} />
	      	<Form />
	      	<Footer /> 
      	</div>
      );
   }
}

export default Login;
