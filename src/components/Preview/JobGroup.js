import React, { Component } from 'react';

import Radium from 'radium';

class JobGroup extends Component {
    render() {
        const styles = this.props.styles;

        const jobgroupBorder = this.props.getBorder('displayBorderJobGroup');
        const jobgroupBorderTop = styles.displayBorderJobGroup ? this.props.getBorder('displayBorderTopJobGroup') : jobgroupBorder;
        const jobgroupBorderBottom = styles.displayBorderJobGroup ? this.props.getBorder('displayBorderBottomJobGroup') : jobgroupBorder;
        const jobgroupBorderLeft = styles.displayBorderJobGroup ? this.props.getBorder('displayBorderLeftJobGroup') : jobgroupBorder;
        const jobgroupBorderRight = styles.displayBorderJobGroup ? this.props.getBorder('displayBorderRightJobGroup') : jobgroupBorder;

        const jobgroupBorderRadius = this.props.getBorderRadius('displayBorderJobGroup');

        const jobgroupPadding = styles.paddingJobGroup;
        const jobgroupPaddingTop = styles.displayPaddingJobGroup ? styles.paddingTopJobGroup : jobgroupPadding;
        const jobgroupPaddingBottom = styles.displayPaddingJobGroup ? styles.paddingBottomJobGroup : jobgroupPadding;
        const jobgroupPaddingLeft = styles.displayPaddingJobGroup ? styles.paddingLeftJobGroup : jobgroupPadding;
        const jobgroupPaddingRight = styles.displayPaddingJobGroup ? styles.paddingRightJobGroup : jobgroupPadding;

        const jobgroupMargin = styles.marginJobGroup;
        const jobgroupMarginTop = styles.displayPaddingJobGroup ? styles.marginTopJobGroup : jobgroupMargin;
        const jobgroupMarginBottom = styles.displayPaddingJobGroup ? styles.marginBottomJobGroup : jobgroupMargin;
        const jobgroupMarginLeft = styles.displayPaddingJobGroup ? styles.marginLeftJobGroup : jobgroupMargin;
        const jobgroupMarginRight = styles.displayPaddingJobGroup ? styles.marginRightJobGroup : jobgroupMargin;


        const jobgrouplabelPadding = styles.paddingJobGroupLabel;
        const jobgrouplabelPaddingTop = styles.displayPaddingJobGroupLabel ? styles.paddingTopJobGroupLabel : jobgrouplabelPadding;
        const jobgrouplabelPaddingBottom = styles.displayPaddingJobGroupLabel ? styles.paddingBottomJobGroupLabel : jobgrouplabelPadding;
        const jobgrouplabelPaddingLeft = styles.displayPaddingJobGroupLabel ? styles.paddingLeftJobGroupLabel : jobgrouplabelPadding;
        const jobgrouplabelPaddingRight = styles.displayPaddingJobGroupLabel ? styles.paddingRightJobGroupLabel : jobgrouplabelPadding;

        const jobgrouplabelMargin = styles.marginJobGroupLabel;
        const jobgrouplabelMarginTop = styles.displayPaddingJobGroupLabel ? styles.marginTopJobGroupLabel : jobgrouplabelMargin;
        const jobgrouplabelMarginBottom = styles.displayPaddingJobGroupLabel ? styles.marginBottomJobGroupLabel : jobgrouplabelMargin;
        const jobgrouplabelMarginLeft = styles.displayPaddingJobGroupLabel ? styles.marginLeftJobGroupLabel : jobgrouplabelMargin;
        const jobgrouplabelMarginRight = styles.displayPaddingJobGroupLabel ? styles.marginRightJobGroupLabel : jobgrouplabelMargin;

        const jobgroup = {
            background: styles.colorBackgroundJobGroup,
            borderTop: jobgroupBorderTop,
            borderBottom: jobgroupBorderBottom,
            borderLeft: jobgroupBorderLeft,
            borderRight: jobgroupBorderRight,
            borderRadius: jobgroupBorderRadius + 'px',
            marginTop: jobgroupMarginTop + 'px',
            marginBottom: jobgroupMarginBottom + 'px',
            marginLeft: jobgroupMarginLeft + 'px',
            marginRight: jobgroupMarginRight + 'px',
            paddingTop: jobgroupPaddingTop + 'px',
            paddingBottom: jobgroupPaddingBottom + 'px',
            paddingLeft: jobgroupPaddingLeft + 'px',
            paddingRight: jobgroupPaddingRight + 'px',
            overflow: 'hidden'
        };
        
        const jobgrouplabel = {
            background: styles.colorBackgroundJobGroupLabel,
            color: styles.colorTextJobGroupLabel,
            fontFamily: styles.globalFontType + ', sans-serif',
            fontSize: styles.globalFontSize + 'px',
            fontWeight: styles.globalFontWeight,
            marginTop: jobgrouplabelMarginTop + 'px',
            marginBottom: jobgrouplabelMarginBottom + 'px',
            marginLeft: jobgrouplabelMarginLeft + 'px',
            marginRight: jobgrouplabelMarginRight + 'px',
            paddingTop: jobgrouplabelPaddingTop + 'px',
            paddingBottom: jobgrouplabelPaddingBottom + 'px',
            paddingLeft: jobgrouplabelPaddingLeft + 'px',
            paddingRight: jobgrouplabelPaddingRight + 'px',
        };

        return (
            <div style={jobgroup}>
                <h2 style={jobgrouplabel}>Group Label {this.props.counter + 1}</h2>
                {this.props.jobRows}
            </div>
        );
    }
}

export default JobGroup = Radium(JobGroup);
