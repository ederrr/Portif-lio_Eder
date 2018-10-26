import React, { Component } from 'react';
import Navibar from './Navibar';
import Aside from './Aside';
import Content from './Content';
import { BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './Store';

class App extends Component {
	constructor() {
		super();
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	  }
	  
	  componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	  }
	  
	  componentWillUpdate() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	  }
		handleWindowSizeChange = () => {
			this.setState({ width: window.innerWidth });
			this.setState({ height: window.innerHeight });
	  };

	render() {
	const isMobile = this.state.width <=800 ;
	if(isMobile){
	return (
	<Provider store={store}>
	<Router>
	<div style={{width:'100%', height:'100vh', backgroundColor: '#EEE'}}>
		<div className="d-inline-block bg-dark align-top" style={{width:'15%', height:'100%'}}>
			<Aside />
		</div>
		<div className="d-inline-block" style={{width:'85%'}}>
		<Navibar/>
		<Content sizeScreen={"72vh"} isMobile={true}/>
		</div>
	</div>
	</Router>
	</Provider>
	);
	}else{
		return (
			<Provider store={store}>
			<Router>
			<div style={{width:'100%', height:'100vh', backgroundColor: '#EEE'}}>
				<div className="d-inline-block bg-dark align-top" style={{width:'4%', height:'100%'}}>
					<Aside />
				</div>
				<div className="d-inline-block" style={{width:'96%'}}>
				<Navibar/>
				<Content sizeScreen={"76vh"} isMobile={false}/>
				</div>
			</div>
			</Router>
			</Provider>
			);
	}
  }
}
export default App;
