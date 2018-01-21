import React from 'react'; 
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'

class Form extends React.Component {
 
constructor(props) {
   super();
      
}

componentWillMount() {
      this.setState({"name": "Mayank", "validName":0, "validPass":0, "validForm":0})
}

handleChange (ev) {
   
   this.setState({"validForm":0});

   if(ev.target.value && ev.target.name == "username")
   this.setState({"validName": 1});

   if(ev.target.value && ev.target.name == "password")
      this.setState({"validPass": 1});


   if(!ev.target.value && ev.target.name == "username")
   this.setState({"validName": 0});

   if(!ev.target.value && ev.target.name == "password")
      this.setState({"validPass": 0});

}

handleClick(){
      this.setState({"validForm":1});
}

 
   render() {
      return (
      	<div> 

      	      	<div className="wrapper">
	      	<div className="container"> <span className="page-title">SSO Login</span>
 	      		 
		      	 <div className="row"><input name="username" onChange={this.handleChange.bind(this)} placeholder="Username" /> {(this.state.validName == 1) ? (<span className="good">&#10003;</span>): (<span className="bad">* Required</span>)}</div>
		      	 <div className="row"><input name="password" onChange={this.handleChange.bind(this)} type="password" placeholder="Password" /> {(this.state.validPass == 1) ? (<span className="good">&#10003;</span>): (<span className="bad">* Required</span>)}</div> 
		      	 <div className="row buttons"><a onClick={this.handleClick.bind(this)}>Login</a>
               </div>
 	      	 </div>
	      	 </div>

             <div> 

              {(this.state.validForm == 1 && this.state.validPass ==1 && this.state.validName == 1) ? (
<Redirect to="/home" />
      ):(<div></div>) }
</div>
 
      	</div>
      );
   }
}

export default Form;
