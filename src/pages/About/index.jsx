import React, { Component } from "react";
import pic1 from "../../assets/images/about-01.jpg"
import pic2 from "../../assets/images/about-02.jpg"
import pic3 from "../../assets/images/about-03.jpg"
import pic4 from "../../assets/images/about-04.jpg"
import facebook from "../../assets/images/fb.png"
import twitter from "../../assets/images/twit.png"
import instagram from "../../assets/images/inst.png"
import youtube from "../../assets/images/yout.png"


import "./style.css"
export class About extends Component {
    state = {
        list: [
            {
                img: pic1,
                name: "Jennifer Soft",
                ceo: "Founder and CEO",
                about: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
                social: [{
                    icon: facebook,
                    alt: "facebook",
                    link: "facebook.com"
                },
                    {
                        
                    }

                ]

            },
            {

                img: pic2,
                name: "Jennifer Soft",
                ceo: "Founder and CEO",
                about: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
                social: [{

                }]

            },
            {

                img: pic3,
                name: "Jennifer Soft",
                ceo: "Founder and CEO",
                about: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
                social: [{

                }]

            },
            {

                img: pic4,
                name: "Jennifer Soft",
                ceo: "Founder and CEO",
                about: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
                social: [{

                }]
            }
        ],
    }

    render() {
        return <div>
            <h2>ABout Simple House</h2>
            <p>This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.</p>
            <div className="ceoList">
                {this.state.list.map((elem, index) => {
                    return <div key={index}>
                        <img src={elem.img} alt="nkar" />
                        <h4>{elem.name}</h4>
                        <h6>{elem.ceo}</h6>
                        <p>{elem.about}</p>
                        {/* <span>{elem.icons}</span> */}
                    </div>
                })}
            </div>
        </div>
    }
}