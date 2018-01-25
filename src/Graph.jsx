import React from 'react'; 
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {Link} from 'react-router-dom'
import ChartistGraph from 'react-chartist';
require('./css/chartist.css');

class Pie extends React.Component {
	constructor(props) {
		super();
		 console.log(props)

	}



  render() {
    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };
 
    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };
 
    var type = 'Bar'
 
    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}
 
class Graph extends React.Component {
   render() {
      return (
      	<div> 
	      	<Header title={this.props.title} logo={this.props.logo} slogan={this.props.slogan} user={this.props.user} />
	      	


	      	<div className="wrapper">
		      	<div className="container"> <span className="page-title">Application Data </span>
		      		
		      		<div className="row buttons">
		      			<Link to={"/home"}>&laquo; Back</Link>
		      		</div>
		      		<div className="row">
		      			<Pie />
		      		</div>
		      		<div className="row buttons">
		      			<Link to={"/home"}>&laquo; Back</Link>
		      		</div>
		      	</div>
	      	</div>


	      	<Footer /> 
      	</div>
      );
   }
}

export default Graph;
