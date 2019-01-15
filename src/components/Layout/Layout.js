import React, { Component } from 'react';

import Nav from '../Nav';
import Body from '../Body';

export default class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Body />
                <footer className="page-footer blue-grey lighten-1">
                    <div className="footer-copyright blue-grey">
                        <div className="row">
                            &copy; 2018 Scout Talent
                    </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}