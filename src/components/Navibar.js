import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { navibarScript } from "../resources/getScript";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as languageActions from './actions/Language';

class Navibar extends Component {

	setLanguage(language){
		let script_temp = 0;
		if(language==='pt-br')
			script_temp = 1;
		else if(language === 'es'){
			script_temp = 2;
		}

		this.props.changeLanguage(language, script_temp);
	}

	render() {
    return (
		<div className="row justify-content-center mx-3 mx-md-5 p-0 border-bottom border-white">
			<link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:700" rel="stylesheet"/>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css" rel="stylesheet"/>
			<div className="text-secondary p-0 pr-md-5 mt-3 " style={{fontFamily:'Yanone Kaffeesatz'}}>
				<div className="mb-3">
				<span onClick={()=>this.setLanguage('en')} className="d-inline-block m-1 flag-icon flag-icon-us small"></span>
				<span onClick={()=>this.setLanguage('pt-br')} className="d-inline-block flag-icon flag-icon-br m-1 small"></span>
				<span onClick={()=>this.setLanguage('es')} className="d-inline-block flag-icon flag-icon-es m-1 small"></span>
				</div>
				<p><Link className="text-secondary h5" to={"/"}>{navibarScript[this.props.script][0]}</Link></p>
				<p><Link className="text-secondary h5" to={"/Galery"}>{navibarScript[this.props.script][1]}</Link></p>
			</div>
			<div className="border border-white border-top-0 rounded-circle my-auto" style={{width: 130, height:130}}>
			<p className="d-flex justify-content-center mb-0 " style={{fontSize:13,fontFamily:'Impact', color:'#07454F'}}>Eder</p>
			<p className="d-flex justify-content-center mt-0" style={{fontSize:70,fontFamily:'Impact', color:'#07454F'}}>RЯ</p>
			</div>
			<div className="text-secondary p-1 pl-md-5 mt-3" style={{fontFamily:'Yanone Kaffeesatz'}}>
				<p><Link className="text-secondary h5" to={"/Skills"}>{navibarScript[this.props.script][2]}</Link></p>
				<p><Link className="text-secondary h5" to={"/Education"}>{navibarScript[this.props.script][3]}</Link></p>
				<p><Link className="text-secondary h5" to={"/Contact"}>{navibarScript[this.props.script][4]}</Link></p>
			</div>
		</div>
	)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(languageActions, dispatch);
const mapStateToProps = state => ({
	language: state.language,
	script: state.script
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Navibar);