import React, { Component } from "react";
import "./style.css"
import { NavLink } from "react-router-dom";


export class Routing extends Component {
    render() {
        return <>
            <div className="head">
                <div className="wall">
                    <div className="wall-img"></div>
                </div>
                <div className="header">
                    <div className="logo">
                        <span></span>
                        <h1>

                        </h1>
                        <p></p>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>

    }
}