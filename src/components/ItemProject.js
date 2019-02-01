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
		
		return (
			<Link to={`/DetailProject/${this.props.name}`} className="col col-md-2 col-6 d-inline-block mx-auto px-md-3 px-1 mb-3 align-top">
				<img className= "img-fluid w-100 rounded" src={this.state.image} alt="project"></img>
				<p className="m-0 p-0 text-secondary font-weight-bold">{this.props.name}</p>
			</Link>
		)

	}
}

export default ItemProject;