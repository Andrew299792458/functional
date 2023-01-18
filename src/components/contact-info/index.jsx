import React, { Component } from "react";
import facebook from "../../assets/images/fb.png"
import twitter from "../../assets/images/twit.png"
import instagram from "../../assets/images/inst.png"
import youtube from "../../assets/images/yout.png"
import "./style.css"

export class Info extends Component {
    state = {
        social: [{
            icon: facebook,
            alt: "facebook",
            link: "facebook.com"
        },
        {
            icon: twitter,
            alt: "twitter",
            link: "twitter.com"
        },
        {
            icon: instagram,
            alt: "instagram",
            link: "instagram.com"
        },
        {
            icon: youtube,
            alt: "youtube",
            link: "youtube.com"
        }

        ]
    }

    render() {

        return <div>
            <h2>Our Address</h2>
            <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
            <p>080-090-0110</p>
            <p>info@company.co</p>
            <div className="listSocial">{this.state.social.map((sm, index) => {
                return <div key={index}>
                    <a href={sm.link}> <img src={sm.icon} alt={sm.name}></img></a>
                </div>
            })}</div>
        </div>
    }
}