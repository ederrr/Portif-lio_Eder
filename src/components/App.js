import React, { Component } from 'react';
import Navibar from './Navibar';
import Aside from './Aside';
import Content from './Content';
import { BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './Store';

class App extends Component {

	render() {

		return (
			<Provider store={store}>
			<Router>
				<div className="row p-0 m-0" style={{backgroundColor: '#DDD', height: '100vh'}}>
					<div className="col col-2 col-md-1 d-flex flex-column flex-fill bg-dark">
						<Aside />
					</div>
					<div className="col col-10 col-md-11 p-0">
						<Navibar/>
						<Content />
					</div>
				</div>
			</Router>
			</Provider>
		);
  }
}
export default App;
