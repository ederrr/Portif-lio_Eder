import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {testImage} from '../services/access.api';

class ItemProject extends Component {

	constructor(props){
		super(props)
		this.state = {
			image: `https://raw.githubusercontent.com/ederrr/${this.props.name}/master/image_default.jpg`,
		}
	}	

	componentWillMount(props){
		testImage(this.props.name).catch(
			(res) => { 
				this.setState({image: require(`../assets/image_default.jpg`)})			
			}
		);
	}

	render() {
		const isMobile = window.innerWidth <= 500;
		if(isMobile){
			return (
				<Link to={`/DetailProject/${this.props.name}`} className="w-50 d-inline-block px-1 align-top">
					<img className= "img-fluid w-100 rounded" src={this.state.image} alt="project"></img>
					<p className="m-0 p-0 text-secondary font-weight-bold">{this.props.name}</p>
				</Link>
				)			
		}else{
			return (
			<Link to={`/DetailProject/${this.props.name}`} className="col col-2 d-inline-block mx-auto mb-3 align-top">
				<img className= "img-fluid w-100 rounded" src={this.state.image} alt="project"></img>
				<p className="m-0 p-0 text-secondary font-weight-bold">{this.props.name}</p>
			</Link>
			)
		}
	}
}

export default ItemProject;