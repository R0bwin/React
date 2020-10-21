import React, { Component } from 'react';

import FullImage from './components/FullImage';
import './styles/home.scss';

const skills = [];
skills.push("Software developer");
skills.push("Frontend developer");
skills.push("Electrical Engineer");

const name = "Robin Winroth";
const subInfo = "The ability to work with anything IT. From software to hardware.";

class Home extends Component {

	constructor(props) {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(route) {
		this.props.onRoutingChange(route);
	}

	componentDidMount(){
		this.handleChange("home");
	}

	componentWillUnmount(){
		this.handleChange("");
	}

	render() {
		return (
			<React.Fragment>
				<FullImage image={require('./assets/images/home-fullscreen.png')} title={name} skills={skills} subInfo={subInfo} />
			</React.Fragment>
		)
	}
	
}

export default Home;