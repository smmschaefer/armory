import React, { Component } from 'react';
import Routes from '../utils/Routes';
import Footer from './Footer';
import Profile from './Profile';
import SearchBar from './SearchBar';
import Landing from './Landing';


class Main extends Component {
	constructor(props) {
	     super(props);
	     this.state = { 
			 profileName: '',
			 view: 'false'
		 }
	   }

	   handleProfileChange(profileName) {
	     this.setState( { profileName });
		 //replace <Profile /> with  {this.props.children} maybe
		 //<Profile name={this.state.profileName} />
	   }
	   
	   viewAllProfiles(view) {
	   	 this.setState({
			 view
	   	 })
	   }
	
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<SearchBar history={this.props.history} 
					handleProfileChange={this.handleProfileChange.bind(this)} 
					viewAllProfiles={this.viewAllProfiles.bind(this)}/>
				</div>
				<div className="row">
					<Profile name={this.state.profileName} view={this.state.view}/>
				</div>
				<div className="row">
					<Footer />
				</div>
			</div>
		)
	}
}


export default Main;