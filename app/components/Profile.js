import React, { Component } from 'react';
import ProfileContainer from '../containers/ProfileContainer';


class Profile extends Component {
	render() {
		return (
			<div className="cols2">
				<div>[IMG]</div>
				<div>
					<ProfileContainer />
				</div>
			</div>
		)
	}
}

export default Profile;