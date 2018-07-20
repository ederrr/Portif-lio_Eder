import React, { Component } from 'react';

const icon = {fontSize:30};

class Aside extends Component {
  render() {
	return (
		<div className="col my-5 pt-5">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		<a target="_blank" href="https://www.linkedin.com/in/eder-ribeiro-263642141/"><span className="fa fa-linkedin text-white pt-5 pb-3" style={icon}/> </a>
		<a target="_blank" href="https://www.facebook.com/eder.ribeiro.180"><span className="fa fa-facebook text-white py-3" style={icon}/> </a>
		<a target="_blank" href="mailto:eder.ribeiro@usp.com?Subject=Contact%20Me"><span className="fa fa-envelope text-white py-3" style={icon}/> </a>
		<a target="_blank" href="https://github.com/ederrr/"><span className="fa fa-github text-white py-3" style={icon}/> </a>
		<a target="_blank" href=""><span className="fa fa-file-text text-white py-3 " style={icon}/> </a>
		</div>
		)
	}
}

export default Aside;