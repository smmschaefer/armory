import React, { Component } from 'react';
import sass from '../scss/application.scss';


class TopNav extends Component {
	render() {
		return (
			<div id="topBar">
				THE ARMORY
			</div>
		)
	}
}


TopNav.propTypes = {
  handleProfileChange: React.PropTypes.func
}


export default TopNav;