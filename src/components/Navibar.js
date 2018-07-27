import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { english, portuguese } from "../resources/getLanguage";

class Navibar extends Component {

	constructor(props){
		super(props)
		this.state = {
			language:'pt-br',
			script: english
		}
	}

	setLanguage(language){
		let script_temp = [];
		if(language==='pt-br')
			script_temp = portuguese;
		else
			script_temp = english;

		this.setState({ language: language, script: script_temp});
	}

	render() {
    return (
		<div className="row justify-content-center border-bottom border-dark m-0" style={{backgroundImage: "url("+require("../assets/background.jpg")+")", backgroundPosition: 'center'}}>
			<link href="https://fonts.googleapis.com/css?family=Knewave" rel="stylesheet"/>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css" rel="stylesheet"/>
			<div className="text-dark p-1 pr-md-5 mt-5" style={{fontFamily:'Knewave'}}>
				<div className="mb-3">
				<span onClick={()=>this.setLanguage('en-us')} className="d-inline-block m-1 flag-icon flag-icon-us"></span><span onClick={()=>this.setLanguage('pt-br')} className="d-inline-block flag-icon flag-icon-br m-1"></span>
				</div>
				<p><Link className="text-dark" to={"/"}>{this.state.script[0]}</Link></p>
				<p><Link className="text-dark" to={"/Galery"}>{this.state.script[1]}</Link></p>
			</div>
			<div className="border border-white rounded-circle my-auto" style={{width: 130, height:130}}>
			<p className="d-flex justify-content-center mb-0 " style={{fontSize:13,fontFamily:'Impact', color:'#07454F'}}>Eder</p>
			<p className="d-flex justify-content-center mt-0" style={{fontSize:70,fontFamily:'Impact', color:'#07454F'}}>RЯ</p>
			</div>
			<div className="text-dark p-1 pl-md-5 mt-5" style={{fontFamily:'Knewave'}}>
				<p><Link className="text-dark" to={"/Skills"}>{this.state.script[2]}</Link></p>
				<p><Link className="text-dark" to={"/Education"}>{this.state.script[3]}</Link></p>
				<p><Link className="text-dark" to={"/Contact"}>{this.state.script[4]}</Link></p>
			</div>
		</div>
	)
  }
}

export default Navibar;