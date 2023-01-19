import React from "react";
import Logo from "../assets/images/simple-house-logo.png"
import "./style.css"
import { NavLink } from "react-router-dom";


export const Routing =()=>{
    
        return <>
            <div className="head">
                <div className="wall">
                    <div className="header">
                        <div className="logo">
                            <img src={Logo} alt="logo"></img>
                            <div className="logoText">
                                <h1 className="S-H">
                                    Simple House
                                </h1>
                                <p className="N-R">new restaurant template</p>
                            </div>

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
            </div>
        </>

    
}