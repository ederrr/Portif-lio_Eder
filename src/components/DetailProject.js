import React, { Component } from 'react';
import {fetchReposName, testImage} from '../services/access.api';
import Moment from 'react-moment';

class DetailProject extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: this.props.match.params.name,
			image: `https://raw.githubusercontent.com/ederrr/${this.props.match.params.name}/master/image_default.jpg`,
			description: '',
			language: '',
			created: '',
			updated: '',
		}
	}	

	componentWillMount(props){
		testImage(this.props.match.params.name).catch(
			(res) => { 
				this.setState({image: require(`../assets/image_default.jpg`)})			
			}
		);
		fetchReposName(this.props.match.params.name).then(
			(res) => { 
				this.setState({
					description: res.data.description,
					language: res.data.language,
					created: res.data.created_at,
					updated: res.data.updated_at,
				})			
			}
		);
	}

	render() {
		return (
			<div className="row px-0 mx-0">
				<div className="col col-5">
					<img className= "img-fluid w-100 rounded" src={this.state.image} alt="project"></img>
				</div>
				<div className="col col-7">
					<p className="h3 py-3 text-center" >{this.state.name}</p>
					<p className="h5 text-center" ><label></label>{this.state.description}</p>
					<p className="h6 text-center" ><label className="h5 ">Language:</label>  {this.state.language}</p>
					<p className="h6 text-center" >Created: <Moment format="MM/DD/YYYY" className="small text-center" >{this.state.created}</Moment></p>
					<p className="h6 text-center" >Updated: <Moment format="MM/DD/YYYY" className="small text-center" >{this.state.updated}</Moment></p>
				</div>
			</div>
		)
	}
}

export default DetailProject;