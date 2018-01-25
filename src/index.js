import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import Home from './Home';
import Graph from './Graph';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { createStore } from "redux";
import rootReducer from "/Users/mayankmahajan/r/my-app/src/reducer"

 
let params = {"title": "Infosys DevOps Dashboard",
"slogan": "DevOps Dashboard",
"logo": "/img/logo.png",
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

ReactDOM.render(

<Router>
	<Switch>
		<Route exact path="/" render={(props)=><App 
		logo={params.logo}
		title={params.title}
		slogan={params.slogan}
		user="Guest" />} />
		<Route path="/home" render={(props)=><Home 
		logo={params.logo}
		title={params.title}
		slogan={params.slogan}
		reports={params.reports}
		user="Guest" />} />
		<Route path="/graph" render={(props)=><Graph 
		logo={params.logo}
		title={params.title}
		slogan={params.slogan}
		reports={params.reports}
		user="Guest" />} />
	</Switch>
</Router>

	, 


	document.getElementById('root'));
registerServiceWorker();
