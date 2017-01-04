import React, { Component, PropTypes } from 'react';


const tstProfileData = [
	{
		name: 'Sam', 
		email: 'smmschaefer@gmail.com',
		flavor: 'A very nice person',
		str: '50',
		agi: '55',
		int: '85',
		sta: '80'
	},
	
	{
		name: 'Ash', 
		email: 'ash@gmail.com',
		flavor: 'Direct person',
		str: '45',
		agi: '80',
		int: '85',
		sta: '75'
	}
]

class ProfileContainerRender extends Component {
	render() {
		const renderData = this.props.data.map( (objInner, index) => {
   		 	return (<p key={index}>
						Name: {objInner.name} < br/>
						Email: {objInner.email} <br />
						Flavor: {objInner.flavor} <br />
						STR: {objInner.str} <br />
						AGI: {objInner.agi} <br />
						INT: {objInner.int} <br />
						STA: {objInner.sta} <br />
						</p>
			)
		});
		return (
			<div>
				{renderData}
			</div>
		)
	}
}

class ProfileContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: tstProfileData
		}
	}
	
	render() {
		return (
			<div>
				<ProfileContainerRender data={this.props.data} />
			</div>
		)
	}
}

ProfileContainer.PropTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

ProfileContainer.defaultProps = {
	data: tstProfileData
}



export default ProfileContainer;