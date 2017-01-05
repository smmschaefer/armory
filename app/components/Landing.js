import React, { Component } from 'react';
import sass from '../scss/application.scss';

class Landing extends Component {
	render() {
		
		let testImg = "/public/../../../img/avatarMale02.png";
		return (
			<div>
				<img src={`${testImg}`} className="avatar"></img>
				LANDING PAGE
			</div>
		)
	}
}

export default Landing;