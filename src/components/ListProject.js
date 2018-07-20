import React, { Component } from 'react';
import ItemProject from './ItemProject';
import {fetchRepos} from '../services/access.api';
import {findImage} from '../services/access.api';

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
		<div className="justify-content-center py-3 px-5">

			{this.state.repos.map((p,i)=>{if(i<=11) {return (<ItemProject name={p.name}/>)}})}

		</div>
		)
	}
}

export default ListProjeto;