import React from 'react';
import { Link, location } from 'react-router-dom';
import PropTypes from 'prop-types';

class ActiveLink extends React.Component {
    render() {
        
        var isActive = (this.props.children).toLowerCase() === (this.props.to).replace(/\//g, '').toLowerCase();
        var className = isActive ? 'active' : '';

        return(
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

ActiveLink.contextTypes = {
    router: PropTypes.object
};

export default ActiveLink;