import React, { Component } from 'react';

import ColorPicker from './ColorPicker';

export default class Colour extends Component {
    constructor(props) {
        super(props);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onInputChange(e);
        // Switch color to Transparent
        const switchName = e.target.name; // get name of switch
        let colorName = switchName.slice(7); // remove prefix "display"
        colorName = 'color' + colorName; // add prefix "color"

        const currentSwitch = this.props.states[switchName];
        if (currentSwitch) {
            const event = {
                target: {
                    name: colorName,
                    value: 'transparent'
                }
            }
            this.props.onInputChange(event);
        }
    }

    handleColorChange(color, name) {
        this.props.onColorChange(color, name);
    }

    handleBadge(color) {
        let badge = {
            backgroundColor: color,
            marginRight: '10px',
            border: '1px solid #efefef'
        }
        return badge;
    }

    handleColorPanel(label, badgeStyle, color, colorPickerName, colorType, switchName, colorStatus) {
        let panel = [];
        let colorSwitch = colorType === 'switch' ? this.handleColorSwitch(switchName, colorStatus) : '';
        let colorPicker = <ColorPicker name={colorPickerName} width="100%" color={color} onColorChange={this.handleColorChange} />;

        panel.push(<li key="0">
            <div className="collapsible-header">{label} <span className="badge" style={badgeStyle}></span>  {color}</div>
            <div className="collapsible-body">
                <span>
                    {colorSwitch}
                    {colorStatus ? colorPicker : ''}
                </span>
            </div>
        </li>);
        return panel;
    }

    handleColorSwitch(name, bool) {
        let colorSwitch = [];
        colorSwitch.push(<div className="input-field" key="0">
            <div className="switch center">
                <label>
                    Transparent
                        <input type="checkbox" name={name} checked={bool} onChange={this.handleInputChange} />
                    <span className="lever"></span>
                    Colour
                    </label>
            </div>
        </div>
        );
        return colorSwitch;
    }

