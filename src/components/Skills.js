import React, { Component } from 'react';
import {skillsScript as titles} from '../resources/getLanguage';
import {skills, icons} from '../resources/getSkills';
import {connect} from 'react-redux';

class Skills extends Component {
	
	render() {
		return (
		<div className="col col-12 ">

		{skills.map( (skill, i) => { return (
			<div>
				<p className="h6 my-3">{titles[this.props.script][i]}</p>
				<div className="div d-inline-block w-25">
					{skill.map( (s) => { return (
						<p className="h7 col my-1 small styleSkill">{s.name}<div className="progress border bg-white"><div className="progress-bar " style={{width:`${s.grade*10}%`}}></div></div></p>
					)})}
				</div>
				<div className="d-inline-block align-top w-75 text-center">
					<span className={`text-black-50 h-100 ${icons[i]}`} style={{fontSize: 100}}></span>
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

export default connect(mapStateToProps)(Skills);