import React, { Component } from 'react';
import {coursesTechnical, coursesLanguage, coursesGrade, coursesOnline} from '../resources/getEducation';
import ListCoursesLanguage from './ListCoursesLanguage';
import ListCoursesTechnical from './ListCoursesTechnical';
import ListCoursesGrade from './ListCoursesGrade';
import ListCoursesOnline from './ListCoursesOnline';

class Education extends Component {
	render() {
		return (
		<div>
            <ListCoursesTechnical courses={coursesTechnical} />
            <ListCoursesLanguage courses={coursesLanguage} />
            <ListCoursesGrade courses={coursesGrade} />
            <ListCoursesOnline courses={coursesOnline} />
		</div>
        )
	}
}

export default Education;