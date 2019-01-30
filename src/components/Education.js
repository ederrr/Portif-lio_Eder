import React, { Component } from 'react';
import {coursesTechnical, coursesLanguage, coursesGrade, coursesOnline} from '../resources/getEducation';
import ListCoursesLanguage from './ListCoursesLanguage';
import ListCoursesTechnical from './ListCoursesTechnical';
import ListCoursesGrade from './ListCoursesGrade';
import ListCoursesOnline from './ListCoursesOnline';

class Education extends Component {
	constructor(props){
		super(props)
		this.state = {
			col :"",
			pos :""
		}
	}
	componentDidMount(){
		if(this.props.isMobile)
			this.setState({col: "12", pos: "0"});
		else
			this.setState({col: "10", pos: "1"});

	}
	render() {
		return (
		<div>
		<ListCoursesTechnical courses={coursesTechnical} pos={this.state.pos} col={this.state.col} />
		<ListCoursesLanguage courses={coursesLanguage} pos={this.state.pos} col={this.state.col} />
		<ListCoursesGrade courses={coursesGrade} pos={this.state.pos} col={this.state.col} />
		<ListCoursesOnline courses={coursesOnline} pos={this.state.pos} col={this.state.col} />
		</div>
	  )
	}
}

export default Education;