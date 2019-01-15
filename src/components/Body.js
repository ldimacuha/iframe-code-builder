import React, { Component } from 'react';

import BasicIframe from './BasicIframe/BasicIframe';
import Preview from './Preview/Preview';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalIframeTitle: '',
            globalFontSource: 'webSafeFont',
            globalFontType: 'Arial',
            globalFontSize: '16',
            globalFontWeight: 'Normal',
            globalLinkColor: '#0000ff',
            globalTextColor: '#000000',

            colorTextJobGroupLabel: '#000000',
            colorTextJobTitle: '#0000ff',
            colorTextJobTitleHover: '#000000',
            colorTextEmploymentStatus: '#000000',
            colorTextExpiryDate: '#000000',
            colorTextLocation: '#000000',
            colorTextReferenceNumber: '#000000',

            colorBackgroundJobList: 'transparent',
            colorBackgroundJobGroup: 'transparent',
            colorBackgroundJobBlock: 'transparent',
            colorBackgroundJobBlockHover: '#fafafa',
            colorBackgroundJobGroupLabel: 'transparent',
            colorBackgroundJobTitle: 'transparent',
            colorBackgroundEmploymentStatus: 'transparent',
            colorBackgroundExpiryDate: 'transparent',
            colorBackgroundLocation: 'transparent',
            colorBackgroundReferenceNumber: 'transparent',

            displayJobGroup: false,
            displayEmploymentStatus: true,
            displayExpiryDate: false,
            displayLocation: true,
            displayReferenceNumber: true,

            displayBackgroundJobList: false,
            displayBackgroundJobBlock: false,
            displayBackgroundJobTitle: false,
            displayBackgroundEmploymentStatus: false,
            displayBackgroundExpiryDate: false,
            displayBackgroundLocation: false,
            displayBackgroundReferenceNumber: false,

            // Paddings

            displayPaddingJobList: false, // All Sides
            paddingJobList: '0',
            marginJobList: '0',

            paddingTopJobList: '0',
            paddingBottomJobList: '0',
            paddingLeftJobList: '0',
            paddingRightJobList: '0',

            marginTopJobList: '0',
            marginBottomJobList: '0',
            marginLeftJobList: '0',
            marginRightJobList: '0',

            displayPaddingJob: false, // All Sides
            paddingJob: '15',
            marginJob: '0',

            paddingTopJob: '15',
            paddingBottomJob: '15',
            paddingLeftJob: '15',
            paddingRightJob: '15',

            marginTopJob: '0',
            marginBottomJob: '0',
            marginLeftJob: '0',
            marginRightJob: '0',

            displayPaddingJobGroup: true, // All Sides
            paddingJobGroup: '0',
            marginJobGroup: '0',

            paddingTopJobGroup: '15',
            paddingBottomJobGroup: '15',
            paddingLeftJobGroup: '15',
            paddingRightJobGroup: '15',

            marginTopJobGroup: '15',
            marginBottomJobGroup: '15',
            marginLeftJobGroup: '15',
            marginRightJobGroup: '15',

            displayPaddingJobTitle: false, // All Sides
            paddingJobTitle: '0',
            marginJobTitle: '0',

            paddingTopJobTitle: '0',
            paddingBottomJobTitle: '0',
            paddingLeftJobTitle: '0',
            paddingRightJobTitle: '0',

            marginTopJobTitle: '0',
            marginBottomJobTitle: '0',
            marginLeftJobTitle: '0',
            marginRightJobTitle: '0',


            displayPaddingJobGroupLabel: true, // All Sides
            paddingJobGroupLabel: '0',
            marginJobGroupLabel: '0',

            paddingTopJobGroupLabel: '0',
            paddingBottomJobGroupLabel: '0',
            paddingLeftJobGroupLabel: '0',
            paddingRightJobGroupLabel: '0',

            marginTopJobGroupLabel: '0',
            marginBottomJobGroupLabel: '0',
            marginLeftJobGroupLabel: '0',
            marginRightJobGroupLabel: '0',


            // Border Job List
            displayBorderJobList: false, // All Sides
            borderJobListColor: '#666666',
            borderJobListStyle: 'Solid',
            borderJobListWidth: '0',
            borderJobListRadius: '0',

            borderBottomJobListColor: '#cccccc',
            borderBottomJobListStyle: 'Solid',
            borderBottomJobListWidth: '0',

            borderLeftJobListColor: '#cccccc',
            borderLeftJobListStyle: 'Solid',
            borderLeftJobListWidth: '0',

            borderRightJobListColor: '#cccccc',
            borderRightJobListStyle: 'Solid',
            borderRightJobListWidth: '0',

            borderTopJobListColor: '#cccccc',
            borderTopJobListStyle: 'Solid',
            borderTopJobListWidth: '0',

            // Border Job Group
            displayBorderJobGroup: false, // All Sides
            borderJobGroupColor: '#444444',
            borderJobGroupStyle: 'Solid',
            borderJobGroupWidth: '1',
            borderJobGroupRadius: '0',

            borderBottomJobGroupColor: '#cccccc',
            borderBottomJobGroupStyle: 'Solid',
            borderBottomJobGroupWidth: '0',

            borderLeftJobGroupColor: '#cccccc',
            borderLeftJobGroupStyle: 'Solid',
            borderLeftJobGroupWidth: '0',

            borderRightJobGroupColor: '#cccccc',
            borderRightJobGroupStyle: 'Solid',
            borderRightJobGroupWidth: '0',

            borderTopJobGroupColor: '#cccccc',
            borderTopJobGroupStyle: 'Solid',
            borderTopJobGroupWidth: '0',

            // Border Job
            displayBorderJob: true, // All Sides
            borderJobColor: '#333333',
            borderJobStyle: 'Solid',
            borderJobWidth: '0',
            borderJobRadius: '0',

            borderBottomJobColor: '#cccccc',
            borderBottomJobStyle: 'Solid',
            borderBottomJobWidth: '1',

            borderLeftJobColor: '#cccccc',
            borderLeftJobStyle: 'Solid',
            borderLeftJobWidth: '0',

            borderRightJobColor: '#cccccc',
            borderRightJobStyle: 'Solid',
            borderRightJobWidth: '0',

            borderTopJobColor: '#cccccc',
            borderTopJobStyle: 'Solid',
            borderTopJobWidth: '0',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    handleColorChange(color, name) {
        this.setState({
            [name]: color
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="row blue-grey lighten-4 no-margin-bottom">
                    <div className="col s12 m6 l5">
                        <BasicIframe onInputChange={this.handleInputChange} onColorChange={this.handleColorChange} states={this.state} />
                    </div>
                    <div className="col s12 m6 l7">
                        <Preview styles={this.state} />
                    </div>
                </div>
                {/* TODO: Floating Action Button */}
                {/* <div className="fixed-action-btn">
                    <a href="#tab-preview" className="btn-floating btn-large red">
                        <i className="large material-icons tooltipped" data-position="left"
                            data-tooltip="Preview">pageview</i>
                    </a>
                    <ul>
                        <li><a href="#tab-code" className="btn-floating red"><i className="material-icons tooltipped" data-position="left"
                            data-tooltip="View Code">code</i></a></li>
                        <li><a href="#tab-snippet" className="btn-floating blue"><i className="material-icons tooltipped" data-position="left"
                            data-tooltip="View Snippet">code</i></a></li>
                    </ul>
                </div> */}
            </React.Fragment>
        );
    }
}
