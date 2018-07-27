import React, { Component } from 'react';
import {skillsProgrammer, skillsDesign, skillsWeb, skillsModeling} from '../resources/getSkills';

class Skills extends Component {
	
	render() {
		return (
		<div className="col col-12">
			<p className="h6 my-2">PROGRAMAÇÃO</p>
			<div className="div d-inline-block w-25">
			{skillsProgrammer.map( (s) => { return (
				<p className="h7 col my-1 small">{s.name}<div className="progress border bg-white"><div className="progress-bar " style={{width:`${s.grade*10}%`}}></div></div></p>
			)})}
			</div>
			<div className="d-inline-block align-top w-75 text-center">
			<p className=" h1 ">bla bla bla</p>
			</div>

			
			<p className="h6 my-2">WEB</p>
			<div className="div d-inline-block w-25">
			{skillsWeb.map( (s) => { return (
				<p className="h7 col my-1 small">{s.name}<div className="progress border bg-white"><div className="progress-bar " style={{width:`${s.grade*10}%`}}></div></div></p>
			)})}
			</div>
			<div className="d-inline-block align-top w-75 text-center">
			<p className=" h1 ">bla bla bla</p>
			</div>

			<p className="h6 my-2">DESIGN</p>
			<div className="div d-inline-block w-25">
			{skillsDesign.map( (s) => { return (
				<p className="h7 col my-1 small">{s.name}<div className="progress border bg-white"><div className="progress-bar " style={{width:`${s.grade*10}%`}}></div></div></p>
			)})}
			</div>
			<div className="d-inline-block align-top w-75 text-center">
			<p className=" h1 ">bla bla bla</p>
			</div>

			<p className="h6 my-2">MODELAGEM</p>
			<div className="div d-inline-block w-25">
				{skillsModeling.map( (s) => { return (
				<p className="h7 col my-1 small">{s.name}<div className="progress border bg-white"><div className="progress-bar " style={{width:`${s.grade*10}%`}}></div></div></p>
				)})}
			</div>
			<div className="d-inline-block align-top w-75 text-center">
				<p className=" h1 ">bla bla bla</p>
			</div>
		</div>
		)
	}
}

export default Skills;