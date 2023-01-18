import React, {Component} from "react";
import './style.css'
export class Map extends Component{

    render (){
        return <div className="map">
            <iframe src="https://www.google.com/maps/@40.1833984,44.5054976,12z"></iframe>
        </div>
    }
}