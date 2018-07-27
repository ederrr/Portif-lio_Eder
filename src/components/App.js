import React, { Component } from 'react';
import Navibar from './Navibar';
import Aside from './Aside';
import Content from './Content';
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
	constructor() {
		super();
		this.state = {
		  height: window.innerWidth,
		};
	  }
	  
	  componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	  }
	  
	  componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	  }
	handleWindowSizeChange = () => {
		this.setState({ height: window.innerWidth });
	  };

	render() {
	const isMobile = this.state.height <= 800;
	if(isMobile){
	return (
	<Router>
	<div style={{width:'100%', height:'100vh', backgroundColor: '#EEE'}}>
		<div className="d-inline-block bg-dark align-top" style={{width:'15%', height:'100%'}}>
			<Aside />
		</div>
		<div className="d-inline-block" style={{width:'85%'}}>
		<Navibar/>
		<Content />
		</div>
	</div>
	</Router>
	);
	}else{
		return (
			<Router>
			<div style={{width:'100%', height:'100vh', backgroundColor: '#EEE'}}>
				<div className="d-inline-block bg-dark align-top" style={{width:'4%', height:'100%'}}>
					<Aside />
				</div>
				<div className="d-inline-block" style={{width:'96%'}}>
				<Navibar/>
				<Content />
				</div>
			</div>
			</Router>
			);
	}
  }
}
export default App;
