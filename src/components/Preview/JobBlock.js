import React, { Component } from 'react';

import Radium from 'radium';

class JobBlock extends Component {
    render() {
        const styles = this.props.styles;

        const jobblockBorder = this.props.getBorder('displayBorderJob');
        const jobblockBorderTop = styles.displayBorderJob ? this.props.getBorder('displayBorderTopJob') : jobblockBorder;
        const jobblockBorderBottom = styles.displayBorderJob ? this.props.getBorder('displayBorderBottomJob') : jobblockBorder;
        const jobblockBorderLeft = styles.displayBorderJob ? this.props.getBorder('displayBorderLeftJob') : jobblockBorder;
        const jobblockBorderRight = styles.displayBorderJob ? this.props.getBorder('displayBorderRightJob') : jobblockBorder;

        const jobblockBorderRadius = this.props.getBorderRadius('displayBorderJob');

        const jobPadding = styles.paddingJob;
        const jobPaddingTop = styles.displayPaddingJob ? styles.paddingTopJob : jobPadding;
        const jobPaddingBottom = styles.displayPaddingJob ? styles.paddingBottomJob : jobPadding;
        const jobPaddingLeft = styles.displayPaddingJob ? styles.paddingLeftJob : jobPadding;
        const jobPaddingRight = styles.displayPaddingJob ? styles.paddingRightJob : jobPadding;

        const jobMargin = styles.marginJob;
        const jobMarginTop = styles.displayPaddingJob ? styles.marginTopJob : jobMargin;
        const jobMarginBottom = styles.displayPaddingJob ? styles.marginBottomJob : jobMargin;
        const jobMarginLeft = styles.displayPaddingJob ? styles.marginLeftJob : jobMargin;
        const jobMarginRight = styles.displayPaddingJob ? styles.marginRightJob : jobMargin;

        const jobtitlePadding = styles.paddingJobTitle;
        const jobtitlePaddingTop = styles.displayPaddingjobTitle ? styles.paddingTopjobTitle : jobtitlePadding;
        const jobtitlePaddingBottom = styles.displayPaddingjobTitle ? styles.paddingBottomjobTitle : jobtitlePadding;
        const jobtitlePaddingLeft = styles.displayPaddingjobTitle ? styles.paddingLeftjobTitle : jobtitlePadding;
        const jobtitlePaddingRight = styles.displayPaddingjobTitle ? styles.paddingRightjobTitle : jobtitlePadding;

        const jobtitleMargin = styles.marginJobTitle;
        const jobtitleMarginTop = styles.displayPaddingjobTitle ? styles.marginTopjobTitle : jobtitleMargin;
        const jobtitleMarginBottom = styles.displayPaddingjobTitle ? styles.marginBottomjobTitle : jobtitleMargin;
        const jobtitleMarginLeft = styles.displayPaddingjobTitle ? styles.marginLeftjobTitle : jobtitleMargin;
        const jobtitleMarginRight = styles.displayPaddingjobTitle ? styles.marginRightjobTitle : jobtitleMargin;


        const jobblock = {
            background: styles.colorBackgroundJobBlock,
            borderBottom: jobblockBorderBottom,
            borderLeft: jobblockBorderLeft,
            borderRight: jobblockBorderRight,
            borderTop: jobblockBorderTop,
            borderRadius: jobblockBorderRadius + 'px',
            marginTop: jobMarginTop + 'px',
            marginBottom: jobMarginBottom + 'px',
            marginLeft: jobMarginLeft + 'px',
            marginRight: jobMarginRight + 'px',
            overflow: 'hidden',
            paddingTop: jobPaddingTop + 'px',
            paddingBottom: jobPaddingBottom + 'px',
            paddingLeft: jobPaddingLeft + 'px',
            paddingRight: jobPaddingRight + 'px',
            position: 'relative',
            ':hover': {
                background: styles.colorBackgroundJobBlockHover
            }
        };

        const job_title = {
            background: styles.colorBackgroundJobTitle,
            color: styles.colorTextJobTitle,
            display: 'block',
            lineHeight: 'auto',
            marginTop: jobtitleMarginTop + 'px',
            marginBottom: jobtitleMarginBottom + 'px',
            marginLeft: jobtitleMarginLeft + 'px',
            marginRight: jobtitleMarginRight + 'px',
            paddingTop: jobtitlePaddingTop + 'px',
            paddingBottom: jobtitlePaddingBottom + 'px',
            paddingLeft: jobtitlePaddingLeft + 'px',
            paddingRight: jobtitlePaddingRight + 'px',
            textDecoration: 'underline',
            ':hover': {
                color: styles.colorTextJobTitleHover
            }
        };

        const employment_status = {
            background: styles.colorBackgroundEmploymentStatus,
            color: styles.colorTextEmploymentStatus,
            display: this.props.checkDisplay(styles.displayEmploymentStatus)
        };

        const expires = {
            background: styles.colorBackgroundExpiryDate,
            color: styles.colorTextExpiryDate,
            display: this.props.checkDisplay(styles.displayExpiryDate)
        };

        const location = {
            background: styles.colorBackgroundLocation,
            color: styles.colorTextLocation,
            display: this.props.checkDisplay(styles.displayLocation)
        };

        const jobid = {
            background: styles.colorBackgroundReferenceNumber,
            color: styles.colorTextReferenceNumber,
            display: this.props.checkDisplay(styles.displayReferenceNumber),
            float: 'none'
        };

        const br = {
            display: 'none'
        };

        return (
            <div className="jobblock block" style={jobblock} data-address_state="Address State" data-brand="Brand 1" data-brand_url="/logos/original/missing.png" data-classifications="{}" data-expires_at="2026-12-31 17:00:00 +1100" data-location="Location" data-reference={'ReferenceNumber' + (this.props.counter + 1)} data-title={'Job Title ' + (this.props.counter + 1)} data-url={'#job-title-' + (this.props.counter + 1)} data-tag_list="">
                <a style={job_title} href={'#job-title-' + (this.props.counter + 1)} key={this.props.counter}>Job Title {this.props.counter + 1}</a>
                <span style={employment_status}>Employment Status</span>
                <span style={expires}>31 Dec 2019</span>
                <span style={location}>Location</span>
                <br style={br} />
                <span className="jobid" style={jobid}>REF00{this.props.counter + 1}</span>
            </div>
        );
    }
}

export default JobBlock = Radium(JobBlock);