import React, { Component } from 'react';
import { Route ,Switch } from "react-router-dom";
import ListProject from './ListProject';
import Galery from './Galery';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

class Content extends Component {
	render() {
		return (
		<div className="pt-2 pt-md-4 px-1 px-md-5" style={{overflowY: 'auto', height:`${this.props.sizeScreen}` }} >
			<Switch>
			<Route exact path="/" component={ListProject} />
			<Route path="/Galery" render={(props) => <Galery {...props} isMobile={this.props.isMobile} />} />
			<Route path="/Contact" render={props => <Contact {...props} isMobile={this.props.isMobile} />} />
			<Route path="/Education" render={props => <Education {...props} isMobile={this.props.isMobile} />} />
			<Route path="/Skills" render={props => <Skills {...props} isMobile={this.props.isMobile} />} />
			<Route component={ListProject} />
			</Switch>
		</div>
		)
	}
}

export default Content;