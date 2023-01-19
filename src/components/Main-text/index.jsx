import React from "react";
import "./style.css"

export const MainText = (props) => {

    const title = props.title
    const description = props.description

    return <div className="title">
        {title ? <h2>{title}</h2> : null}
        <p>{description}</p>
    </div>
}