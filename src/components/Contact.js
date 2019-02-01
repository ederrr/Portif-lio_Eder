import React, { Component } from 'react';
import {contactScript as script} from '../resources/getScript'
import {connect} from 'react-redux';

class Contact extends Component {

	render() {
		return (
			<div className="px-1">
                <p className="text-center font-weight-bold" style={{color: '#07454F'}}>{script[this.props.script][0]}</p>
                <form className={`col col-12 col-md-6 m-auto`} action="https://formspree.io/ederrosate@yahoo.com.br" method="POST">
                    <input className="col col-12 border border-black rounded mx-auto p-3 my-1" type="text" name="name" placeholder={script[this.props.script][1]} />
                    <textarea className="col col-12 border h-100 border-black rounded mx-auto p-3 my-2" type="email" name="replyto" placeholder={script[this.props.script][2]} />
                    <input className="col col-12 h-100 border border-black rounded text-white" type="submit" value={script[this.props.script][3]} style={{backgroundColor: '#07454F'}} />
                </form>
                <div className="text-center font-weight-bold pt-4 pb-3" style={{color: '#07454F'}}>{script[this.props.script][4]}</div>
                <div className="row px-auto mx-auto text-center"><p className={`col col-12`}>{`${script[this.props.script][5]}: +55 (16) 9 9114-0188`}</p><p className={`col col-12`}>{`${script[this.props.script][6]}: ederrosate@gmail.com`}</p></div>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	script: state.script
	
});

export default connect(mapStateToProps)(Contact);