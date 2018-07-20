import React, { Component } from 'react';

class ItemProject extends Component {
	render() {
		{console.log(this.props.image)}
		return (
		<div className="col col-2 d-inline-block px-2 ">
			<img className= "img-fluid rounded w-100 rounded border border-dark " src={`https://raw.githubusercontent.com/ederrr/${this.props.name}/master/image_default.jpg`}></img>
			<p className="m-0 p-0 text-dark">{this.props.name}</p>
		</div>
		)
	}
}

export default ItemProject;