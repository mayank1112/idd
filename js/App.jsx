import React from 'react';
import Main from './Main.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
   render() {
      return (
      	<div> 
	      	<Header title={this.props.title} logo={this.props.logo} slogan={this.props.slogan} user={this.props.user} />
	      	<Main reports={this.props.reports}/>
	      	<Footer /> 
      	</div>
      );
   }
}

export default App;
