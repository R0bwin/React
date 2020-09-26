import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from 'Home.js';
import { About } from 'About.js';
import { Contact } from 'Contact.js';
import { NoMatch } from 'NoMatch.js';

import Header from 'layout/Header';
import Footer from 'layout/Footer';

var pageContainer = {
  position: "relative",
  minHeight: 100+ "vh",
}

var contentWrapper = {
  paddingBottom: 2.5 + "rem",
}

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<div id="page-container" style={pageContainer}>
						<Header />
						<div id="content-wrap" style={contentWrapper}>
							<main className="mb-5">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/about" component={About} />
									<Route path="/contact" component={Contact} />
									<Route component={NoMatch} />
								</Switch>
							</main>
						</div>
						<Footer />
					</div>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;