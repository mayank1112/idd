import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component { 


	showLogin() {
		
			if(this.props.user)
					return (
						<div className="greeting">Welcome, {this.props.user} | <Link to={"/"}>Logout</Link>!</div>
			)
					else return (
						<div className="greeting">Welcome, Guest!</div>
			)

	}

   render() {


      return (
      	<header>
      	<h1 title={this.props.title} className="header-container">
	      	<div className="logo"><img src={this.props.logo} /></div>
	      	<div className="slogan">{this.props.slogan}</div>
	      	<div className="clear"></div>

      	</h1>        	
      	{this.showLogin()}

      	</header>
      );
   }
}


export default Header;
