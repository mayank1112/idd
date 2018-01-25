import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx'; 
import Login from './Login.jsx'; 
import Graph from './Graph.jsx'; 
import {BrowserRouter, Route, Switch } from 'react-router-dom';


require('./../css/style.less');

 
let params = {"title": "Infosys DevOps Dashboard",
"slogan": "DevOps Dashboard",
"logo": "/img/print-logo.png",
"user": {
	"name":"Mayank", 
	"id": "111"
	},
"reports": [
	{
		"team": "Banker",
		"data":[
		{
		"label":"Builds" ,
		"value":1,
		"id":2
		},
		{
			"label":"Commits" ,
		"value":2,
		"id":1
		},
		{
			"label":"Issues" ,
		"value":1,
		"id":1
		},
		{
			"label":"Downtimes reported" ,
		"value":1,
		"id":1
		}
		]
	},

	{
		"team": "Client",
		"data":[
		{
		"label":"Builds" ,
		"value":1,
		"id":1
		},
		{
			"label":"Commits" ,
		"value":10,
		"id":1
		},
		{
			"label":"Issues" ,
		"value":1,
		"id":1
		},
		{
			"label":"Downtimes reported" ,
		"value":0,
		"id":1
		}
		]
	}

	]
}

class Root extends React.Component {

	render() {
		return (
				<BrowserRouter> 
				<Switch>

					  
						<Route path="/home" render={(props) => 

							<Home user={params.user} 
							title={params.title}
							logo={params.logo}
							slogan={params.slogan}
reports={params.reports}

						/>} /> 

 <Route path="/graph" render={(props) => 

							<Graph user={params.user} 
							title={params.title}
							logo={params.logo}
							slogan={params.slogan}

						/>} /> 
 


						<Route exact path="/"  render={(props) => 

							<Login user={""} 
							title={params.title}
							logo={params.logo}
							slogan={params.slogan}

						/>} /> 
  


						</Switch>
				</BrowserRouter>
				);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));

 