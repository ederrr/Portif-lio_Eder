import React, { Component } from 'react';
import {skillsScript as titles} from '../resources/getScript';
import {skills, icons} from '../resources/getSkills';
import {connect} from 'react-redux';

class Skills extends Component {
	
	render() {
		return (
		<div className={`col col-md-10 offset-md-1 col-12 offset-0`}>

		{skills.map( (skill, i) => { return (
			<div key={i}>
				<div className="rounded-top p-1" style={{backgroundColor: '#07454F'}}>
					<p className="h6 font-weight-bold text-light">{titles[this.props.script][i]}</p>
        		</div>
				<div className="row vertical-align-middle py-4">
					<div className={`col col-md-7 col-12 d-inline-block w-50`}>
						{skill.map( (s) => { return (
							<div key={s.name} className="h7 col my-1 small styleSkill font-weight-bold text-secondary">{s.name}<div className="progress border bg-white"><div className="progress-bar bg-info" style={{width:`${s.grade*10}%`}}></div></div></div>
						)})}
					</div>
					<div className={`col col-${0} align-top w-50 text-center py-2 my-auto`}>
						<span className={`text-black-50 h-100 ${icons[i]}`} style={{fontSize: 100}}></span>
					</div>
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