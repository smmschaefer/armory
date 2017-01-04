import React, { Component } from 'react';
import sass from '../scss/application.scss';
import SearchBar from './SearchBar';



class TopNav extends Component {
	render() {
		return (
			<div id="topBar">
				<p>The Armory <SearchBar /> </p>
			</div>
		)
	}
}


export default TopNav;