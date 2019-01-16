import React, { Component } from 'react';

import Modal from '../Helpers/Modal';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Snippet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: '',
            embed: 'iframe',
            objectHeight: 400,
            minHeight: 300,
            maxHeight: 1000
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSnippet = this.handleSnippet.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSnippet(slug, embed, height) {
        let slugId = slug.replace(/-/g, "_");

        let iframeSnippet = ['<!-- Begin iFrame snippet -->',
            '<iframe src="https://' + slug + '.applynow.net.au/" width="100%" style="height: auto;" frameborder="0" id="' + slugId + '_iframe"></iframe>',
            '<script type="text/javascript" src="https://candidate-office.s3.amazonaws.com/js/iframe-resizer/iframeResizer.min.js"></script>',
            '<script type="text/javascript">iFrameResize(null, "#' + slugId + '_iframe");</script>',
            '<!-- End iFrame snippet -->'].join('\n');

        let objectSnippet = ['<!-- Begin Object snippet -->',
            '<object data="https://' + slug + '.applynow.net.au/" width="100%" height="' + height + '" id="' + slugId + '_object">',
            '<embed src="https://' + slug + '.applynow.net.au/" width="100%"></embed>',
            '</object>',
            '<!-- End Object snippet -->'].join('\n');

        let snippet;
        switch (embed) {
            case 'iframe':
                snippet = iframeSnippet;
                break;
            case 'object':
                snippet = objectSnippet;
                break;
            default:
                snippet = iframeSnippet;
        }
        return snippet;
    }

    render() {
        let snippet = this.handleSnippet(this.state.slug, this.state.embed, this.state.objectHeight);
        let iframe = 'https://' + this.state.slug + '.applynow.net.au/';

        let embedMethod = [];

        let iframeChecked = this.state.embed === 'iframe' ? true : false;
        let objectChecked = this.state.embed === 'object' ? true : false;

        embedMethod.push(
            <div key="0">
                <div className="col s12">
                    <label>Embed Method</label>
                </div>
                <div className="input-field col s12">
                    <div className="col s12">
                        <label>
                            <input id="iframeRadio" name="embed" type="radio" defaultChecked={iframeChecked} defaultValue="iframe" onChange={this.handleInputChange} />
                            <span htmlFor="iframeRadio">&lt;iframe&gt;</span>
                        </label>
                    </div>
                    <div className="col s12">
                        <label>
                            <input id="objectRadio" name="embed" type="radio" defaultChecked={objectChecked} defaultValue="object" onChange={this.handleInputChange} />
                            <span htmlFor="objectRadio">&lt;object&gt;</span>
                        </label>
                    </div>
                </div>
            </div>);

        const gridStyle = 'input-field col s12';

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

        const objectHeight = [];
        objectHeight.push(
            <div className={gridStyle}>
                <label htmlFor="objectHeight" style={labelStyle}>Object Height</label>
                <div className="clearfix"></div>
                <i className="material-icons prefix" key="0">format_line_spacing</i>
                <p className="range-field" style={rangeStyle}>
                    {this.state.objectHeight + 'px'}
                    <input type="range" id="objectHeight" name="objectHeight" min={this.state.minHeight} max={this.state.maxHeight} defaultValue={this.state.objectHeight} onChange={this.handleInputChange} />
                    <span class="helper-text">A fixed object height must be specified.</span>
                </p>
            </div>);

        let copyCodeTitle = 'Snippet Copied!';
        let copyCodeText = [];
        copyCodeText.push(<p key="0">Paste the snippet to your website editor or send the snippet to the client.</p>);

        let iframeStyle = this.state.embed === 'object' ? { height: this.state.objectHeight + 'px' } : { height: '400px' };

        return (
            <div className="row">
                <div className="col s12">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="card-title">Snippet</span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="slug" type="text" name="slug" className="validate" placeholder="E.g. 'clientname-external'" onChange={this.handleInputChange} />
                                    <label htmlFor="slug">Slug / Shortname</label>
                                    <div className="helper-text">Enter the slug/shortname from <a href="https://applynow.net.au/admin/" target="_blank" rel="noopener noreferrer"><b>Scout Talent :Recruit</b></a> to generate the snippet.</div>
                                </div>

                                {this.state.slug === '' ? '' : embedMethod}
                                {this.state.slug !== '' && this.state.embed === 'object' ? objectHeight : ''}
                                {this.state.slug === '' ? '' : <div className="col s12"><div className="card black white-text"><div id="snippet" className="card-content"> {snippet} </div><div className="card-action white black-text"><CopyToClipboard text={snippet}><a href="#modal-copysnippet" className="modal-trigger blue-text">Copy Code to Clipboard</a></CopyToClipboard></div></div></div>}
                                <Modal id="modal-copysnippet" title={copyCodeTitle} text={copyCodeText} />

                                <div className="col s12">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className="card-title">Live Preview</span>
                                            <p>If you entered the correct slug, the live iframe that is saved in <a href="https://applynow.net.au/admin/" target="_blank" rel="noopener noreferrer"><b>Scout Talent :Recruit</b></a> will appear below.</p>
                                            <br />
                                            {this.state.slug === '' ? '' : <a href={iframe} target="_blank" rel="noopener noreferrer"><button className="btn">Open In New Window</button></a>}
                                            {this.state.slug === '' ? '' : <div><br /><iframe src={iframe} title={this.state.slug} width="100%" frameBorder="0" id="preview_iframe" style={iframeStyle}></iframe></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
