import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ListProject from './ListProject';
import Galery from './Galery';
import Skills from './Skills';
import Education from './Education';

class Content extends Component {
	render() {
		return (
		<div className="pt-2 pt-md-5 px-1 px-md-5" style={{overflowY: 'auto', height:'68vh' }} >
			<Route exact path="/" component={ListProject} />
    		<Route path="/Galery" component={Galery} />
			<Route path="/Skills" component={Skills} />
			<Route path="/Education" component={Education} />
		</div>
		)
	}
}

export default Content;