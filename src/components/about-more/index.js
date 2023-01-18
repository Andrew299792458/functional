import React, { Component } from "react"
import "./style.css"
import pepper from "../../assets/images/pepper.png"
import leaves from "../../assets/images/leaves.png"
import cup from "../../assets/images/coffee-cup.png"

export class AboutMore extends Component {
    render() {
        return <div className="Main">
            <div>
                <img src={pepper} alt="pepper"></img>
                <p>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                <button style={{ backgroundColor: "blue" }}>Read more</button>
            </div>
            <div >
                <img src={leaves} alt="leaf"></img>
                <p>Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</p>
                <button style={{ backgroundColor: "green" }}>Read more</button>
            </div>
            <div >
                <img src={cup} alt="cup"></img>
                <p>Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.</p>
                <button style={{ backgroundColor: "red" }}>Read more</button>
            </div>
        </div>
    }
}