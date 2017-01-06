import React, { Component, PropTypes } from 'react';
import Profile from './Profile';
import Landing from './Landing';
import sass from '../scss/application.scss';
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 


class SearchBar extends Component {
	constructor(props){
		super(props)
			this.state = {
				name: ''
			}
	}	
	
	handleChange(e) {
		this.setState({
			name: e.target.value
		});
	}
	
	handleSubmit(e) {
	    e.preventDefault();
		let viewing = 'false';
		this.props.viewAllProfiles(viewing);
        let profileName = this.state.name;
		profileName = profileName.toLowerCase().trim();
		//Cap the first letter in the name and add the rest of the name 
		profileName = profileName.charAt(0).toUpperCase() + profileName.substr(1);
        this.props.handleProfileChange(profileName);
		//<Profile name="profileName"/>
		//this.context.router.push(`/profiles/${profileName}`);
	}
		
	viewAll(e) {
			e.preventDefault();
			let viewing = 'true';
			this.props.viewAllProfiles(viewing);
	}	

	render() {
		return (
			<div className="row-fluid">
				<div className="navDiv">
					<p>ARMORY</p>
				</div>
				<div className="navDiv">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input type="text" placeholder="Enter Name" 
						name="name" 
						value={this.state.name} 
						onChange={this.handleChange.bind(this)} />
						<button className="enter" type="submit">Search</button>
					</form>		
				</div>
				<div>
					<button className="enter" type="submit" onClick={this.viewAll.bind(this)}>VIEW ALL</button>
				</div>
			</div>
		)
	}
}

SearchBar.propTypes = {
	handleProfileChange: PropTypes.func.isRequired,
	viewAllProfiles: PropTypes.func,
	name: PropTypes.string
}


export default SearchBar;