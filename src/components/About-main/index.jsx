import React, { Component, useState } from "react";
import "./style.css"
import pic1 from "../../assets/images/about-01.jpg"
import pic2 from "../../assets/images/about-02.jpg"
import pic3 from "../../assets/images/about-03.jpg"
import pic4 from "../../assets/images/about-04.jpg"
import facebook from "../../assets/images/fb.png"
import twitter from "../../assets/images/twit.png"
import instagram from "../../assets/images/inst.png"
import youtube from "../../assets/images/yout.png"



export const AboutMain = () => {


    const [list, setList] = useState([
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

        },
        {

            img: pic2,
            name: "Daisy Walker",
            ceo: "Executive Chef",
            about: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
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

        },
        {

            img: pic3,
            name: "Florence Nelson",
            ceo: "Kitchen Manager",
            about: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
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

        },
        {

            img: pic4,
            name: "Valentina Martin",
            ceo: "Culinary Director",
            about: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
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
    ]
    )


    return <div>
        <div className="ceoList">
            {list.map((elem, index) => {
                return <div className="profile" key={index}>
                    <img src={elem.img} alt={elem.name} />
                    <div>
                        <h4>{elem.name}</h4>
                        <p className="prof">{elem.ceo}</p>
                        <p className="about">{elem.about}</p>
                        <div className="icons">
                            {elem.social.map((sm, index) => {
                                return <div key={index}>
                                    <a href={sm.link}> <img src={sm.icon} alt={sm.name}></img></a>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            })}
        </div>

        <div className="aboutWall">

        </div>
    </div>

}

