import React, { Component } from "react";
import { List } from '../../components/list';
import { Avo } from "../../components/home-section"
import { MainText } from "../../components/Main-text";
import "./style.css"


export class Home extends Component {


    render() {
        return <div className="home">

            <MainText title={"Welcome to Simple House"} description={"Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."} />
            <List />
            <Avo />
        </div>
    }
}