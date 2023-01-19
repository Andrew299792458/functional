import React, { Component } from "react";
import { MainText } from "../../components/Main-text"
import { History } from "../../components/about-history"
import { AboutMore } from "../../components/about-more";
import { AboutMain } from "../../components/About-main";
import "./style.css"

export const About =()=> {

        return <div className="profiles">
            <MainText title={"About Simple House"} description={"This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."} />
            <div className="moreHistory">
                <AboutMain />
                <AboutMore />
                <History />
            </div>
        </div>
    
}