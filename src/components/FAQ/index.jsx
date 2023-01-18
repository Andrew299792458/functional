import React, { Component } from "react";
import "./style.css"
export class Panels extends Component {
    state = {
        flag: false,
        panel: [{
            question: '1. Fusce eu lorem et dui #09C maximus varius?',
            answer: "#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat."
        },
        {
            question: '2.question',
            answer: "2.answer"
        },
        {
            question: '3.question',
            answer: "3.answer"
        },
        {
            question: '4.question',
            answer: "4.answer"
        }
        ]
    }

    Close = () => {
        this.setState({ flag: !this.state.flag })
    }

    render() {

        return <div className="cont">
            <div>
                <h1>FAQs</h1>
                <p>This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666</p>
            </div>
            <div className="quests">
                {this.state.panel.map((elem, index) => {
                    return <div key={index}>
                        <h2 onClick={this.Close} className="quiz"> {elem.question}</h2>
                        {this.state.flag ? <p>{elem.answer}</p> : null}
                    </div>
                })}

            </div>
        </div>
    }
}