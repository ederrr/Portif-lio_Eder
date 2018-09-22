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
		<div className="row justify-content-center border-bottom border-dark m-0" style={{backgroundImage: "url("+require("../assets/background.jpg")+")", backgroundPosition: 'center'}}>
			<link href="https://fonts.googleapis.com/css?family=Knewave" rel="stylesheet"/>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css" rel="stylesheet"/>
			<div className="text-dark p-1 pr-md-5 mt-5" style={{fontFamily:'Knewave'}}>
				<div className="mb-3">
				<span onClick={()=>this.setLanguage('en')} className="d-inline-block m-1 flag-icon flag-icon-us small"></span>
				<span onClick={()=>this.setLanguage('pt-br')} className="d-inline-block flag-icon flag-icon-br m-1 small"></span>
				<span onClick={()=>this.setLanguage('es')} className="d-inline-block flag-icon flag-icon-es m-1 small"></span>
				</div>
				<p><Link className="text-dark" to={"/"}>{navibarScript[this.props.script][0]}</Link></p>
				<p><Link className="text-dark" to={"/Galery"}>{navibarScript[this.props.script][1]}</Link></p>
			</div>
			<div className="border border-white rounded-circle my-auto" style={{width: 130, height:130}}>
			<p className="d-flex justify-content-center mb-0 " style={{fontSize:13,fontFamily:'Impact', color:'#07454F'}}>Eder</p>
			<p className="d-flex justify-content-center mt-0" style={{fontSize:70,fontFamily:'Impact', color:'#07454F'}}>RЯ</p>
			</div>
			<div className="text-dark p-1 pl-md-5 mt-5" style={{fontFamily:'Knewave'}}>
				<p><Link className="text-dark" to={"/Skills"}>{navibarScript[this.props.script][2]}</Link></p>
				<p><Link className="text-dark" to={"/Education"}>{navibarScript[this.props.script][3]}</Link></p>
				<p><Link className="text-dark" to={"/Contact"}>{navibarScript[this.props.script][4]}</Link></p>
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