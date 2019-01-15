import React, { Component } from 'react';
import { BlockPicker } from 'react-color';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    handleChangeComplete(color) {
        this.props.onColorChange(color.hex, this.props.name);
    }

    render() {
        return (
            <BlockPicker width={this.props.width} color={this.props.color} onChangeComplete={this.handleChangeComplete} />
        );
    }
}