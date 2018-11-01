import React, { Component } from 'react';
import {connect} from 'react-redux';

const icon = {fontSize:30};

class Aside extends Component {
	constructor(props){
		super(props)
		this.state = {
			resume : ["https://drive.google.com/open?id=12LmvGyYQA_k6gSlNWHn_vTa1jnqXeZCE","https://drive.google.com/open?id=1dRuMVwReZ2MT2WuCVCbJ7LAjzx_L34gU","https://drive.google.com/open?id=1dRuMVwReZ2MT2WuCVCbJ7LAjzx_L34gU"]
		}
	}
	  
  	render() {
	return (
		<div className=" col col-sm-1 my-md-5 pt-5">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eder-ribeiro-263642141/"><span className="fa fa-linkedin text-white pt-5 pb-3" style={icon}/> </a>
		<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/eder.ribeiro.180"><span className="fa fa-facebook text-white py-3" style={icon}/> </a>
		<a target="_blank" rel="noopener noreferrer" href="mailto:eder.ribeiro@usp.com?Subject=Contact%20Me"><span className="fa fa-envelope text-white py-3" style={icon}/> </a>
		<a target="_blank" rel="noopener noreferrer" href="https://github.com/ederrr/"><span className="fa fa-github text-white py-3" style={icon}/> </a>
		<a target="_blank" rel="noopener noreferrer" href={this.state.resume[this.props.script]}><span className="fa fa-file-text text-white py-3 " style={icon}/> </a>
		</div>
		)
	}
}

const mapStateToProps = state => ({
	script: state.script
	
});

export default connect(mapStateToProps)(Aside);