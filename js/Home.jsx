import React from 'react';
import Main from './Main.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Home extends React.Component {

constructor(props){
	super();

	   	this.state={}
}
componentDidMount() {
	 this.setState({"updated":(new Date()).toString()});
setInterval(()=> {console.log("init loop........" + (new Date()).toString());this.setState({"updated":(new Date()).toString()})}, 5000);
}
   render() {

      return (

      	<div> 
	      	<Header title={this.props.title} 
	      	logo={this.props.logo} 
	      	slogan={this.props.slogan} 
	      	user={this.props.user} />
	      	<Main reports={this.props.reports}
	      	updated={this.state.updated}
	      	/>
	      	<Footer /> 
      	</div>
      );
   }
}

export default Home;
