import React, { Component } from 'react';

import Colours from './Colours';
import ColorPicker from './ColorPicker';


export default class BasicIframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalFontSource: 'webSafeFont',
            globalFontType: 'Arial',
            globalWebSafeFontType: 'Arial',
            globalGoogleFontType: 'Exo'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onInputChange(e);

        if (e.target.id === 'globalwebsafefonttype') {
            this.setState({
                globalWebSafeFontType: e.target.value
            });
        }

        if (e.target.id === 'globalgooglefonttype') {
            this.setState({
                globalGoogleFontType: e.target.value
            });
        }
    }

    handleColorChange(color, name) {
        this.props.onColorChange(color, name);
    }

    handleRadioChange(e) {
        this.handleInputChange(e);

        if (e.target.id === 'globalwebsafefontradio') {
            const event = {
                target: {
                    name: 'globalFontType',
                    value: this.state.globalWebSafeFontType
                }
            }
            this.handleInputChange(event);
        } else {
            const event = {
                target: {
                    name: 'globalFontType',
                    value: this.state.globalGoogleFontType
                }
            }
            this.handleInputChange(event);
        }
    }

    inputText(grid, icon, id, name, label, placeholder) {
        const input = [];
        const gridStyle = 'input-field col ' + grid;
        const iconPrefix = [];

        input.push(<div className={gridStyle} key="0">
            {icon !== '' ? iconPrefix : ''}
            <input id={id} placeholder={placeholder} type="text" name={name} className="validate" onChange={this.handleInputChange} />
            <label htmlFor={id}>{label}</label>
        </div>);
        return input;
    }

    inputSelect(grid, icon, id, name, value, label, list, fontSource) {
        let display;

        if (fontSource !== undefined) {
            let source = fontSource.slice(0, 10);
            source = source.toLowerCase();
            let source_id = id.slice(6, 16)
            display = source !== source_id ? 'hidden' : '';
        }

        let gridStyle = 'input-field col ' + grid + ' ' + display;

        const iconPrefix = [];
        iconPrefix.push(<i className="material-icons prefix" key="0">{icon}</i>);

        let options = [];
        list.forEach((option, i) => {
            options.push(<option value={option} key={i}>{option}</option>);
        });

        const select = [];
        select.push(<div className={gridStyle} key="0">
            {icon !== '' ? iconPrefix : ''}
            <select id={id} name={name} defaultValue={value} onChange={this.handleInputChange}>
                {options}
            </select>
            <label htmlFor={id}>{label}</label>
        </div>);
        return select;
    }

    inputRange(grid, icon, id, name, value, label, min, max, unit) {

        let gridStyle = 'input-field col ' + grid;
        const iconPrefix = [];
        iconPrefix.push(<i className="material-icons prefix" key="0">{icon}</i>);

        const rangeStyle = {
            fontSize: '16px',
            marginLeft: '42px',
            top: '10px'
        }

        const labelStyle = {
            fontSize: '12px',
            marginLeft: '42px',
            top: '-30px'
        }

        const range = [];
        range.push(<div className={gridStyle} key="0">
            <label htmlFor={id} style={labelStyle}>{label}</label>
            <div className="clearfix"></div>
            {icon !== '' ? iconPrefix : ''}
            <p className="range-field" style={rangeStyle}>
                {value + unit}
                <input type="range" name={name} min={min} max={max} defaultValue={value} onChange={this.handleInputChange} />
            </p>
        </div>);
        return range;
    }

    handleVisibility(label, name, check) {
        let inputField = [];
        inputField.push(<div className="input-field col s12" key="0">
            <div className="left">
                <p>{label}</p>
            </div>
            <div className="switch right">
                <label>
                    <input type="checkbox" name={name} checked={check} onChange={this.props.onInputChange} />
                    <span className="lever"></span>
                </label>
            </div>
        </div>);
        return inputField;
    }

    handlePanel(active, icon, label, labelWidth, labelStyle, labelColor, labelRadius, fieldWidth, fieldRadius, fieldStyle, colorPickerName, color, bool) {
        let panel = [];

        if (labelWidth === '0') {
            labelWidth = 'No Border';
            labelStyle = '';
            labelColor = '';
        } else {
            labelWidth = labelWidth + 'px';
        }

        const radius = ((label === 'All Sides') && (labelWidth !== 'No Border')) ? labelRadius + 'px' : '';
        const iconDisplay = ((label === 'All Sides') && (labelWidth !== 'No Border')) ? 'block' : 'none';

        const iconStyle = {
            display: iconDisplay,
            margin: '0 15px'
        };

        let panelDisplay;
        if (bool) {
            panelDisplay = label === 'All Sides' ? 'none' : 'block';
        } else {
            panelDisplay = label === 'All Sides' ? 'block' : 'none';
        }

        const panelStyle = {
            display: panelDisplay
        }

        panel.push(
            <li className={active} key="0" style={panelStyle}>
                <div className="collapsible-header valign-wrapper"><i className="material-icons">{icon}</i> {label} <span className="badge"></span>{labelWidth} {labelStyle} {labelColor} <div className="material-icons" style={iconStyle}>rounded_corner</div>{radius}</div>
                <div className="collapsible-body">
                    <span>
                        {fieldWidth}
                        {fieldRadius}
                        {fieldStyle}
                        <div className="input-field col s12">
                            <ColorPicker name={colorPickerName} width="100%" color={color} onColorChange={this.handleColorChange} />
                        </div>
                    </span>
                    <div className="clearfix"></div>
                </div>
            </li>);
        return panel;
    }

    handlePanelPadding(active, icon, label, paddingValue, marginValue, fieldPadding, fieldMargin, bool) {
        let panel = [];

        if (paddingValue === '0') {
            paddingValue = 'None';
        } else {
            paddingValue = paddingValue + 'px';
        }

        if (marginValue === '0') {
            marginValue = 'None';
        } else {
            marginValue = marginValue + 'px';
        }

        let panelDisplay;
        if (bool) {
            panelDisplay = label === 'All Sides' ? 'none' : 'block';
        } else {
            panelDisplay = label === 'All Sides' ? 'block' : 'none';
        }

        const panelStyle = {
            display: panelDisplay
        }

        panel.push(
            <li className={active} key="0" style={panelStyle}>
                <div className="collapsible-header valign-wrapper"><i className="material-icons">{icon}</i> {label} <span className="badge"></span>Padding: {paddingValue} | Margin: {marginValue}</div>
                <div className="collapsible-body">
                    <span>
                        {fieldPadding}
                        {fieldMargin}
                    </span>
                    <div className="clearfix"></div>
                </div>
            </li>);
        return panel;
    }

    render() {
        const prop = this.props.states;

        const iframeTitleField = this.inputText('s12', '', 'iframe_title', 'globalIframeTitle', 'iFrame Title', "E.g. 'Career Vacancies'");

        const webSafeFonts = ['Arial', 'Arial Black', 'Courier New', 'Impact', 'Georgia', 'Helvetica', 'Palatino', 'Times New Roman', 'Trebuchet MS', 'Verdana'];
        const googleFonts = ['Exo', 'Lato', 'Lobster', 'Merriweather Sans', 'Montserrat', 'Noto Sans', 'Nunito', 'Open Sans', 'Oswald', 'Poppins', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto', 'Roboto Slab', 'Source Sans Pro', 'Ubuntu'];

        const globalWebSafeFontTypeField = this.inputSelect('s12 m12 l6', 'font_download', 'globalwebsafefonttype', 'globalFontType', prop.globalWebSafeFontType, 'Font Type', webSafeFonts, prop.globalFontSource);
        const globalGoogleFontTypeField = this.inputSelect('s12 m12 l6', 'font_download', 'globalgooglefonttype', 'globalFontType', prop.globalGoogleFontType, 'Font Type', googleFonts, prop.globalFontSource);

        const fontWeightOptions = ['Normal', 'Bold'];
        const globalFontWeightField = this.inputSelect('s12 m12 l6', 'format_bold', 'globalfontweight', 'globalFontWeight', prop.globalFontWeight, 'Font Weight', fontWeightOptions);
        const globalFontSizeField = this.inputRange('s12 m12 l12', 'format_size', 'globalfontsize', 'globalFontSize', prop.globalFontSize, 'Font Size', 8, 50, 'px');

        const switchGrouping = this.handleVisibility('Job Group', 'displayJobGroup', prop.displayJobGroup);
        const switchEmploymentStatus = this.handleVisibility('Employment Status', 'displayEmploymentStatus', prop.displayEmploymentStatus);
        const switchExpiryDate = this.handleVisibility('Expiry Date', 'displayExpiryDate', prop.displayExpiryDate);
        const switchLocation = this.handleVisibility('Location', 'displayLocation', prop.displayLocation);
        const switchReferenceNumber = this.handleVisibility('Reference Number', 'displayReferenceNumber', prop.displayReferenceNumber);

        // JobList
        const joblistBorderWidthField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'borderjoblistwidth', 'borderJobListWidth', prop.borderJobListWidth, 'Border Width', 0, 50, 'px');
        const joblistBorderRadiusField = this.inputRange('s12 m12 l12 xl6', 'rounded_corner', 'borderjoblistradius', 'borderJobListRadius', prop.borderJobListRadius, 'Border Radius', 0, 50, 'px');

        const joblistBorderRadiusField2Visibility = prop.displayBorderJobList ? { display: 'block' } : { display: 'none' };
        const joblistBorderRadiusField2 = this.inputRange('s12', 'rounded_corner', 'borderjoblistradius', 'borderJobListRadius', prop.borderJobListRadius, 'Border Radius', 0, 50, 'px');

        const joblistBorderTopWidthField = this.inputRange('s12 m12 l12 xl6', 'border_top', 'bordertopjoblistwidth', 'borderTopJobListWidth', prop.borderTopJobListWidth, 'Border Width', 0, 50, 'px');
        const joblistBorderBottomWidthField = this.inputRange('s12 m12 l12 xl6', 'border_bottom', 'borderbottomjoblistwidth', 'borderBottomJobListWidth', prop.borderBottomJobListWidth, 'Border Width', 0, 50, 'px');
        const joblistBorderLeftWidthField = this.inputRange('s12 m12 l12 xl6', 'border_left', 'borderleftjoblistwidth', 'borderLeftJobListWidth', prop.borderLeftJobListWidth, 'Border Width', 0, 50, 'px');
        const joblistBorderRightWidthField = this.inputRange('s12 m12 l12 xl6', 'border_right', 'borderrightjoblistwidth', 'borderRightJobListWidth', prop.borderRightJobListWidth, 'Border Width', 0, 50, 'px');

        // JobBlock

        const jobBorderWidthField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'borderjobwidth', 'borderJobWidth', prop.borderJobWidth, 'Border Width', 0, 50, 'px');
        const jobBorderRadiusField = this.inputRange('s12 m12 l12 xl6', 'rounded_corner', 'borderjobradius', 'borderJobRadius', prop.borderJobRadius, 'Border Radius', 0, 50, 'px');

        const jobBorderRadiusField2Visibility = prop.displayBorderJob ? { display: 'block' } : { display: 'none' };
        const jobBorderRadiusField2 = this.inputRange('s12', 'rounded_corner', 'borderjobradius', 'borderJobRadius', prop.borderJobRadius, 'Border Radius', 0, 50, 'px');

        const jobBorderTopWidthField = this.inputRange('s12 m12 l12 xl6', 'border_top', 'bordertopjobwidth', 'borderTopJobWidth', prop.borderTopJobWidth, 'Border Width', 0, 50, 'px');
        const jobBorderBottomWidthField = this.inputRange('s12 m12 l12 xl6', 'border_bottom', 'borderbottomjobwidth', 'borderBottomJobWidth', prop.borderBottomJobWidth, 'Border Width', 0, 50, 'px');
        const jobBorderLeftWidthField = this.inputRange('s12 m12 l12 xl6', 'border_left', 'borderleftjobwidth', 'borderLeftJobWidth', prop.borderLeftJobWidth, 'Border Width', 0, 50, 'px');
        const jobBorderRightWidthField = this.inputRange('s12 m12 l12 xl6', 'border_right', 'borderrightjobwidth', 'borderRightJobWidth', prop.borderRightJobWidth, 'Border Width', 0, 50, 'px');

        // JobGroup

        const jobgroupBorderWidthField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'borderjobgroupwidth', 'borderJobGroupWidth', prop.borderJobGroupWidth, 'Border Width', 0, 50, 'px');
        const jobgroupBorderRadiusField = this.inputRange('s12 m12 l12 xl6', 'rounded_corner', 'borderjobgroupradius', 'borderJobGroupRadius', prop.borderJobGroupRadius, 'Border Radius', 0, 50, 'px');

        const jobgroupBorderRadiusField2Visibility = prop.displayBorderJobGroup ? { display: 'block' } : { display: 'none' };
        const jobgroupBorderRadiusField2 = this.inputRange('s12', 'rounded_corner', 'borderjobgroupradius', 'borderJobGroupRadius', prop.borderJobGroupRadius, 'Border Radius', 0, 50, 'px');

        const jobgroupBorderTopWidthField = this.inputRange('s12 m12 l12 xl6', 'border_top', 'bordertopjobgroupwidth', 'borderTopJobGroupWidth', prop.borderTopJobGroupWidth, 'Border Width', 0, 50, 'px');
        const jobgroupBorderBottomWidthField = this.inputRange('s12 m12 l12 xl6', 'border_bottom', 'borderbottomjobgroupwidth', 'borderBottomJobGroupWidth', prop.borderBottomJobGroupWidth, 'Border Width', 0, 50, 'px');
        const jobgroupBorderLeftWidthField = this.inputRange('s12 m12 l12 xl6', 'border_left', 'borderleftjobgroupwidth', 'borderLeftJobGroupWidth', prop.borderLeftJobGroupWidth, 'Border Width', 0, 50, 'px');
        const jobgroupBorderRightWidthField = this.inputRange('s12 m12 l12 xl6', 'border_right', 'borderrightjobgroupwidth', 'borderRightJobGroupWidth', prop.borderRightJobGroupWidth, 'Border Width', 0, 50, 'px');


        // Style Fields
        const borderOptions = ['Solid', 'Dotted', 'Dashed', 'Double', 'Groove', 'Inset', 'Outset', 'Ridge'];
        const joblistBorderStyleField = this.inputSelect('s12', 'border_style', 'borderjobliststyle', 'borderJobListStyle', prop.borderJobListStyle, 'Border Style', borderOptions);
        const joblistBorderTopStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderTopjobliststyle', 'borderTopJobListStyle', prop.borderTopJobListStyle, 'BorderTop Style', borderOptions);
        const joblistBorderBottomStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderbottomjobliststyle', 'borderbottomJobListStyle', prop.borderBottomJobListStyle, 'BorderBottom Style', borderOptions);
        const joblistBorderLeftStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderleftjobliststyle', 'borderleftJobListStyle', prop.borderLeftJobListStyle, 'BorderLeft Style', borderOptions);
        const joblistBorderRightStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderrightjobliststyle', 'borderrightJobListStyle', prop.borderRightJobListStyle, 'BorderRight Style', borderOptions);

        const jobBorderStyleField = this.inputSelect('s12', 'border_style', 'borderjobstyle', 'borderJobStyle', prop.borderJobStyle, 'Border Style', borderOptions);
        const jobBorderTopStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'bordertopjobstyle', 'borderTopJobStyle', prop.borderTopJobStyle, 'Border Style', borderOptions);
        const jobBorderBottomStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderbottomjobstyle', 'borderBottomJobStyle', prop.borderBottomJobStyle, 'Border Style', borderOptions);
        const jobBorderLeftStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderleftjobstyle', 'borderLeftJobStyle', prop.borderLeftJobStyle, 'Border Style', borderOptions);
        const jobBorderRightStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderrightjobstyle', 'borderRightJobStyle', prop.borderRightJobStyle, 'Border Style', borderOptions);

        const jobgroupBorderStyleField = this.inputSelect('s12', 'border_style', 'borderjobgroupstyle', 'borderJobGroupStyle', prop.borderJobGroupStyle, 'Border Style', borderOptions);
        const jobgroupBorderTopStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'bordertopjobgroupstyle', 'borderTopJobGroupStyle', prop.borderTopJobGroupStyle, 'Border Style', borderOptions);
        const jobgroupBorderBottomStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderbottomjobgroupstyle', 'borderBottomJobGroupStyle', prop.borderBottomJobGroupStyle, 'Border Style', borderOptions);
        const jobgroupBorderLeftStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderleftjobgroupstyle', 'borderLeftJobGroupStyle', prop.borderLeftJobGroupStyle, 'Border Style', borderOptions);
        const jobgroupBorderRightStyleField = this.inputSelect('s12 m12 l12 xl6', 'border_style', 'borderrightjobgroupstyle', 'borderRightJobGroupStyle', prop.borderRightJobGroupStyle, 'Border Style', borderOptions);

        // Padding Fields

        const joblistPaddingField = this.inputRange('s12 m12 l12 xl6', 'format_indent_increase', 'paddingjoblist', 'paddingJobList', prop.paddingJobList, 'Padding', 0, 50, 'px');
        const joblistMarginField = this.inputRange('s12 m12 l12 xl6', 'format_indent_decrease', 'marginjoblist', 'marginJobList', prop.marginJobList, 'Margin', 0, 50, 'px');

        const joblistPaddingTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingtopjoblist', 'paddingTopJobList', prop.paddingTopJobList, 'Padding', 0, 50, 'px');
        const joblistPaddingBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingbottomjoblist', 'paddingBottomJobList', prop.paddingBottomJobList, 'Padding', 0, 50, 'px');
        const joblistPaddingLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingleftjoblist', 'paddingLeftJobList', prop.paddingLeftJobList, 'Padding', 0, 50, 'px');
        const joblistPaddingRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingrightjoblist', 'paddingRightJobList', prop.paddingRightJobList, 'Padding', 0, 50, 'px');

        const joblistMarginTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'margintopjoblist', 'marginTopJobList', prop.marginTopJobList, 'Margin', 0, 50, 'px');
        const joblistMarginBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginbottomjoblist', 'marginBottomJobList', prop.marginBottomJobList, 'Margin', 0, 50, 'px');
        const joblistMarginLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginleftjoblist', 'marginLeftJobList', prop.marginLeftJobList, 'Margin', 0, 50, 'px');
        const joblistMarginRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginrightjoblist', 'marginRightJobList', prop.marginRightJobList, 'Margin', 0, 50, 'px');

        const jobPaddingField = this.inputRange('s12 m12 l12 xl6', 'format_indent_increase', 'paddingjob', 'paddingJob', prop.paddingJob, 'Padding', 0, 50, 'px');
        const jobMarginField = this.inputRange('s12 m12 l12 xl6', 'format_indent_decrease', 'marginjob', 'marginJob', prop.marginJob, 'Margin', 0, 50, 'px');

        const jobPaddingTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingtopjob', 'paddingTopJob', prop.paddingTopJob, 'Padding', 0, 50, 'px');
        const jobPaddingBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingbottomjob', 'paddingBottomJob', prop.paddingBottomJob, 'Padding', 0, 50, 'px');
        const jobPaddingLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingleftjob', 'paddingLeftJob', prop.paddingLeftJob, 'Padding', 0, 50, 'px');
        const jobPaddingRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingrightjob', 'paddingRightJob', prop.paddingRightJob, 'Padding', 0, 50, 'px');

        const jobMarginTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'margintopjob', 'marginTopJob', prop.marginTopJob, 'Margin', 0, 50, 'px');
        const jobMarginBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginbottomjob', 'marginBottomJob', prop.marginBottomJob, 'Margin', 0, 50, 'px');
        const jobMarginLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginleftjob', 'marginLeftJob', prop.marginLeftJob, 'Margin', 0, 50, 'px');
        const jobMarginRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginrightjob', 'marginRightJob', prop.marginRightJob, 'Margin', 0, 50, 'px');

        const jobgroupPaddingField = this.inputRange('s12 m12 l12 xl6', 'format_indent_increase', 'paddingjobgroup', 'paddingJobGroup', prop.paddingJobGroup, 'Padding', 0, 50, 'px');
        const jobgroupMarginField = this.inputRange('s12 m12 l12 xl6', 'format_indent_decrease', 'marginjobgroup', 'marginJobGroup', prop.marginJobGroup, 'Margin', 0, 50, 'px');

        const jobgroupPaddingTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingtopjobgroup', 'paddingTopJobGroup', prop.paddingTopJobGroup, 'Padding', 0, 50, 'px');
        const jobgroupPaddingBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingbottomjobgroup', 'paddingBottomJobGroup', prop.paddingBottomJobGroup, 'Padding', 0, 50, 'px');
        const jobgroupPaddingLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingleftjobgroup', 'paddingLeftJobGroup', prop.paddingLeftJobGroup, 'Padding', 0, 50, 'px');
        const jobgroupPaddingRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingrightjobgroup', 'paddingRightJobGroup', prop.paddingRightJobGroup, 'Padding', 0, 50, 'px');

        const jobgroupMarginTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'margintopjobgroup', 'marginTopJobGroup', prop.marginTopJobGroup, 'Margin', 0, 50, 'px');
        const jobgroupMarginBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginbottomjobgroup', 'marginBottomJobGroup', prop.marginBottomJobGroup, 'Margin', 0, 50, 'px');
        const jobgroupMarginLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginleftjobgroup', 'marginLeftJobGroup', prop.marginLeftJobGroup, 'Margin', 0, 50, 'px');
        const jobgroupMarginRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginrightjobgroup', 'marginRightJobGroup', prop.marginRightJobGroup, 'Margin', 0, 50, 'px');


        const jobtitlePaddingField = this.inputRange('s12 m12 l12 xl6', 'format_indent_increase', 'paddingjobtitle', 'paddingJobTitle', prop.paddingJobTitle, 'Padding', 0, 50, 'px');
        const jobtitleMarginField = this.inputRange('s12 m12 l12 xl6', 'format_indent_decrease', 'marginjobtitle', 'marginJobTitle', prop.marginJobTitle, 'Margin', 0, 50, 'px');

        const jobtitlePaddingTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingtopjobtitle', 'paddingTopJobTitle', prop.paddingTopJobTitle, 'Padding', 0, 50, 'px');
        const jobtitlePaddingBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingbottomjobtitle', 'paddingBottomJobTitle', prop.paddingBottomJobTitle, 'Padding', 0, 50, 'px');
        const jobtitlePaddingLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingleftjobtitle', 'paddingLeftJobTitle', prop.paddingLeftJobTitle, 'Padding', 0, 50, 'px');
        const jobtitlePaddingRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingrightjobtitle', 'paddingRightJobTitle', prop.paddingRightJobTitle, 'Padding', 0, 50, 'px');

        const jobtitleMarginTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'margintopjobtitle', 'marginTopJobTitle', prop.marginTopJobTitle, 'Margin', 0, 50, 'px');
        const jobtitleMarginBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginbottomjobtitle', 'marginBottomJobTitle', prop.marginBottomJobTitle, 'Margin', 0, 50, 'px');
        const jobtitleMarginLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginleftjobtitle', 'marginLeftJobTitle', prop.marginLeftJobTitle, 'Margin', 0, 50, 'px');
        const jobtitleMarginRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginrightjobtitle', 'marginRightJobTitle', prop.marginRightJobTitle, 'Margin', 0, 50, 'px');


        const jobgrouplabelPaddingField = this.inputRange('s12 m12 l12 xl6', 'format_indent_increase', 'paddingjobgrouplabel', 'paddingJobGroupLabel', prop.paddingJobGroupLabel, 'Padding', 0, 50, 'px');
        const jobgrouplabelMarginField = this.inputRange('s12 m12 l12 xl6', 'format_indent_decrease', 'marginjobgrouplabel', 'marginJobGroupLabel', prop.marginJobGroupLabel, 'Margin', 0, 50, 'px');

        const jobgrouplabelPaddingTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingtopjobgrouplabel', 'paddingTopJobGroupLabel', prop.paddingTopJobGroupLabel, 'Padding', 0, 50, 'px');
        const jobgrouplabelPaddingBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingbottomjobgrouplabel', 'paddingBottomJobGroupLabel', prop.paddingBottomJobGroupLabel, 'Padding', 0, 50, 'px');
        const jobgrouplabelPaddingLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingleftjobgrouplabel', 'paddingLeftJobGroupLabel', prop.paddingLeftJobGroupLabel, 'Padding', 0, 50, 'px');
        const jobgrouplabelPaddingRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'paddingrightjobgrouplabel', 'paddingRightJobGroupLabel', prop.paddingRightJobGroupLabel, 'Padding', 0, 50, 'px');

        const jobgrouplabelMarginTopField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'margintopjobgrouplabel', 'marginTopJobGroupLabel', prop.marginTopJobGroupLabel, 'Margin', 0, 50, 'px');
        const jobgrouplabelMarginBottomField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginbottomjobgrouplabel', 'marginBottomJobGroupLabel', prop.marginBottomJobGroupLabel, 'Margin', 0, 50, 'px');
        const jobgrouplabelMarginLeftField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginleftjobgrouplabel', 'marginLeftJobGroupLabel', prop.marginLeftJobGroupLabel, 'Margin', 0, 50, 'px');
        const jobgrouplabelMarginRightField = this.inputRange('s12 m12 l12 xl6', 'border_outer', 'marginrightjobgrouplabel', 'marginRightJobGroupLabel', prop.marginRightJobGroupLabel, 'Margin', 0, 50, 'px');


        // Panels
        const panelBorderJobList = this.handlePanel('', 'border_outer', 'All Sides', prop.borderJobListWidth, prop.borderJobListStyle, prop.borderJobListColor, prop.borderJobListRadius, joblistBorderWidthField, joblistBorderRadiusField, joblistBorderStyleField, 'borderJobListColor', prop.borderJobListColor, prop.displayBorderJobList);
        const panelBorderTopJobList = this.handlePanel('', 'border_top', 'Top', prop.borderTopJobListWidth, prop.borderTopJobListStyle, prop.borderTopJobListColor, '', joblistBorderTopWidthField, '', joblistBorderTopStyleField, 'borderTopJobListColor', prop.borderTopJobListColor, prop.displayBorderJobList);
        const panelBorderBottomJobList = this.handlePanel('', 'border_bottom', 'Bottom', prop.borderBottomJobListWidth, prop.borderBottomJobListStyle, prop.borderBottomJobListColor, '', joblistBorderBottomWidthField, '', joblistBorderBottomStyleField, 'borderBottomJobListColor', prop.borderBottomJobListColor, prop.displayBorderJobList);
        const panelBorderLeftJobList = this.handlePanel('', 'border_left', 'Left', prop.borderLeftJobListWidth, prop.borderLeftJobListStyle, prop.borderLeftJobListColor, '', joblistBorderLeftWidthField, '', joblistBorderLeftStyleField, 'borderLeftJobListColor', prop.borderLeftJobListColor, prop.displayBorderJobList);
        const panelBorderRightJobList = this.handlePanel('', 'border_right', 'Right', prop.borderRightJobListWidth, prop.borderRightJobListStyle, prop.borderRightJobListColor, '', joblistBorderRightWidthField, '', joblistBorderRightStyleField, 'borderRightJobListColor', prop.borderRightJobListColor, prop.displayBorderJobList);

        const panelBorderJob = this.handlePanel('', 'border_outer', 'All Sides', prop.borderJobWidth, prop.borderJobStyle, prop.borderJobColor, prop.borderJobRadius, jobBorderWidthField, jobBorderRadiusField, jobBorderStyleField, 'borderJobColor', prop.borderJobColor, prop.displayBorderJob);
        const panelBorderTopJob = this.handlePanel('', 'border_top', 'Top', prop.borderTopJobWidth, prop.borderTopJobStyle, prop.borderTopJobColor, '', jobBorderTopWidthField, '', jobBorderTopStyleField, 'borderTopJobColor', prop.borderTopJobColor, prop.displayBorderJob);
        const panelBorderBottomJob = this.handlePanel('', 'border_bottom', 'Bottom', prop.borderBottomJobWidth, prop.borderBottomJobStyle, prop.borderBottomJobColor, '', jobBorderBottomWidthField, '', jobBorderBottomStyleField, 'borderBottomJobColor', prop.borderBottomJobColor, prop.displayBorderJob);
        const panelBorderLeftJob = this.handlePanel('', 'border_left', 'Left', prop.borderLeftJobWidth, prop.borderLeftJobStyle, prop.borderLeftJobColor, '', jobBorderLeftWidthField, '', jobBorderLeftStyleField, 'borderLeftJobColor', prop.borderLeftJobColor, prop.displayBorderJob);
        const panelBorderRightJob = this.handlePanel('', 'border_right', 'Right', prop.borderRightJobWidth, prop.borderRightJobStyle, prop.borderRightJobColor, '', jobBorderRightWidthField, '', jobBorderRightStyleField, 'borderRightJobColor', prop.borderRightJobColor, prop.displayBorderJob);

        const panelBorderJobGroup = this.handlePanel('', 'border_outer', 'All Sides', prop.borderJobGroupWidth, prop.borderJobGroupStyle, prop.borderJobGroupColor, prop.borderJobGroupRadius, jobgroupBorderWidthField, jobgroupBorderRadiusField, jobgroupBorderStyleField, 'borderJobGroupColor', prop.borderJobGroupColor, prop.displayBorderJobGroup);
        const panelBorderTopJobGroup = this.handlePanel('', 'border_top', 'Top', prop.borderTopJobGroupWidth, prop.borderTopJobGroupStyle, prop.borderTopJobGroupColor, '', jobgroupBorderTopWidthField, '', jobgroupBorderTopStyleField, 'borderTopJobGroupColor', prop.borderTopJobGroupColor, prop.displayBorderJobGroup);
        const panelBorderBottomJobGroup = this.handlePanel('', 'border_bottom', 'Bottom', prop.borderBottomJobGroupWidth, prop.borderBottomJobGroupStyle, prop.borderBottomJobGroupColor, '', jobgroupBorderBottomWidthField, '', jobgroupBorderBottomStyleField, 'borderBottomJobGroupColor', prop.borderBottomJobGroupColor, prop.displayBorderJobGroup);
        const panelBorderLeftJobGroup = this.handlePanel('', 'border_left', 'Left', prop.borderLeftJobGroupWidth, prop.borderLeftJobGroupStyle, prop.borderLeftJobGroupColor, '', jobgroupBorderLeftWidthField, '', jobgroupBorderLeftStyleField, 'borderLeftJobGroupColor', prop.borderLeftJobGroupColor, prop.displayBorderJobGroup);
        const panelBorderRightJobGroup = this.handlePanel('', 'border_right', 'Right', prop.borderRightJobGroupWidth, prop.borderRightJobGroupStyle, prop.borderRightJobGroupColor, '', jobgroupBorderRightWidthField, '', jobgroupBorderRightStyleField, 'borderRightJobGroupColor', prop.borderRightJobGroupColor, prop.displayBorderJobGroup);

        const switchBorderJobList = this.handleVisibility('Manage Individual Sides', 'displayBorderJobList', prop.displayBorderJobList);
        const switchBorderJob = this.handleVisibility('Manage Individual Sides', 'displayBorderJob', prop.displayBorderJob);
        const switchBorderJobGroup = this.handleVisibility('Manage Individual Sides', 'displayBorderJobGroup', prop.displayBorderJobGroup);

        // Panel Padding

        const panelPaddingJobList = this.handlePanelPadding('', 'border_outer', 'All Sides', prop.paddingJobList, prop.marginJobList, joblistPaddingField, joblistMarginField, prop.displayPaddingJobList);
        const panelPaddingTopJobList = this.handlePanelPadding('', 'border_top', 'Top', prop.paddingTopJobList, prop.marginTopJobList, joblistPaddingTopField, joblistMarginTopField, prop.displayPaddingJobList);
        const panelPaddingBottomJobList = this.handlePanelPadding('', 'border_bottom', 'Bottom', prop.paddingBottomJobList, prop.marginBottomJobList, joblistPaddingBottomField, joblistMarginBottomField, prop.displayPaddingJobList);
        const panelPaddingLeftJobList = this.handlePanelPadding('', 'border_left', 'Left', prop.paddingLeftJobList, prop.marginLeftJobList, joblistPaddingLeftField, joblistMarginLeftField, prop.displayPaddingJobList);
        const panelPaddingRightJobList = this.handlePanelPadding('', 'border_right', 'Right', prop.paddingRightJobList, prop.marginRightJobList, joblistPaddingRightField, joblistMarginRightField, prop.displayPaddingJobList);

        const panelPaddingJob = this.handlePanelPadding('', 'border_outer', 'All Sides', prop.paddingJob, prop.marginJob, jobPaddingField, jobMarginField, prop.displayPaddingJob);
        const panelPaddingTopJob = this.handlePanelPadding('', 'border_top', 'Top', prop.paddingTopJob, prop.marginTopJob, jobPaddingTopField, jobMarginTopField, prop.displayPaddingJob);
        const panelPaddingBottomJob = this.handlePanelPadding('', 'border_bottom', 'Bottom', prop.paddingBottomJob, prop.marginBottomJob, jobPaddingBottomField, jobMarginBottomField, prop.displayPaddingJob);
        const panelPaddingLeftJob = this.handlePanelPadding('', 'border_left', 'Left', prop.paddingLeftJob, prop.marginLeftJob, jobPaddingLeftField, jobMarginLeftField, prop.displayPaddingJob);
        const panelPaddingRightJob = this.handlePanelPadding('', 'border_right', 'Right', prop.paddingRightJob, prop.marginRightJob, jobPaddingRightField, jobMarginRightField, prop.displayPaddingJob);

        const panelPaddingJobGroup = this.handlePanelPadding('', 'border_outer', 'All Sides', prop.paddingJobGroup, prop.marginJobGroup, jobgroupPaddingField, jobgroupMarginField, prop.displayPaddingJobGroup);
        const panelPaddingTopJobGroup = this.handlePanelPadding('', 'border_top', 'Top', prop.paddingTopJobGroup, prop.marginTopJobGroup, jobgroupPaddingTopField, jobgroupMarginTopField, prop.displayPaddingJobGroup);
        const panelPaddingBottomJobGroup = this.handlePanelPadding('', 'border_bottom', 'Bottom', prop.paddingBottomJobGroup, prop.marginBottomJobGroup, jobgroupPaddingBottomField, jobgroupMarginBottomField, prop.displayPaddingJobGroup);
        const panelPaddingLeftJobGroup = this.handlePanelPadding('', 'border_left', 'Left', prop.paddingLeftJobGroup, prop.marginLeftJobGroup, jobgroupPaddingLeftField, jobgroupMarginLeftField, prop.displayPaddingJobGroup);
        const panelPaddingRightJobGroup = this.handlePanelPadding('', 'border_right', 'Right', prop.paddingRightJobGroup, prop.marginRightJobGroup, jobgroupPaddingRightField, jobgroupMarginRightField, prop.displayPaddingJobGroup);

        // Padding Switch
        const switchPaddingJobList = this.handleVisibility('Manage Individual Sides', 'displayPaddingJobList', prop.displayPaddingJobList);
        const switchPaddingJob = this.handleVisibility('Manage Individual Sides', 'displayPaddingJob', prop.displayPaddingJob);
        const switchPaddingJobGroup = this.handleVisibility('Manage Individual Sides', 'displayPaddingJobGroup', prop.displayPaddingJobGroup);

        // Panel Job Title Padding

        const panelPaddingJobTitle = this.handlePanelPadding('', 'border_outer', 'All Sides', prop.paddingJobTitle, prop.marginJobTitle, jobtitlePaddingField, jobtitleMarginField, prop.displayPaddingJobTitle);
        const panelPaddingTopJobTitle = this.handlePanelPadding('', 'border_top', 'Top', prop.paddingTopJobTitle, prop.marginTopJobTitle, jobtitlePaddingTopField, jobtitleMarginTopField, prop.displayPaddingJobTitle);
        const panelPaddingBottomJobTitle = this.handlePanelPadding('', 'border_bottom', 'Bottom', prop.paddingBottomJobTitle, prop.marginBottomJobTitle, jobtitlePaddingBottomField, jobtitleMarginBottomField, prop.displayPaddingJobTitle);
        const panelPaddingLeftJobTitle = this.handlePanelPadding('', 'border_left', 'Left', prop.paddingLeftJobTitle, prop.marginLeftJobTitle, jobtitlePaddingLeftField, jobtitleMarginLeftField, prop.displayPaddingJobTitle);
        const panelPaddingRightJobTitle = this.handlePanelPadding('', 'border_right', 'Right', prop.paddingRightJobTitle, prop.marginRightJobTitle, jobtitlePaddingRightField, jobtitleMarginRightField, prop.displayPaddingJobTitle);

        // Padding Job Title Switch
        const switchPaddingJobTitle = this.handleVisibility('Manage Individual Sides', 'displayPaddingJobTitle', prop.displayPaddingJobTitle);

        // Panel Job Group Label Padding

        const panelPaddingJobGroupLabel = this.handlePanelPadding('', 'border_outer', 'All Sides', prop.paddingJobGroupLabel, prop.marginJobGroupLabel, jobgrouplabelPaddingField, jobgrouplabelMarginField, prop.displayPaddingJobGroupLabel);
        const panelPaddingTopJobGroupLabel = this.handlePanelPadding('', 'border_top', 'Top', prop.paddingTopJobGroupLabel, prop.marginTopJobGroupLabel, jobgrouplabelPaddingTopField, jobgrouplabelMarginTopField, prop.displayPaddingJobGroupLabel);
        const panelPaddingBottomJobGroupLabel = this.handlePanelPadding('', 'border_bottom', 'Bottom', prop.paddingBottomJobGroupLabel, prop.marginBottomJobGroupLabel, jobgrouplabelPaddingBottomField, jobgrouplabelMarginBottomField, prop.displayPaddingJobGroupLabel);
        const panelPaddingLeftJobGroupLabel = this.handlePanelPadding('', 'border_left', 'Left', prop.paddingLeftJobGroupLabel, prop.marginLeftJobGroupLabel, jobgrouplabelPaddingLeftField, jobgrouplabelMarginLeftField, prop.displayPaddingJobGroupLabel);
        const panelPaddingRightJobGroupLabel = this.handlePanelPadding('', 'border_right', 'Right', prop.paddingRightJobGroupLabel, prop.marginRightJobGroupLabel, jobgrouplabelPaddingRightField, jobgrouplabelMarginRightField, prop.displayPaddingJobGroupLabel);

        // Padding Job Group Label Switch
        const switchPaddingJobGroupLabel = this.handleVisibility('Manage Individual Sides', 'displayPaddingJobGroupLabel', prop.displayPaddingJobGroupLabel);

        return (
            <div className="row">
                <ul className="tabs">
                    <li className="tab col s3"><a className="active" href="#tab-settings">Settings</a></li>
                    <li className="tab col s3"><a href="#tab-border">Borders</a></li>
                    <li className="tab col s3"><a href="#tab-padding">Paddings</a></li>
                    <li className="tab col s3"><a href="#tab-colours">Colours</a></li>
                </ul>
                <div id="tab-settings" className="col s12">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="card-title">Settings</span>
                            <div className="row no-margin-bottom">
                                {iframeTitleField}

                                <div className="col s12">
                                    <label>Font Source</label>
                                </div>
                                <div className="input-field col s12">
                                    <div className="col s6">
                                        <label>
                                            <input id="globalwebsafefontradio" name="globalFontSource" type="radio" defaultChecked defaultValue="webSafeFont" onChange={this.handleRadioChange} />
                                            <span htmlFor="globalwebsafefontradio">Web Safe Fonts</span>
                                        </label>
                                    </div>
                                    <div className="col s6">
                                        <label>
                                            <input id="globalgooglefontradio" name="globalFontSource" type="radio" defaultValue="googleFont" onChange={this.handleRadioChange} />
                                            <span htmlFor="globalgooglefontradio">Google Fonts</span>
                                        </label>
                                    </div>
                                </div>

                                {globalWebSafeFontTypeField}
                                {globalGoogleFontTypeField}
                                {globalFontWeightField}
                                {globalFontSizeField}
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="card hoverable">
                        <div className="card-content">

                            <div className="col s12">
                                <span className="card-title">Displayed Fields</span>
                            </div>

                            {switchGrouping}
                            {switchEmploymentStatus}
                            {switchExpiryDate}
                            {switchLocation}
                            {switchReferenceNumber}

                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div id="tab-border" className="col s12">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="card-title">Borders</span>
                            <div className="card-panel no-padding">
                                <div className="row no-margin-bottom">
                                    <div className="col s12">
                                        <ul className="tabs tabs-secondary">
                                            <li className="tab col s4"><a href="#tab-outerborder" className="active">Job List</a></li>
                                            <li className="tab col s4"><a href="#tab-innerborder">Job Block</a></li>
                                            <li className={prop.displayJobGroup ? 'tab col s4' : 'tab col s4 disabled'}><a href="#tab-groupborder">Job Group</a></li>
                                        </ul>
                                        <div className="col s12">
                                            <div id="tab-outerborder">
                                                {switchBorderJobList}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelBorderJobList}
                                                    {panelBorderTopJobList}
                                                    {panelBorderBottomJobList}
                                                    {panelBorderLeftJobList}
                                                    {panelBorderRightJobList}
                                                </ul>
                                                <div style={joblistBorderRadiusField2Visibility}>
                                                    {joblistBorderRadiusField2}
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>

                                            <div id="tab-innerborder">
                                                {switchBorderJob}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelBorderJob}
                                                    {panelBorderTopJob}
                                                    {panelBorderBottomJob}
                                                    {panelBorderLeftJob}
                                                    {panelBorderRightJob}
                                                </ul>
                                                <div style={jobBorderRadiusField2Visibility}>
                                                    {jobBorderRadiusField2}
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div id="tab-groupborder" className={prop.displayJobGroup ? '' : 'hidden'}>
                                                {switchBorderJobGroup}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelBorderJobGroup}
                                                    {panelBorderTopJobGroup}
                                                    {panelBorderBottomJobGroup}
                                                    {panelBorderLeftJobGroup}
                                                    {panelBorderRightJobGroup}
                                                </ul>
                                                <div style={jobgroupBorderRadiusField2Visibility}>
                                                    {jobgroupBorderRadiusField2}
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tab-padding" className="col s12">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="card-title">Paddings &amp; Margins</span>
                            <div className="card-panel no-padding">
                                <div className="row">
                                    <div className="col s12">
                                        <ul className="tabs tabs-secondary">
                                            <li className="tab col s4"><a href="#tab-joblistpadding" className="active">Job List</a></li>
                                            <li className="tab col s4"><a href="#tab-jobblockpadding">Job Block</a></li>
                                            <li className={prop.displayJobGroup ? 'tab col s4' : 'tab col s4 disabled'}><a href="#tab-jobgrouppadding">Job Group</a></li>
                                        </ul>
                                        <div className="col s12">
                                            <div id="tab-joblistpadding">
                                                {switchPaddingJobList}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelPaddingJobList}
                                                    {panelPaddingTopJobList}
                                                    {panelPaddingBottomJobList}
                                                    {panelPaddingLeftJobList}
                                                    {panelPaddingRightJobList}
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>

                                            <div id="tab-jobblockpadding">
                                                {switchPaddingJob}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelPaddingJob}
                                                    {panelPaddingTopJob}
                                                    {panelPaddingBottomJob}
                                                    {panelPaddingLeftJob}
                                                    {panelPaddingRightJob}
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>

                                            <div id="tab-jobgrouppadding">
                                                {switchPaddingJobGroup}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelPaddingJobGroup}
                                                    {panelPaddingTopJobGroup}
                                                    {panelPaddingBottomJobGroup}
                                                    {panelPaddingLeftJobGroup}
                                                    {panelPaddingRightJobGroup}
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="card-panel no-padding">
                                <div className="row">
                                    <div className="col s12">
                                        <ul className="tabs tabs-secondary">
                                            <li className="tab col s6"><a href="#tab-jobtitlepadding" className="active">Job Title</a></li>
                                            <li className={prop.displayJobGroup ? 'tab col s6' : 'tab col s6 disabled'}><a href="#tab-jobgrouplabelpadding">Job Group Label</a></li>
                                        </ul>
                                        <div className="col s12">
                                            <div id="tab-jobtitlepadding">
                                                {switchPaddingJobTitle}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelPaddingJobTitle}
                                                    {panelPaddingTopJobTitle}
                                                    {panelPaddingBottomJobTitle}
                                                    {panelPaddingLeftJobTitle}
                                                    {panelPaddingRightJobTitle}
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div id="tab-jobgrouplabelpadding">
                                                {switchPaddingJobGroupLabel}
                                                <div className="clearfix"></div>
                                                <ul className="collapsible">
                                                    {panelPaddingJobGroupLabel}
                                                    {panelPaddingTopJobGroupLabel}
                                                    {panelPaddingBottomJobGroupLabel}
                                                    {panelPaddingLeftJobGroupLabel}
                                                    {panelPaddingRightJobGroupLabel}
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="tab-colours" className="col s12">
                    <Colours states={this.props.states} onColorChange={this.handleColorChange} onInputChange={this.handleInputChange} />
                </div>

            </div>

        );
    }
}