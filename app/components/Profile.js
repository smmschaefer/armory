import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import ProfileContainer from '../containers/ProfileContainer';


class Profile extends Component {
	
	render() {
		return (
			<div className="cols2">
				<div>
					<ProfileContainer name={this.props.name}/>
				</div>
			</div>
		)
	}
}

Profile.PropTypes = {
	name: PropTypes.string
}

Profile.defaultProps = {
	name: ''
}

export default Profile;