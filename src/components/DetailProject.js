import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchReposName, testImage} from '../services/access.api';
import {detailScript as script} from '../resources/getScript'
import Moment from 'react-moment';

class DetailProject extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: this.props.match.params.name,
			image: `https://raw.githubusercontent.com/ederrr/${this.props.match.params.name}/master/image_default.jpg`,
			description: '',
			language: '',
			created: '00/00/0000',
			updated: '00/00/0000',
			col :"",
			pos :""
		}
	}
	componentDidMount(){
		if(this.props.isMobile)
			this.setState({col: "12", pos: "0"});
		else
			this.setState({col: "10", pos: "1"});
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
			<div className={`row col-${this.state.col} offset-${this.state.pos}`}>
        		<div className="rounded-top col col-12 p-1" style={{backgroundColor: '#07454F'}}>
					<p className="h6 text-white" >{this.state.name}</p>
        		</div>
				<div className="col col-md-5 col-12 my-4">
					<img className= "img-fluid w-100 rounded" src={this.state.image} alt="project"></img>
				</div>
				<div className="col col-md-7 col-12 my-4">
					<p className="" ><label></label>{this.state.description}</p>
					<p className="text" ><label className="h6 text-secondary">{script[this.props.script][0]}:</label> {this.state.language}</p>
					<p className="h6 text-secondary" >{script[this.props.script][1]}: <Moment format={script[this.props.script][3]} className="small" >{this.state.created}</Moment></p>
					<p className="h6 text-secondary" >{script[this.props.script][2]}: <Moment format={script[this.props.script][3]} className="small" >{this.state.updated}</Moment></p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    script: state.script
    
});

export default connect(mapStateToProps)(DetailProject);