import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ListProject from './ListProject';
import Galery from './Galery';
import Skills from './Skills';
import Education from './Education';

class Content extends Component {
	render() {
		return (
		<div className="pt-2 pt-md-4 px-1 px-md-5" style={{overflowY: 'auto', height:`${this.props.sizeScreen}` }} >
			<Route exact path="/" component={ListProject} isMobile={this.props.isMobile} />
    		<Route path="/Galery" component={Galery} isMobile={this.props.isMobile}/>
			<Route path="/Education" render={props => <Education {...props} isMobile={this.props.isMobile} />} />
			<Route path="/Skills" render={props => <Skills {...props} isMobile={this.props.isMobile} />} />
		</div>
		)
	}
}

export default Content;