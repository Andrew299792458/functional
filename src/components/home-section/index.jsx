import React, { Component } from "react";
import "./style.css"
import avo from "../../assets/images/img-01.jpg"


export class Avo extends Component {

    render() {
        return <>

            <div className="main">
                <img className="avo" src={avo} alt="avo" />
                <div className="text">
                    <h4>Maecenas nulla neque</h4>
                    <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                    <button>Read more</button>
                </div>
            </div>

        </>
    }
}