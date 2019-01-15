import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

// import packageJson from '/package.json';
import Modal from './Helpers/Modal';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleHideSideNav = this.handleHideSideNav.bind(this);
    }

    handleHideSideNav() {
        let elem = document.querySelector(".sidenav");
        let instance = M.Sidenav.getInstance(elem);
        instance.close();
    }

    componentDidMount() {
        let elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            draggable: true,
            edge: "right",
            preventScrolling: true
        });
    }

    render() {
        const appVersion = process.env.REACT_APP_VERSION;

        const aboutTitle = 'About iFrame Code Builder v' + appVersion;
        let aboutText = [];
        aboutText.push(<p key="0">iFrame Code Builder is an application built for <a href="https://www.scouttalenthq.com" target="_blank" rel="noopener noreferrer">Scout Talent :Recruit</a> Career Vacancies Widget.  This app was created by Leo Dimacuha in December 2018 as a tool for <a href="https://www.scouttalenthq.com" target="_blank" rel="noopener noreferrer">Scout Talent :Recruit</a>'s client success and support specialists to assist in client branding and software implementations.</p>);

        const mailtoReportBug = 'mailto:leo.dimacuha@scouttalent.com.au?Subject=Bug Report: iFrame Code Builder v' + appVersion;

        const mailtoFeedback = 'mailto:leo.dimacuha@scouttalent.com.au?Subject=Feedback: iFrame Code Builder v' + appVersion;

        return (
            <Router>
                <div>
                    <nav className="blue-grey darken-1">
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo"><i className="material-icons">code</i> iFrame Code Builder</Link>
                            <a href="#!" data-target="mobile-nav" className="right sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                            {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="https://scouttalent.force.com/support/s/" target="_blank" rel="noopener noreferrer">Help</a></li>
                                <li><Link to="/help">Help</Link></li>
                            </ul> */}
                        </div>
                    </nav>
                    {/* TODO: Mobile Nav */}
                    <ul className="sidenav no-autoinit" id="mobile-nav">
                        <li><a href="#!" className="btn-sidenav material-icons" onClick={this.handleHideSideNav}><i className="btn-sidenav material-icons" rel="sideNav">chevron_right</i></a></li>
                        <li><a href="#modal-about" className="modal-trigger">About this App</a></li>
                        {/* <li><a href="https://scouttalent.force.com/support/s/" target="_blank" rel="noopener noreferrer">Help</a></li> */}
                        <li><a href={mailtoReportBug}>Report Bugs</a></li>
                        <li><a href={mailtoFeedback}>Send Feedback</a></li>
                    </ul>
                    <Modal id="modal-about" title={aboutTitle} text={aboutText} />
                </div>
            </Router>
        )
    }
}

export default Nav;