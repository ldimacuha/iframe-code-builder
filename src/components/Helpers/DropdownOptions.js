import React, { Component } from 'react';

export default class DropdownOptions extends Component {
    render() {
        return (
            <option value={this.props.value}>{this.props.title}</option>
        );
    }
}