import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layout/Header';
import Routes from './routing/Routes';
import Footer from './layout/Footer';

import './styles/app.scss';

class App extends Component {

	constructor() {
        super();
        this.handleRoute = this.handleRoute.bind(this);
        this.state = {
          route: ""
        };
    }

    handleRoute(nextRoute) {
        this.setState({route: nextRoute});
	}
	  
	render() {

		const route = this.state.route;

		return (
			<React.Fragment>
				<Router>
					<div id="page-container" className={"pageContainer " + this.state.route}>
						<Header />
							<Routes routing={this.state.route} onRoutingChange={this.handleRoute} />
						<Footer />
					</div>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;