    render() {
        const states = this.props.states;

        
        // Text Color Picker
        const colorGroupLabelBadgeStyle = this.handleBadge(states.colorTextJobGroupLabel);
        const colorGroupLabelPicker = states.displayJobGroup ? this.handleColorPanel('Job Group Label', colorGroupLabelBadgeStyle, states.colorTextJobGroupLabel, 'colorTextJobGroupLabel', 'no switch', '', true) : '';

        const colorJobTitleBadgeStyle = this.handleBadge(states.colorTextJobTitle);
        const colorJobTitlePicker = this.handleColorPanel('Job Title', colorJobTitleBadgeStyle, states.colorTextJobTitle, 'colorTextJobTitle', 'no switch', '', true);

        const colorJobTitleHoverBadgeStyle = this.handleBadge(states.colorTextJobTitleHover);
        const colorJobTitleHoverPicker = this.handleColorPanel('Job Title: Hover', colorJobTitleHoverBadgeStyle, states.colorTextJobTitleHover, 'colorTextJobTitleHover', 'no switch', '', true);

        const colorEmploymentStatusBadgeStyle = this.handleBadge(states.colorTextEmploymentStatus);
        const colorEmploymentStatusPicker = states.displayEmploymentStatus ? this.handleColorPanel('Employment Status', colorEmploymentStatusBadgeStyle, states.colorTextEmploymentStatus, 'colorTextEmploymentStatus', 'no switch', '', true) : '';

        const colorExpiryDateBadgeStyle = this.handleBadge(states.colorTextExpiryDate);
        const colorExpiryDatePicker = states.displayExpiryDate ? this.handleColorPanel('Expiry Date', colorExpiryDateBadgeStyle, states.colorTextExpiryDate, 'colorTextExpiryDate', 'no switch', true) : '';

        const colorLocationBadgeStyle = this.handleBadge(states.colorTextLocation);
        const colorLocationPicker = states.displayLocation ? this.handleColorPanel('Location', colorLocationBadgeStyle, states.colorTextLocation, 'colorTextLocation', 'no switch', '', true) : '';

        const colorReferenceNumberBadgeStyle = this.handleBadge(states.colorTextReferenceNumber);
        const colorReferenceNumberPicker = states.displayReferenceNumber ? this.handleColorPanel('Reference Number', colorReferenceNumberBadgeStyle, states.colorTextReferenceNumber, 'colorTextReferenceNumber', 'no switch', '', true) : '';

        // Background Color Picker
        const colorBackgroundJobListBadgeStyle = this.handleBadge(states.colorBackgroundJobList);
        const colorBackgroundJobListPicker = this.handleColorPanel('Job List', colorBackgroundJobListBadgeStyle, states.colorBackgroundJobList, 'colorBackgroundJobList', 'switch', 'displayBackgroundJobList', states.displayBackgroundJobList);

        const colorBackgroundJobGroupBadgeStyle = this.handleBadge(states.colorBackgroundJobGroup);
        const colorBackgroundJobGroupPicker = states.displayJobGroup ? this.handleColorPanel('Job Group', colorBackgroundJobGroupBadgeStyle, states.colorBackgroundJobGroup, 'colorBackgroundJobGroup', 'switch', 'displayBackgroundJobGroup', states.displayBackgroundJobGroup) : '';

        const colorBackgroundJobBlockBadgeStyle = this.handleBadge(states.colorBackgroundJobBlock);
        const colorBackgroundJobBlockPicker = this.handleColorPanel('Job Block', colorBackgroundJobBlockBadgeStyle, states.colorBackgroundJobBlock, 'colorBackgroundJobBlock', 'switch', 'displayBackgroundJobBlock', states.displayBackgroundJobBlock);
        
        const colorBackgroundJobBlockHoverBadgeStyle = this.handleBadge(states.colorBackgroundJobBlockHover);
        const colorBackgroundJobBlockHoverPicker = this.handleColorPanel('Job Block: Hover', colorBackgroundJobBlockHoverBadgeStyle, states.colorBackgroundJobBlockHover, 'colorBackgroundJobBlockHover', 'no switch', '', true);
        
        const colorBackgroundJobGroupLabelBadgeStyle = this.handleBadge(states.colorBackgroundJobGroupLabel);
        const colorBackgroundJobGroupLabelPicker = states.displayJobGroup ? this.handleColorPanel('Job Group Label', colorBackgroundJobGroupLabelBadgeStyle, states.colorBackgroundJobGroupLabel, 'colorBackgroundJobGroupLabel', 'switch', 'displayBackgroundGroupLabel', states.displayBackgroundGroupLabel) : '';

        const colorBackgroundJobTitleBadgeStyle = this.handleBadge(states.colorBackgroundJobTitle);
        const colorBackgroundJobTitlePicker = this.handleColorPanel('Job Title', colorBackgroundJobTitleBadgeStyle, states.colorBackgroundJobTitle, 'colorBackgroundJobTitle', 'switch', 'displayBackgroundJobTitle', states.displayBackgroundJobTitle);

        const colorBackgroundEmploymentStatusBadgeStyle = this.handleBadge(states.colorBackgroundEmploymentStatus);
        const colorBackgroundEmploymentStatusPicker = states.displayEmploymentStatus ? this.handleColorPanel('Employment Status', colorBackgroundEmploymentStatusBadgeStyle, states.colorBackgroundEmploymentStatus, 'colorBackgroundEmploymentStatus', 'switch', 'displayBackgroundEmploymentStatus', states.displayBackgroundEmploymentStatus) : '';

        const colorBackgroundExpiryDateBadgeStyle = this.handleBadge(states.colorBackgroundExpiryDate);
        const colorBackgroundExpiryDatePicker = states.displayExpiryDate ? this.handleColorPanel('Expiry Date', colorBackgroundExpiryDateBadgeStyle, states.colorBackgroundExpiryDate, 'colorBackgroundExpiryDate', 'switch', 'displayBackgroundExpiryDate', states.displayBackgroundExpiryDate) : '';

        const colorBackgroundLocationBadgeStyle = this.handleBadge(states.colorBackgroundLocation);
        const colorBackgroundLocationPicker = states.displayLocation ? this.handleColorPanel('Location', colorBackgroundLocationBadgeStyle, states.colorBackgroundLocation, 'colorBackgroundLocation', 'switch', 'displayBackgroundLocation', states.displayBackgroundLocation) : '';

        const colorBackgroundReferenceNumberBadgeStyle = this.handleBadge(states.colorBackgroundReferenceNumber);
        const colorBackgroundReferenceNumberPicker = states.displayReferenceNumber ? this.handleColorPanel('Reference Number', colorBackgroundReferenceNumberBadgeStyle, states.colorBackgroundReferenceNumber, 'colorBackgroundReferenceNumber', 'switch', 'displayBackgroundReferenceNumber', states.displayBackgroundReferenceNumber) : '';

        return (
            <div className="card hoverable">
                <div className="card-content">
                    <span className="card-title">Colours</span>
                    <div className="card-panel no-padding">
                        <div className="row no-margin-bottom">
                            <div className="col s12">
                                <ul className="tabs tabs-secondary">
                                    <li className="tab col s6"><a href="#tab-textcolour" className="active">Text</a></li>
                                    <li className="tab col s6"><a href="#tab-backgroundcolour">Background</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col s12">
                            <ul id="tab-textcolour" className="collapsible">
                                {colorGroupLabelPicker}
                                {colorJobTitlePicker}
                                {colorJobTitleHoverPicker}
                                {colorEmploymentStatusPicker}
                                {colorExpiryDatePicker}
                                {colorLocationPicker}
                                {colorReferenceNumberPicker}
                            </ul>
                            <ul id="tab-backgroundcolour" className="collapsible">
                                {colorBackgroundJobListPicker}
                                {colorBackgroundJobGroupPicker}
                                {colorBackgroundJobBlockPicker}
                                {colorBackgroundJobBlockHoverPicker}
                                {colorBackgroundJobGroupLabelPicker}
                                {colorBackgroundJobTitlePicker}
                                {colorBackgroundEmploymentStatusPicker}
                                {colorBackgroundExpiryDatePicker}
                                {colorBackgroundLocationPicker}
                                {colorBackgroundReferenceNumberPicker}
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        );
    }
}