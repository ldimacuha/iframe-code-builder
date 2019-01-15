import React, { Component } from 'react';
import Modal from '../Helpers/Modal';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Code extends Component {
    constructor(props) {
        super(props);
        this.handleGenerateCode = this.handleGenerateCode.bind(this);
    }

    handleInsertGoogleFont(googleFont) {
        const font = googleFont.replace(/ /g, "+");
        const fontLink = 'https://fonts.googleapis.com/css?family=' + font;
        return '<link href="' + fontLink + ':300,400,700" rel="stylesheet" />';
    }

    handleBorderDisplay(visibility, element, borderWidth, borderStyle, borderColor) {
        let border;
        if (visibility) {
            border = borderWidth + 'px ' + borderStyle + ' ' + borderColor;
        } else {
            border = this.props.styles['border' + element + 'Width'] + 'px ' + this.props.styles['border' + element + 'Style'] + ' ' + this.props.styles['border' + element + 'Color'];
        }
        return border;
    }

    handlePaddingDisplay(visibility, value, element) {
        let border;
        if (visibility) {
            border = value;
        } else {
            border = this.props.styles[element];
        }
        return border;
    }

    handleGenerateCode(styles) {
        const title = styles.globalIframeTitle === '' ? 'Career Vacancies' : styles.globalIframeTitle;
        const declareGoogleFont = styles.globalFontSource === 'googleFont' ? this.handleInsertGoogleFont(styles.globalFontType) : '';

        const borderBottomJobList = this.handleBorderDisplay(styles.displayBorderJobList, 'JobList', styles.borderBottomJobListWidth, styles.borderBottomJobListStyle, styles.borderBottomJobListColor);
        const borderLeftJobList = this.handleBorderDisplay(styles.displayBorderJobList, 'JobList', styles.borderLeftJobListWidth, styles.borderLeftJobListStyle, styles.borderLeftJobListColor);
        const borderRightJobList = this.handleBorderDisplay(styles.displayBorderJobList, 'JobList', styles.borderRightJobListWidth, styles.borderRightJobListStyle, styles.borderRightJobListColor);
        const borderTopJobList = this.handleBorderDisplay(styles.displayBorderJobList, 'JobList', styles.borderTopJobListWidth, styles.borderTopJobListStyle, styles.borderTopJobListColor);


        const borderBottomJobGroup = this.handleBorderDisplay(styles.displayBorderJobGroup, 'JobGroup', styles.borderBottomJobGroupWidth, styles.borderBottomJobGroupStyle, styles.borderBottomJobGroupColor);
        const borderLeftJobGroup = this.handleBorderDisplay(styles.displayBorderJobGroup, 'JobGroup', styles.borderLeftJobGroupWidth, styles.borderLeftJobGroupStyle, styles.borderLeftJobGroupColor);
        const borderRightJobGroup = this.handleBorderDisplay(styles.displayBorderJobGroup, 'JobGroup', styles.borderRightJobGroupWidth, styles.borderRightJobGroupStyle, styles.borderRightJobGroupColor);
        const borderTopJobGroup = this.handleBorderDisplay(styles.displayBorderJobGroup, 'JobGroup', styles.borderTopJobGroupWidth, styles.borderTopJobGroupStyle, styles.borderTopJobGroupColor);

        const borderBottomJob = this.handleBorderDisplay(styles.displayBorderJob, 'Job', styles.borderBottomJobWidth, styles.borderBottomJobStyle, styles.borderBottomJobColor);
        const borderLeftJob = this.handleBorderDisplay(styles.displayBorderJob, 'Job', styles.borderLeftJobWidth, styles.borderLeftJobStyle, styles.borderLeftJobColor);
        const borderRightJob = this.handleBorderDisplay(styles.displayBorderJob, 'Job', styles.borderRightJobWidth, styles.borderRightJobStyle, styles.borderRightJobColor);
        const borderTopJob = this.handleBorderDisplay(styles.displayBorderJob, 'Job', styles.borderTopJobWidth, styles.borderTopJobStyle, styles.borderTopJobColor);

        const paddingTopJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.paddingTopJobList, 'paddingJobList');
        const paddingBottomJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.paddingBottomJobList, 'paddingJobList');
        const paddingLeftJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.paddingLeftJobList, 'paddingJobList');
        const paddingRightJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.paddingRightJobList, 'paddingJobList');

        const marginTopJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.marginTopJobList, 'marginJobList');
        const marginBottomJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.marginBottomJobList, 'marginJobList');
        const marginLeftJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.marginLeftJobList, 'marginJobList');
        const marginRightJobList = this.handlePaddingDisplay(styles.displayPaddingJobList, styles.marginRightJobList, 'marginJobList');

        const paddingTopJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.paddingTopJob, 'paddingJob');
        const paddingBottomJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.paddingBottomJob, 'paddingJob');
        const paddingLeftJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.paddingLeftJob, 'paddingJob');
        const paddingRightJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.paddingRightJob, 'paddingJob');

        const marginTopJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.marginTopJob, 'marginJob');
        const marginBottomJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.marginBottomJob, 'marginJob');
        const marginLeftJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.marginLeftJob, 'marginJob');
        const marginRightJob = this.handlePaddingDisplay(styles.displayPaddingJob, styles.marginRightJob, 'marginJob');

        const paddingTopJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.paddingTopJobGroup, 'paddingJobGroup');
        const paddingBottomJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.paddingBottomJobGroup, 'paddingJobGroup');
        const paddingLeftJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.paddingLeftJobGroup, 'paddingJobGroup');
        const paddingRightJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.paddingRightJobGroup, 'paddingJobGroup');

        const marginTopJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.marginTopJobGroup, 'marginJobGroup');
        const marginBottomJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.marginBottomJobGroup, 'marginJobGroup');
        const marginLeftJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.marginLeftJobGroup, 'marginJobGroup');
        const marginRightJobGroup = this.handlePaddingDisplay(styles.displayPaddingJobGroup, styles.marginRightJobGroup, 'marginJobGroup');

        const paddingTopJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.paddingTopJobTitle, 'paddingJobTitle');
        const paddingBottomJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.paddingBottomJobTitle, 'paddingJobTitle');
        const paddingLeftJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.paddingLeftJobTitle, 'paddingJobTitle');
        const paddingRightJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.paddingRightJobTitle, 'paddingJobTitle');

        const marginTopJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.marginTopJobTitle, 'marginJobTitle');
        const marginBottomJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.marginBottomJobTitle, 'marginJobTitle');
        const marginLeftJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.marginLeftJobTitle, 'marginJobTitle');
        const marginRightJobTitle = this.handlePaddingDisplay(styles.displayPaddingJobTitle, styles.marginRightJobTitle, 'marginJobTitle');

        const paddingTopJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.paddingTopJobGroupLabel, 'paddingJobGroupLabel');
        const paddingBottomJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.paddingBottomJobGroupLabel, 'paddingJobGroupLabel');
        const paddingLeftJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.paddingLeftJobGroupLabel, 'paddingJobGroupLabel');
        const paddingRightJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.paddingRightJobGroupLabel, 'paddingJobGroupLabel');

        const marginTopJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.marginTopJobGroupLabel, 'marginJobGroupLabel');
        const marginBottomJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.marginBottomJobGroupLabel, 'marginJobGroupLabel');
        const marginLeftJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.marginLeftJobGroupLabel, 'marginJobGroupLabel');
        const marginRightJobGroupLabel = this.handlePaddingDisplay(styles.displayPaddingJobGroupLabel, styles.marginRightJobGroupLabel, 'marginJobGroupLabel');



        const code = ['<!DOCTYPE html>',
            '<html lang="en">',
            '<head>',
            '   <meta charset="UTF-8" />',
            '   <meta name="viewport" content="width=device-width, initial-scale=1" />',
            '   <meta http-equiv="Content-Language" content="en">',
            '   <title>' + title + '</title>',
            '   ' + declareGoogleFont,
            '   <style type="text/css">',
            '       * {',
            '           margin: 0;',
            '           padding: 0;',
            '       }',
            '       #jobs {',
            '           background: ' + styles.colorBackgroundJobList + ';',
            '           border-bottom: ' + borderBottomJobList + ';',
            '           border-left: ' + borderLeftJobList + ';',
            '           border-right: ' + borderRightJobList + ';',
            '           border-top: ' + borderTopJobList + ';',
            '           border-radius: ' + styles.borderJobListRadius + 'px;',
            '           -webkit-border-radius: ' + styles.borderJobListRadius + 'px;',
            '           -moz-border-radius: ' + styles.borderJobListRadius + 'px;',
            '           -ms-border-radius: ' + styles.borderJobListRadius + 'px;',
            '           -o-border-radius: ' + styles.borderJobListRadius + 'px;',
            '           color: ' + styles.globalTextColor + ';',
            '           font-family: "' + styles.globalFontType + '", sans-serif;',
            '           font-size: ' + styles.globalFontSize + 'px;',
            '           font-weight: ' + styles.globalFontWeight + ';',
            '           margin-top: ' + marginTopJobList + 'px;',
            '           margin-bottom: ' + marginBottomJobList + 'px;',
            '           margin-left: ' + marginLeftJobList + 'px;',
            '           margin-right: ' + marginRightJobList + 'px;',
            '           padding-top: ' + paddingTopJobList + 'px;',
            '           padding-bottom: ' + paddingBottomJobList + 'px;',
            '           padding-left: ' + paddingLeftJobList + 'px;',
            '           padding-right: ' + paddingRightJobList + 'px;',
            '       }',
            '       .jobgroup {',
            '           background: ' + styles.colorBackgroundJobGroup + ';',
            '           border-bottom: ' + borderBottomJobGroup + ';',
            '           border-left: ' + borderLeftJobGroup + ';',
            '           border-right: ' + borderRightJobGroup + ';',
            '           border-top: ' + borderTopJobGroup + ';',
            '           border-radius: ' + styles.borderJobGroupRadius + 'px;',
            '           -webkit-border-radius: ' + styles.borderJobGroupRadius + 'px;',
            '           -moz-border-radius: ' + styles.borderJobGroupRadius + 'px;',
            '           -ms-border-radius: ' + styles.borderJobGroupRadius + 'px;',
            '           -o-border-radius: ' + styles.borderJobGroupRadius + 'px;',
            '           color: ' + styles.colorTextJobGroupLabel + ';',
            '           margin-top: ' + marginTopJobGroup + 'px;',
            '           margin-bottom: ' + marginBottomJobGroup + 'px;',
            '           margin-left: ' + marginLeftJobGroup + 'px;',
            '           margin-right: ' + marginRightJobGroup + 'px;',
            '           padding-top: ' + paddingTopJobGroup + 'px;',
            '           padding-bottom: ' + paddingBottomJobGroup + 'px;',
            '           padding-left: ' + paddingLeftJobGroup + 'px;',
            '           padding-right: ' + paddingRightJobGroup + 'px;',
            '       }',
            '       .jobgroup > h2 {',
            '           background: ' + styles.colorBackgroundJobGroupLabel + ';',
            '           font-size: ' + styles.globalFontSize + 'px;',
            '           font-weight: ' + styles.globalFontWeight + ';',
            '           margin-top: ' + marginTopJobGroupLabel + 'px;',
            '           margin-bottom: ' + marginBottomJobGroupLabel + 'px;',
            '           margin-left: ' + marginLeftJobGroupLabel + 'px;',
            '           margin-right: ' + marginRightJobGroupLabel + 'px;',
            '           padding-top: ' + paddingTopJobGroupLabel + 'px;',
            '           padding-bottom: ' + paddingBottomJobGroupLabel + 'px;',
            '           padding-left: ' + paddingLeftJobGroupLabel + 'px;',
            '           padding-right: ' + paddingRightJobGroupLabel + 'px;',
            '       }',
            '       .jobblock {',
            '           background: ' + styles.colorBackgroundJobBlock + ';',
            '           border-bottom: ' + borderBottomJob + ';',
            '           border-left: ' + borderLeftJob + ';',
            '           border-right: ' + borderRightJob + ';',
            '           border-top: ' + borderTopJob + ';',
            '           border-radius: ' + styles.borderJobRadius + 'px;',
            '           -webkit-border-radius: ' + styles.borderJobRadius + 'px;',
            '           -moz-border-radius: ' + styles.borderJobRadius + 'px;',
            '           -ms-border-radius: ' + styles.borderJobRadius + 'px;',
            '           -o-border-radius: ' + styles.borderJobRadius + 'px;',
            '           margin-top: ' + marginTopJob + 'px;',
            '           margin-bottom: ' + marginBottomJob + 'px;',
            '           margin-left: ' + marginLeftJob + 'px;',
            '           margin-right: ' + marginRightJob + 'px;',
            '           padding-top: ' + paddingTopJob + 'px;',
            '           padding-bottom: ' + paddingBottomJob + 'px;',
            '           padding-left: ' + paddingLeftJob + 'px;',
            '           padding-right: ' + paddingRightJob + 'px;',
            '           position: relative;',
            '       }',
            '       .jobblock:hover {',
            '           background: ' + styles.colorBackgroundJobBlockHover + ';',
            '       }',
            '       .jobblock a:before {',
            '           content: "";',
            '           position: absolute;',
            '           bottom: 0;',
            '           left: 0;',
            '           right: 0;',
            '           top: 0;',
            '       }',
            '       a.job_title {',
            '           background: ' + styles.colorBackgroundJobTitle + ';',
            '           color: ' + styles.colorTextJobTitle + ';',
            '           display: block;',
            '           margin-top: ' + marginTopJobTitle + 'px;',
            '           margin-bottom: ' + marginBottomJobTitle + 'px;',
            '           margin-left: ' + marginLeftJobTitle + 'px;',
            '           margin-right: ' + marginRightJobTitle + 'px;',
            '           padding-top: ' + paddingTopJobTitle + 'px;',
            '           padding-bottom: ' + paddingBottomJobTitle + 'px;',
            '           padding-left: ' + paddingLeftJobTitle + 'px;',
            '           padding-right: ' + paddingRightJobTitle + 'px;',
            '           text-decoration: underline;',
            '       }',
            '       a.job_title:hover {',
            '           color: ' + styles.colorTextJobTitleHover + ';',
            '       }',
            '       span.employment_status {',
            '           background: ' + styles.colorBackgroundEmploymentStatus + ';',
            '           color: ' + styles.colorTextEmploymentStatus + ';',
            '           display: ' + this.props.checkDisplay(styles.displayEmploymentStatus) + ' !important;',
            '       }',
            '       span.expires {',
            '           background: ' + styles.colorBackgroundExpiryDate + ';',
            '           color: ' + styles.colorTextExpiryDate + ';',
            '           display: ' + this.props.checkDisplay(styles.displayExpiryDate) + ' !important;',
            '       }',
            '       span.location {',
            '           background: ' + styles.colorBackgroundLocation + ';',
            '           color: ' + styles.colorTextLocation + ';',
            '           display: ' + this.props.checkDisplay(styles.displayLocation) + ' !important;',
            '       }',
            '       span.jobid {',
            '           background: ' + styles.colorBackgroundReferenceNumber + ';',
            '           color: ' + styles.colorTextReferenceNumber + ';',
            '           display: ' + this.props.checkDisplay(styles.displayReferenceNumber) + ' !important;',
            '       }',
            '       br {',
            '           display: none;',
            '       }',
            '   </style>',
            '</head>',
            '<body>',
            '{JOBS}',
            '<script src="https://candidate-office.s3.amazonaws.com/js/iframe-resizer/iframeResizer.contentWindow.min.js" type="text/javascript"></script>',
            '</body>',
            '</html>'].join('\n');
        return code;
    }

    render() {

        let code = this.handleGenerateCode(this.props.styles);

        let copyCodeTitle = 'Code Copied!';
        let copyCodeText = [];
        copyCodeText.push(<p key="0">Paste the code in the Portal Template in Scout Talent :Recruit then click the "CREATE" button.</p>);
        let copyCodeImage = '/images/how-to_portal.png';

        return (
            <div className="row">
                <div className="col s12">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="card-title">Code</span>
                            <div>
                                <div className="card black white-text">
                                    <div id="code" className="card-content">
                                        {code}
                                    </div>
                                    <div className="card-action white black-text">
                                        <CopyToClipboard text={code}><a href="#modal-copycode" className="modal-trigger blue-text">Copy Code to Clipboard</a></CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal id="modal-copycode" title={copyCodeTitle} text={copyCodeText} image={copyCodeImage} />
            </div>
        );
    }
}
