import React, { Component } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import Home from '../Home';
import { About } from '../About';
import { Contact } from '../Contact';
import Tictactoe from '../components/games/Tictactoe';

import { NoMatch } from '../NoMatch';

class Routes extends Component {

    constructor() {
        super();
        this.handleRoute = this.handleRoute.bind(this);
    }

    handleRoute(nextRoute) {
        this.props.onRoutingChange(nextRoute);
    }

    render() {
        return (
            <React.Fragment>
                <div className="contentWrapper">
                    <main className="mb-5">
                        <Switch>
                            <Route exact path="/"><Home routing={this.props.routing} onRoutingChange={this.handleRoute} /></Route>
                            <Route path="/about"><About /></Route>
                            <Route path="/contact"><Contact /></Route>
                            <Route path="/games/tictactoe"><Tictactoe /></Route>
                            <Route><NoMatch /></Route>
                        </Switch>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default Routes;