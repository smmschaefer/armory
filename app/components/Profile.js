import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import ProfileContainer from '../containers/ProfileContainer';


class Profile extends Component {
	
	render() {
		return (
			<div>
				<ProfileContainer name={this.props.name} view={this.props.view}/>
			</div>
		)
	}
}

Profile.PropTypes = {
	name: PropTypes.string,
	view: PropTypes.string
}

Profile.defaultProps = {
	name: '',
	view: 'false'
}

export default Profile;