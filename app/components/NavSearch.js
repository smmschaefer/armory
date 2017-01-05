import React, { Component, PropTypes } from 'react';
import Profile from './Profile';
import SearchBar from './SearchBar';
import sass from '../scss/application.scss';
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 






class NavSearch extends Component {
	render() {
		return (
			<div>
				ARMORY
				<SearchBar handleProfileChange={this.handleProfileChange}/>
			</div>
		)
	}
	
}

NavSearch.propTypes = {
  handleProfileChange: React.PropTypes.func.isRequired,
}

export default NavSearch;