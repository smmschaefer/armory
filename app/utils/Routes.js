import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import Main from '../components/Main';
import Profile from '../components/Profile';
import Landing from '../components/Landing';


class Routes extends Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Main}>
				<Route path="/profiles/:search" component={Profile} />
				<Route path="Landing" component={Landing}></Route>
				<IndexRoute component={Landing}></IndexRoute>
			</Route>
			</Router>
		)	
	}
}

export default Routes;