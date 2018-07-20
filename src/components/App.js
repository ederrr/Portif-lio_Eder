import React, { Component } from 'react';
import Navibar from './Navibar';
import Aside from './Aside';
import Content from './Content';

class App extends Component {

	render() {
	return (
	<div style={{width:'100vw', height:'100vh', backgroundColor: '#EEE'}}>
		<div className="d-inline-block bg-dark align-top" style={{width:'4%', height:'100%'}}>
			<Aside />
		</div>
		<div className="d-inline-block" style={{width:'96%'}}>
		<Navibar/>
		<Content />
		</div>
	</div>
	);
  }
}
export default App;
