import React, { Component } from 'react';
import ItemProject from './ItemProject';
import {fetchRepos} from '../services/access.api';

class ListProjeto extends Component {
	constructor(props){
		super(props)
		this.state = {
			repos:[],
		}
	}

	componentDidMount(props){
		fetchRepos().then((res) => {this.setState({repos: res.data})});

	}

	render() {
		return (
		<div className="justify-content-center py-3">

			{this.state.repos.map((p)=>{return (<ItemProject name={p.name}/>)})}

		</div>
		)
	}
}

export default ListProjeto;