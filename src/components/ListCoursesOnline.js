import React, { Component } from 'react';
import {connect} from 'react-redux';
import {coursesOnlineScript as script} from '../resources/getScript'

class ListCoursesLanguage extends Component {
	render() {
		return (
		<div className={`col col-${this.props.col} offset-${this.props.pos}`}>
        <div className="rounded-top p-1" style={{backgroundColor: '#07454F'}}>
            <p className="h6 text-white" >{script[this.props.script][0]}</p>
        </div>
        { this.props.courses[this.props.script].map((course) => { return (
            
            <div className="div border rounded my-3 bg-secondary text-center text-light h6">
                <div><span className="font-weight-bold h6" style={{color: '#07454F'}}>{course.course}</span> - <span>{course.school}</span></div>
                <div><span>{script[this.props.script][1]}: {course.time}</span> - <span>{script[this.props.script][2]}: {course.finish}</span></div>

                <div className="div border rounded bg-light p-1 text-dark p-3" ><a href={course.site}>{script[this.props.script][3]}</a>
                <div><a href={course.degree} target="_blank">{script[this.props.script][4]}</a></div>
                </div>

            </div>
        )})}
		</div>
        )
	}
}

const mapStateToProps = state => ({
    script: state.script
    
});

export default connect(mapStateToProps)(ListCoursesLanguage);