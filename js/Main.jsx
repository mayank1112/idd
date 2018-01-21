import React from 'react';
import { Redirect } from 'react-router'

class Main extends React.Component {
  
componentWillMount(){
	console.log("willmount!")
	this.setState({"updated": (new Date()).toString()});
	this.setState({"path": ""});

//	history.push("/home/2");
 }

componentDidMount(){
	console.log("did mount!") 
 }

 componentWillReceiveProps(props) {
 	console.log("will receive props", props);
 }

shouldComponentUpdate(){
 	console.log("should update");
 	return true;
 }

 componentWillUpdate(){
 	console.log("will update");
 }
 

 componentDidUpdate(){
 	console.log("did update");
 }

componentWillUnmount() {
console.log("will unmount")
}


showGraph(report,row) {
	this.setState({"updated": (new Date()).toString()});

	fetch("/json/graph.json")

	.then(r => r.json())
	.then(r => {
		console.log(5,r);
		this.setState({"path":"/graph/"});
	}
	); 		 

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
	      	<div className="container"> <span className="page-title">Application Status (Last 30 days) <span className="good">Last Updated: <b>{this.state.updated}</b></span></span>
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
