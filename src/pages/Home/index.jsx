import React, { Component } from "react";
import { List } from '../components/list';
import { Avo } from "../components/home-section"
import "./style.css"

export class Home extends Component {


    render() {
        return <div className="home">
            <List />
            <Avo />
        </div>
    }
}