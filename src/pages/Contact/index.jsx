import React, { Component } from "react";
import { MainText } from "../../components/Main-text"
import ValidateForm from "../../components/ValidateForm";
import { Info } from "../../components/contact-info"
import { Map } from "../../components/Map"
import { Panels } from "../../components/FAQ";

import "./style.css"

export class Contact extends Component {


    render() {
        return <div className="container">
            <MainText title={"Contact Page"} description={"You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template."} />
            <div className="form">
                <ValidateForm />
                <Info />
            </div>
            <div className="map">
                <Map />
            </div>
            <Panels/>
        </div>
    }
}