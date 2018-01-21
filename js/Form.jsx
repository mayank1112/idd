import React from 'react'; 
import {Link} from 'react-router-dom'

class Form extends React.Component {
 

   render() {
      return (
      	<div> 

      	      	<div className="wrapper">
	      	<div className="container"> <span className="page-title">SSO Login</span>
 	      		 
		      	 <div className="row"><input placeholder="Username" /></div>
		      	 <div className="row"><input type="password" placeholder="Password" /></div>
		      	 <div className="row buttons"><Link to={"/home"}>Login</Link></div>
 	      	 </div>
	      	 </div>
      	</div>
      );
   }
}

export default Form;
