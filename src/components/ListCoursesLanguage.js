import React, { Component } from 'react';
import {connect} from 'react-redux';
import {coursesLanguageScript as script} from '../resources/getScript'

class ListCoursesLanguage extends Component {
	render() {
		return (
		<div className={`col col-md-10 offset-md-1 col-12 offset-0`}>
            <div className="rounded-top p-1" style={{backgroundColor: '#07454F'}}>
                <p className="h6 text-white" >{script[this.props.script][0]}</p>
            </div>
            { this.props.courses[this.props.script].map((course) => { return (
                
                <div key={course.name} className="div border rounded my-3 bg-secondary text-center text-light h6">
                    <div><span className="font-weight-bold h6" style={{color: '#07454F'}}>{course.language}</span> - <span>{course.level}</span></div>
                    <div><span>{course.school}</span> - <span>{course.city}</span></div>
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