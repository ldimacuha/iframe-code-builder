import React, { Component } from 'react';

import './Preview.css';

import PreviewWindow from './PreviewWindow';
import Code from '../Code/Code';
import Snippet from '../Code/Snippet';

export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfJobs: 3,
            numberOfGroups: 2
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleDisplay(bool) {
        let style = bool ? 'block' : 'none';
        return style;
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handlePreviewOption(label, value, name, min, max) {
        const previewOption = [];
        previewOption.push(
            <div className="input-field col s12" key="0">
                <p>{label} {value}</p>
                <p className="range-field">
                    <input type="range" name={name} min={min} max={max} value={value} onChange={this.handleInputChange} />
                </p>
            </div>);
        return previewOption;
    }

    render() {
        const styles = this.props.styles;

        const numberOfJobsSlider = this.handlePreviewOption('Number of jobs:', this.state.numberOfJobs, 'numberOfJobs', 1, 10);
        const numberOfGroupsSlider = this.handlePreviewOption('Number of groups:', this.state.numberOfGroups, 'numberOfGroups', 1, 5);


        return (
            <div className="row">
                <ul className="tabs">
                    <li className="tab col s4"><a className="active" href="#tab-preview">Preview</a></li>
                    <li className="tab col s4"><a href="#tab-code">Code</a></li>
                    <li className="tab col s4"><a href="#tab-snippet">Snippet</a></li>
                </ul>
                <div id="tab-preview" className="col s12">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="card-title">Preview</span>
                            <div className="card white" id="preview-window">
                                <div className="preview-header valign-wrapper">

                                    <i className="material-icons">chevron_left</i>
                                    <i className="material-icons">chevron_right</i>

                                    <div className="left white valign-wrapper">
                                        <i className="material-icons">lock</i>
                                        preview
                                    </div>
                                    <div className="right valign-wrapper">
                                        <i className="dropdown-trigger material-icons" data-target="preview_options">settings</i>
                                        <div id="preview_options" className="dropdown-content">
                                            {numberOfJobsSlider}
                                            {styles.displayJobGroup ? numberOfGroupsSlider : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>

                                <PreviewWindow styles={styles} checkDisplay={this.handleDisplay} numberOfJobs={this.state.numberOfJobs} numberOfGroups={this.state.numberOfGroups} />
                                <div className="preview-footer"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-code" className="col s12">
                    <Code styles={styles} checkDisplay={this.handleDisplay} />
                </div>
                <div id="tab-snippet" className="col s12">
                    <Snippet />
                </div>
            </div>
        );
    }
}