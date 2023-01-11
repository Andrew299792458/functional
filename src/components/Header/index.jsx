import React from "react";
import { Component } from "react";
import "./styles.css"

export class Header extends Component {
    state = {}

    render() {

        return <>
            <div className="head">
                <div className="logo">
                    <h1>Simple House</h1>
                    <h6>new restaurant template</h6>
                </div>
                <div className="nav">
                    <a href="http//somewhere.com">Home</a>
                    <a href="http//somewhere.com">About</a>
                    <a href="http//somewhere.com">Contact</a>
                </div>
            </div>
            <div className="welcome">
                <h2>
                    Welcome to Simple House
                </h2>
                <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>

            </div>
        </>

    }
}

export default Header