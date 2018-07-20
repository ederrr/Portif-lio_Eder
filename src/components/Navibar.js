import React, { Component } from 'react';

class Navibar extends Component {

	constructor(props){
		super(props)
		this.state = {
			language:'pt-br',
			script: ['Projetos','Galeria','Habilidades','Formação','Contato']
		}
	}

	setLanguage(language){
		let script_temp = [];
		if(language=='pt-br')
			script_temp = ['Projetos','Galeria','Habilidades','Formação','Contato'];
		else
			script_temp = ['Projects','Galery','Skills','Education','Contact'];

		this.setState({ language: language, script: script_temp});
	}

	render() {
    return (
		<div className="row justify-content-center border-bottom border-dark m-0" style={{backgroundColor: '#ccc'}}>
			<link href="https://fonts.googleapis.com/css?family=Knewave" rel="stylesheet"/>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css" rel="stylesheet"/>
			<div className="text-dark pr-5 mt-5" style={{fontFamily:'Knewave'}}>
				<div className="mb-3">
				<span onClick={()=>this.setLanguage('en-us')} className="d-inline-block m-1 flag-icon flag-icon-us"></span><span onClick={()=>this.setLanguage('pt-br')} className="d-inline-block flag-icon flag-icon-br m-1 fa fa-flag-usa"></span>
				</div>
				<p>{this.state.script[0]}</p>
				<p>{this.state.script[1]}</p>
			</div>
			<div className="border border-white rounded-circle my-auto" style={{width: 130, height:130}}>
			<p className="d-flex justify-content-center mb-0 " style={{fontSize:13,fontFamily:'Impact', color:'#07454F'}}>Eder</p>
			<p className="d-flex justify-content-center mt-0" style={{fontSize:70,fontFamily:'Impact', color:'#07454F'}}>RЯ</p>
			</div>
			<div className="text-dark pl-5 mt-5" style={{fontFamily:'Knewave'}}>
				<p>{this.state.script[2]}</p>
				<p>{this.state.script[3]}</p>
				<p>{this.state.script[4]}</p>
			</div>
		</div>
	)
  }
}

export default Navibar;