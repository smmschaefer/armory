import React, { Component, PropTypes } from 'react';
import Landing from '../components/Landing';
import sass from '../scss/application.scss';


const imgPath = '/public/../../../img/';

const tstProfileData = [
	{
		image: imgPath + 'avatarMale02.png',
		name: 'Sam', 
		email: 'smmschaefer@gmail.com',
		flavor: 'A very nice person',
		str: '50',
		agi: '55',
		int: '85',
		sta: '80'
	},
	
	{
		image: imgPath + 'avatarFemale01.png',
		name: 'Ash', 
		email: 'ash@gmail.com',
		flavor: 'Best person in world',
		str: '45',
		agi: '80',
		int: '85',
		sta: '75'
	},
	
	{
		image: imgPath + '/avatarMale01.png',
		name: 'John', 
		email: 'john@gmail.com',
		flavor: 'Hello all',
		str: '70',
		agi: '75',
		int: '85',
		sta: '80'
	},
	
	{
 		image: imgPath + 'avatarMale03.png',
		name: 'David', 
		email: 'david@gmail.com',
		flavor: 'My name is what?',
		str: '72',
		agi: '72',
		int: '80',
		sta: '85'
	},
	
	{
		image: imgPath + 'avatarFemale02.png',
		name: 'Annie', 
		email: 'annie@gmail.com',
		flavor: 'HMMMMMMMMM',
		str: '70',
		agi: '90',
		int: '30',
		sta: '90'
	}
]

class ProfileContainerRender extends Component {
	
	 createId(name) {
	 	let rand = 5;
	 	const addIdToName = name.concat(rand);

	 	return `${addIdToName}`;
	 }
	 
	render() {
		
		let spaceStyle = {
			padding: '1em 0px 0px 0px'
		};
		
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
				
		return (
			<div>
				{this.props.view === 'true' ? renderData : renderUser }
				{this.props.name === '' && this.props.view === 'false' && <Landing />}
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
	view: 'false'
}


export default ProfileContainer;