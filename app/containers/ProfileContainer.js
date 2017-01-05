import React, { Component, PropTypes } from 'react';
import sass from '../scss/application.scss';


const tstProfileData = [
	{
		image: '/public/../../../img/avatarMale02.png',
		name: 'Sam', 
		email: 'smmschaefer@gmail.com',
		flavor: 'A very nice person',
		str: '50',
		agi: '55',
		int: '85',
		sta: '80'
	},
	
	{
		image: '/public/../../../img/avatarFemale01.png',
		name: 'Ash', 
		email: 'ash@gmail.com',
		flavor: 'Best person in world',
		str: '45',
		agi: '80',
		int: '85',
		sta: '75'
	},
	
	{
		image: '/public/../../../img/avatarMale01.png',
		name: 'John', 
		email: 'john@gmail.com',
		flavor: 'Hello all',
		str: '70',
		agi: '75',
		int: '85',
		sta: '80'
	},
	
	{
		image: '/public/../../../img/avatarMale03.png',
		name: 'David', 
		email: 'john@gmail.com',
		flavor: 'My name is what?',
		str: '70',
		agi: '75',
		int: '85',
		sta: '80'
	}
]

class ProfileContainerRender extends Component {
	render() {
		
		const renderData = this.props.data.map( (obj, idx) => {
   		 	return (
				<div key={idx} className="cols2">
					<div>
						<img src={`${obj.image}`} className="avatar"></img>< br/>
					</div>
					<div style={spaceStyle}>
						<p>
	                        <span className="profileText" alt="Profile Name">Name:</span> {obj.name} < br/>
	                        <span className="profileText" alt="Profile Email">Email:</span> {obj.email} <br />
	                        <span className="profileText" alt="Profile Flavor">Flavor:</span> {obj.flavor} <br />
	                        <span className="profileText" alt="Profile STR">STR:</span> {obj.str} <br />
	                        <span className="profileText" alt="Profile AGI">AGI:</span> {obj.agi} <br />
	                        <span className="profileText" alt="Profile INT">INT:</span> {obj.int} <br />
	                        <span className="profileText" alt="Profile STA">STA:</span> {obj.sta} <br />
						</p>
					</div>
				</div>
			)
		});
		
		let spaceStyle = {
			padding: '2em 0px 0px 0px'
		};
		
		const renderUser = this.props.data.filter(obj => {
     	   return this.props.name === obj.name;
  	  			}).map((obj, idx) => {
				return (
					<div key={idx} className="cols2">
						<div>
							<img src={`${obj.image}`} className="avatar"></img>< br/>
						</div>
						<div style={spaceStyle}>
							<p>
		                        <span className="profileText" alt="Profile Name">Name:</span> {obj.name} < br/>
		                        <span className="profileText" alt="Profile Email">Email:</span> {obj.email} <br />
		                        <span className="profileText" alt="Profile Flavor">Flavor:</span> {obj.flavor} <br />
		                        <span className="profileText" alt="Profile STR">STR:</span> {obj.str} <br />
		                        <span className="profileText" alt="Profile AGI">AGI:</span> {obj.agi} <br />
		                        <span className="profileText" alt="Profile INT">INT:</span> {obj.int} <br />
		                        <span className="profileText" alt="Profile STA">STA:</span> {obj.sta} <br />
							</p>
						</div>
					</div>
      		);
  	 	 });
		 
		 let allOrNo = this.props.view;
		 let renderMe;
		 
		 if(allOrNo === 'true') {
			 renderMe = renderData;
		 } else {
			 renderMe = renderUser;
		 }
				
		return (
			<div>
				{renderMe}
			</div>
		)
	}
}

class ProfileContainer extends Component {
	
	render() {
		return (
			<div>
				<ProfileContainerRender data={this.props.data} name={this.props.name} view={this.props.view} />
			</div>
		)
	}
}

ProfileContainer.PropTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	),
	name: PropTypes.string,
	view: PropTypes.string
}

ProfileContainer.defaultProps = {
	data: tstProfileData,
	name: '',
	view: ''
}


export default ProfileContainer;