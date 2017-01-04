import React, { Component } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import Profile from './Profile';

class Main extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<TopNav />
				</div>
				<div className="row">
					This is the new main component
					<Profile />
				</div>
			
				<div className="row">
					<Footer />
				</div>
			</div>
		)
	}
}


export default Main;