import React, { Component } from 'react';

class ItemProject extends Component {
	render() {
		const isMobile = window.innerWidth <= 500;
		if(isMobile){
			return (
				<div className="w-50 d-inline-block px-1 align-top">
					<img className= "img-fluid w-100 rounded border border-dark " src={`https://raw.githubusercontent.com/ederrr/${this.props.name}/master/image_default.jpg`} alt="project"></img>
					<p className="m-0 p-0 text-dark">{this.props.name}</p>
				</div>
				)			
		}else{
			return (
			<div className="col col-2 d-inline-block px-2 align-top">
				<img className= "img-fluid w-100 rounded border border-dark " src={`https://raw.githubusercontent.com/ederrr/${this.props.name}/master/image_default.jpg`} alt="project"></img>
				<p className="m-0 p-0 text-dark">{this.props.name}</p>
			</div>
			)
		}
	}
}

export default ItemProject;