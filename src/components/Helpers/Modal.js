import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        let modalStyle = this.props.image === undefined ? 'modal' : 'modal modal-fixed-footer';

        
        return (
            <div id={this.props.id} className={modalStyle}>
                <div className="modal-content">
                    <h4>{this.props.title}</h4>
                    {this.props.text}
                    {this.props.image !== undefined ? <img src={this.props.image} className="responsive-img materialboxed" alt={this.props.title} /> : ''}
                </div>
                <div className="modal-footer">
                    <div className="col s12">
                        <a href="#!" className="btn modal-close">Done</a>
                    </div>
                </div>
            </div>
        );
    }
}