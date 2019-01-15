import React, { Component } from 'react';
import JobBlock from './JobBlock';
import JobGroup from './JobGroup';
import InsertGoogleFont from '../Helpers/InsertGoogleFont';

export default class PreviewWindow extends Component {
    constructor(props) {
        super(props);
        this.getBorder = this.getBorder.bind(this);
        this.getBorderRadius = this.getBorderRadius.bind(this);
    }

    getBorder(name) {
        let border;

        const borderName = name.slice(8); // remove prefix "display"

        const width = 'b' + borderName + 'Width'; // add postfix "Width"
        const style = 'b' + borderName + 'Style'; // add postfix "Style"
        const color = 'b' + borderName + 'Color'; // add postfix "Color"

        const borderWidth = this.props.styles[width];
        const borderStyle = this.props.styles[style];
        const borderColor = this.props.styles[color];

        border = borderWidth + 'px ' + borderStyle + ' ' + borderColor;

        return border;
    }

    getBorderRadius(name) {
        let borderRadius;

        const borderName = name.slice(8); // remove prefix "display"
        const rad = 'b' + borderName + 'Radius'; // add postfix "Radius"
        const borderRad = this.props.styles[rad];

        borderRadius = borderRad;

        return borderRadius;
    }

    render() {
        const styles = this.props.styles;

        let googleFont = '';
        if (styles.globalFontSource === 'googleFont') {
            let font = styles.globalFontType.replace(/ /g, "+");
            googleFont = <InsertGoogleFont font={font} />;
        }

        const joblistBorder = this.getBorder('displayBorderJobList');
        const joblistBorderTop = styles.displayBorderJobList ? this.getBorder('displayBorderTopJobList') : joblistBorder;
        const joblistBorderBottom = styles.displayBorderJobList ? this.getBorder('displayBorderBottomJobList') : joblistBorder;
        const joblistBorderLeft = styles.displayBorderJobList ? this.getBorder('displayBorderLeftJobList') : joblistBorder;
        const joblistBorderRight = styles.displayBorderJobList ? this.getBorder('displayBorderRightJobList') : joblistBorder;

        const joblistBorderRadius = this.getBorderRadius('displayBorderJobList');

        const joblistPadding = styles.paddingJobList;
        const joblistPaddingTop = styles.displayPaddingJobList ? styles.paddingTopJobList : joblistPadding;
        const joblistPaddingBottom = styles.displayPaddingJobList ? styles.paddingBottomJobList : joblistPadding;
        const joblistPaddingLeft = styles.displayPaddingJobList ? styles.paddingLeftJobList : joblistPadding;
        const joblistPaddingRight = styles.displayPaddingJobList ? styles.paddingRightJobList : joblistPadding;

        const joblistMargin = styles.marginJobList;
        const joblistMarginTop = styles.displayPaddingJobList ? styles.marginTopJobList : joblistMargin;
        const joblistMarginBottom = styles.displayPaddingJobList ? styles.marginBottomJobList : joblistMargin;
        const joblistMarginLeft = styles.displayPaddingJobList ? styles.marginLeftJobList : joblistMargin;
        const joblistMarginRight = styles.displayPaddingJobList ? styles.marginRightJobList : joblistMargin;

        const jobs = {
            background: styles.colorBackgroundJobList,
            borderTop: joblistBorderTop,
            borderBottom: joblistBorderBottom,
            borderLeft: joblistBorderLeft,
            borderRight: joblistBorderRight,
            borderRadius: joblistBorderRadius + 'px',
            color: styles.globalTextColor,
            fontFamily: '"' + styles.globalFontType + '", sans-serif',
            fontSize: styles.globalFontSize + 'px',
            fontWeight: styles.globalFontWeight,
            lineHeight: 'auto',
            margin: styles.marginJobList + 'px',
            marginTop: joblistMarginTop + 'px',
            marginBottom: joblistMarginBottom + 'px',
            marginLeft: joblistMarginLeft + 'px',
            marginRight: joblistMarginRight + 'px',
            overflow: 'hidden',
            paddingTop: joblistPaddingTop + 'px',
            paddingBottom: joblistPaddingBottom + 'px',
            paddingLeft: joblistPaddingLeft + 'px',
            paddingRight: joblistPaddingRight + 'px'
        };

        const joblist = {
        };

        let jobRows = [];
        for (var i = 0; i < this.props.numberOfJobs; i++) {
            jobRows.push(<JobBlock styles={styles} checkDisplay={this.props.checkDisplay} getBorder={this.getBorder} getBorderRadius={this.getBorderRadius} counter={i} key={i} />);
        }

        let jobRowsGrouped = [];
        for (var j = 0; j < this.props.numberOfGroups; j++) {
            jobRowsGrouped.push(<JobGroup styles={styles} jobRows={jobRows} getBorder={this.getBorder} getBorderRadius={this.getBorderRadius} counter={j} key={j} />);
        }

        return (
            <React.Fragment>
                {googleFont}
                <div id="jobs" style={jobs}>
                    <div id="joblist" style={joblist}>
                        {styles.displayJobGroup ? jobRowsGrouped : jobRows}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}