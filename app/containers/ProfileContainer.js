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
	},
	
	{
		name: 'John', 
		email: 'john@gmail.com',
		flavor: 'Hello all',
		str: '70',
		agi: '75',
		int: '85',
		sta: '80'
	}
]

class ProfileContainerRender extends Component {
	render() {
		
		const renderData = this.props.data.map( (obj, index) => {
   		 	return (<p key={index}>
						Name: {obj.name} < br/>
						Email: {obj.email} <br />
						Flavor: {obj.flavor} <br />
						STR: {obj.str} <br />
						AGI: {obj.agi} <br />
						INT: {obj.int} <br />
						STA: {obj.sta} <br />
						</p>
			)
		});
		
		const renderUser = this.props.data.map( (obj, idx) => {
		            return ( 
							this.props.name === obj.name ? 
		                        <p key={idx}>
		                                Name: {obj.name} < br/>
		                                Email: {obj.email} <br />
		                                Flavor: {obj.flavor} <br />
		                                STR: {obj.str} <br />
		                                AGI: {obj.agi} <br />
		                                INT: {obj.int} <br />
		                                STA: {obj.sta} <br />
		                            </p>
			                     :
								<p key={idx}> </p>                   
		            )
		        });
				
		const rUser = this.props.data.filter(obj => {
     	   return this.props.name === obj.name;
  	  			}).map((obj, idx) => {
    					return (
    			<p key={idx}>
                        Name: {obj.name} < br/>
                        Email: {obj.email} <br />
                        Flavor: {obj.flavor} <br />
                        STR: {obj.str} <br />
                        AGI: {obj.agi} <br />
                        INT: {obj.int} <br />
                        STA: {obj.sta} <br />
            </p>
        );
    });
				
		const renOneUser = this.props.data.map(( obj, idx ) => {
			let userData;
					this.props.name === obj.name ? 
                     userData =  <p key={idx}>
                                Name: {obj.name} < br/>
                                Email: {obj.email} <br />
                                Flavor: {obj.flavor} <br />
                                STR: {obj.str} <br />
                                AGI: {obj.agi} <br />
                                INT: {obj.int} <br />
                                STA: {obj.sta} <br />
                            </p>
	                     :
						<p key={idx}> </p>       
			return (
				<div>
					{userData}
				</div>
			)        
		});
				
		return (
			<div>
				{rUser}
			</div>
		)
	}
}

class ProfileContainer extends Component {
	
	render() {
		return (
			<div>
				<ProfileContainerRender data={this.props.data} name={this.props.name} />
			</div>
		)
	}
}

ProfileContainer.PropTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	),
	name: PropTypes.string
}

ProfileContainer.defaultProps = {
	data: tstProfileData,
	name: ''
}


export default ProfileContainer;