import React, { Component } from 'react';
import { Route ,Switch } from "react-router-dom";
import ListProject from './ListProject';
import Galery from './Galery';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import DetailProject from './DetailProject';

class Content extends Component {
	render() {
		return (
		<div className="pt-4 h-75 w-100" style={{overflowY: 'auto'}} >
			<Switch>
				<Route exact path="/" component={ListProject} />
				<Route path="/Galery" render={(props) => <Galery {...props} />} />
				<Route path="/Contact" render={props => <Contact {...props} />} />
				<Route path="/Education" render={props => <Education {...props} />} />
				<Route path="/Skills" render={props => <Skills {...props} />} />
				<Route exact path="/DetailProject/:name" render={props => <DetailProject {...props} />} />
				<Route component={ListProject} />
			</Switch>
		</div>
		)
	}
}
export default Content;