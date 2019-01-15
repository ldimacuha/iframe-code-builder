import React, { Component } from 'react';

export default class InsertGoogleFont extends Component {
    render() {
        let fontLink = 'https://fonts.googleapis.com/css?family=' + this.props.font;
        return (
            <React.Fragment>
                <link href={fontLink} rel="stylesheet" />
            </React.Fragment>
        );
    }
}