import React, { Component } from 'react';
import {galery} from '../resources/getGalery';
import {connect} from 'react-redux';

class Galery extends Component {
	constructor(props){
		super(props)
		this.state = {
			col : "",
			selected: ["active","",""],
			position: 0,
			image: galery[0][0].image
		}
      }
      componentDidMount(){
            if(this.props.isMobile)
                this.setState({col: "12",col2: "12"});
            else
                this.setState({col: "7", col2: "5"});
	}

	changeImage(pos){
		let temp_selected = ["","",""];
		if(pos >= galery[this.props.script].length){
			temp_selected[0] = "active"
			this.setState({position: 0, selected: temp_selected, image:galery[0][0].image})
		}
		else if(pos < 0){
			temp_selected[galery[this.props.script].length-1] = "active"
			this.setState({position: galery[this.props.script].length-1, selected: temp_selected, image: galery[0][galery[this.props.script].length-1].image})
		}
		else{
			temp_selected[pos] = "active"
			this.setState({position: pos, selected: temp_selected, image: galery[0][pos].image})
		}


	}

	render() {
		return (
			<div className="row px-1">
				<div id="carouselExampleIndicators" className={`col py-2 col-${this.state.col}carousel slide`}>
					<ol className="carousel-indicators">
						<li className={`${this.state.selected[0]} border border-black`} onClick={()=>this.changeImage(0)}></li>
						<li className={`${this.state.selected[1]} border border-black`} onClick={()=>this.changeImage(1)}></li>
						<li className={`${this.state.selected[2]} border border-black`} onClick={()=>this.changeImage(2)}></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
						<img className="d-block img-fluid w-100 rounded" src={require(`../assets/${this.state.image}`)} alt="Computer Working"/>
						</div>
					</div>
					<div className="carousel-control-prev" onClick={()=>this.changeImage(this.state.position-1)}>
						<span className="carousel-control-prev-icon white"></span>
					</div>
					<div className="carousel-control-next" onClick={()=>this.changeImage(this.state.position+1)}>
						<span className="carousel-control-next-icon"></span>
					</div>
				</div>
				<div className={`col col-${this.state.col2} my-md-auto`}>
					<p className="text-center font-weight-bold h6" style={{color: '#07454F'}}>{galery[this.props.script][this.state.position].title}</p>
					<p className="text-center">{galery[this.props.script][this.state.position].description}</p>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	script: state.script
	
});

export default connect(mapStateToProps)(Galery);