import React, { Component } from "react";
import "./style.css"
import avo from "../../assets/images/img-01.jpg"


export const Avo = () => {


    return <>

        <div className="avoMain">
            <img className="avo" src={avo} alt="avo" />
            <div className="avoText">
                <h4>Maecenas nulla neque</h4>
                <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                <button>Read more</button>
            </div>
        </div>

    </>

}