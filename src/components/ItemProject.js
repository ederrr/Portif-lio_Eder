import React, { Component } from 'react';
import {testImage} from '../services/access.api';

class ItemProject extends Component {

	constructor(props){
		super(props)
		this.state = {
			image: require('../assets/image_default.jpg'),
		}
	}	

	componentWillMount(props){
		testImage(this.props.name).then(
			(res) => { if(res.status === 200) 
				this.setState({image: `https://raw.githubusercontent.com/ederrr/${this.props.name}/master/image_default.jpg`})			
			});
	}

	render() {
		console.log(this.state.image)
		const isMobile = window.innerWidth <= 500;
		if(isMobile){
			return (
				<div className="w-50 d-inline-block px-1 align-top">
					<img className= "img-fluid w-100 rounded" src={this.state.image} alt="project"></img>
					<p className="m-0 p-0 text-secondary font-weight-bold">{this.props.name}</p>
				</div>
				)			
		}else{
			return (
			<div className="col col-2 d-inline-block mx-auto mb-3 align-top">
				<img className= "img-fluid w-100 rounded" src={this.state.image} alt="project"></img>
				<p className="m-0 p-0 text-secondary font-weight-bold">{this.props.name}</p>
			</div>
			)
		}
	}
}

export default ItemProject;