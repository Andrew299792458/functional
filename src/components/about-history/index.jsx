import React, { Component } from "react"
import "./style.css"
import Picture from "../../assets/images/about-06.jpg"

export class History extends Component {
    render() {
        return <div className="history">
            <img src={Picture} alt="history"></img>
            <div className="text">
                <h2>History of our restaurant</h2>
                <p>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
                <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
            </div>
        </div>



    }
}