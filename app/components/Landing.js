import React, { Component } from 'react';
import sass from '../scss/application.scss';

class Landing extends Component {
	render() {
		let testImg = "/public/../../../img/avatarMale02.png";
		
		return (
			<div>
				<img src={`${testImg}`} className="avatarLanding"></img>
				<h3>Welcome to the Armory!</h3>
				<p>Type in a username above to view that Avatars profile</p>
			</div>
		)
	}
}

export default Landing;