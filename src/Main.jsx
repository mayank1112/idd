import React from 'react';
import { Redirect } from 'react-router'

class Main extends React.Component {

constructor(props)
{
	console.log("in constructor")
super();
}
componentWillMount(){
console.log("will mount")
this.state={}
//	history.push("/home/2");
 }

componentDidMount(){
	console.log("did mount!") 
 }

 componentWillReceiveProps(a, b) {
 	console.log("will receive props", a, b);
 }

shouldComponentUpdate(a,b){
 	console.log("should update", a, b);
 	return true;
 }

 componentWillUpdate(a,b){
 	console.log("will update", a, b);
 }
 

 componentDidUpdate(a,b){
 	console.log("did update", a, b);
 }

componentWillUnmount() {
console.log("will unmount")
}


showGraph(report,row) {
	this.setState({"aa":1});
	//return;
 
	//fetch("/json/graph.php")

	//.then(r => r.json())
//	.then(r => {
	//	console.log(5,r);
		this.setState({"path":"/graph/"});
//	}
	//); 		 

}

redirector() { 
	if(this.state.path)
	return (
		<Redirect to={this.state.path} />
		)

}




   render() {
      return (
      	<div className="wrapper">
	      	<div className="container"> <span className="page-title">Application Status (Last 30 days) </span>
	      		{this.props.reports.map(report => 
	      		<div className="row">
	      			<div className="team-title">{report.team}</div>
	      				{report.data.map(row => 
	      				

	      				(row.value > 0)?
  (
	<div>
	      					<span>{row.label}</span>: <span className="holder" onClick={() => this.showGraph(report,row)}>{row.value}</span>
	      				</div>
	): (
	<div>No Downtimes reported!</div>
	)



	      				)}
	      		</div>
	      		)}
	      	</div>
	      	{this.redirector()}
      	</div>
      );
   }
}


export default Main;
