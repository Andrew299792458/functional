import React, { useState } from "react";
import { Component } from "react";
import Pizza1 from "../../assets/images/1.jpg"
import Pizza2 from "../../assets/images/2.jpg"
import Pizza3 from "../../assets/images/3.jpg"
import Salad1 from "../../assets/images/4.jpg"
import Salad2 from "../../assets/images/5.jpg"
import Noodle1 from "../../assets/images/6.jpg"
import Noodle2 from "../../assets/images/7.jpg"
import "./style.css"

export const List = () => {

    const [name, setName] = useState("pizza")
    const [list, setList] = useState([
        {
            img: Pizza1,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: "pizza"
        },
        {
            img: Pizza2,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: "pizza"
        },
        {
            img: Pizza3,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: "pizza"
        },
        {
            img: Salad1,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: "salad"
        },
        {
            img: Salad2,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: "salad"
        },
        {
            img: Noodle1,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: "noodle"
        },
        {
            img: Noodle2,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: "noodle"
        }]
    )


    const [buttons, setButtons] = useState(["pizza", "salad", "noodle"])
    let list2 = []

    const active = (elem) => {
        console.log("ok")
        setName({ name: elem })
        list2 = list.filter(x => x.type === elem)
    }
    return <>
        <div className="prod">
            <div className="btn"> {buttons.map((elem, index) => {
                return <button onClick={() => active(elem)} className={name === elem ? "active" : null} key={index}>{elem}</button>
            })}
            </div>
            <div className="lists">
                {list2.map((elem, index) => {
                    return <div className="article" key={index}>
                        <img src={elem.img} alt="pic" />
                        <h4>{elem.title}</h4>
                        <p>{elem.description}</p>
                        <span>{elem.price}</span>
                    </div>
                })}
            </div>
        </div>

    </>
}

