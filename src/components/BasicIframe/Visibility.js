import React, { Component } from 'react';

export default class Visibility extends Component {
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

    render() {
        const prop = this.props.states;

        const switchEmploymentStatus = this.handleVisibility('Employment Status', 'displayEmploymentStatus', prop.displayEmploymentStatus);
        const switchExpiryDate = this.handleVisibility('Expiry Date', 'displayExpiryDate', prop.displayExpiryDate);
        const switchLocation = this.handleVisibility('Location', 'displayLocation', prop.displayLocation);
        const switchReferenceNumber = this.handleVisibility('Reference Number', 'displayReferenceNumber', prop.displayReferenceNumber);

        const switchBorderJobBottom = this.handleVisibility('Job Border Bottom', 'displayBorderBottomJob', prop.displayBorderBottomJob);
        const switchBorderJobLeft = this.handleVisibility('Job Border Left', 'displayBorderLeftJob', prop.displayBorderLeftJob);
        const switchBorderJobRight = this.handleVisibility('Job Border Right', 'displayBorderRightJob', prop.displayBorderRightJob);
        const switchBorderJobTop = this.handleVisibility('Job Border Top', 'displayBorderTopJob', prop.displayBorderTopJob);

        return (
            <div className="card hoverable">
                <div className="card-content">
                    <span className="card-title">Visibility</span>
                    <div className="card-panel no-padding">
                        <div className="row no-margin-bottom">
                            <div className="col s12">
                                <ul className="tabs tabs-secondary">
                                    <li className="tab col s6"><a href="#tab-fields" className="active">Fields</a></li>
                                    <li className="tab col s6"><a href="#tab-bordervisibility">Job Borders</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col s12">
                            <div id="tab-fields">
                                <div className="container">
                                    {switchEmploymentStatus}
                                    {switchExpiryDate}
                                    {switchLocation}
                                    {switchReferenceNumber}
                                </div>
                            </div>
                            <div id="tab-bordervisibility">
                                <div className="container">
                                    {/* {switchBorderJobList} */}
                                    {switchBorderJobBottom}
                                    {switchBorderJobLeft}
                                    {switchBorderJobRight}
                                    {switchBorderJobTop}
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
