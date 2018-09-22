import React, { Component } from 'react';
import {connect} from 'react-redux';
import {coursesTechnicalScript as script} from '../resources/getScript'

class ListCoursesTechnical extends Component {
	render() {
		return (
		<div>
        <div className="rounded-top p-1" style={{backgroundColor: '#07454F'}}>
            <p className="h6 text-white" >{script[this.props.script][0]}</p>
        </div>
        { this.props.courses[this.props.script].map((course) => { return (
            
            <div className="div border rounded my-3 bg-secondary text-center text-light h6">
            <div><span className="font-weight-bold h6" style={{color: '#07454F'}}>{course.course}</span> - <span>{course.start}</span> {script[this.props.script][1]} <span>{course.finish}.</span></div>
            <div><span>{course.school}</span> - <span>{course.city}</span></div>

            <div className="div border rounded bg-light p-1 text-dark p-3" >{course.description}</div>
            </div>
        )})}
		</div>
        )
	}
}

const mapStateToProps = state => ({
    script: state.script
    
});

export default connect(mapStateToProps)(ListCoursesTechnical);